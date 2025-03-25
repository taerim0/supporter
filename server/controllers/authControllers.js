//로그인, 회원가입 관련
const db = require('../lib/db.js');
const bcrypt = require('bcrypt');
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 폼 데이터 ex)로그인, 회원가입 받기 위해 사용
app.use(router) // -> 사용한 미들웨어 app에게 알려주기
const regexId = /^[a-zA-Z0-9@$!%*?&-]{4,20}$/;        //정규식 객체는 /로 감싸서 만들 수 있음
// 길이 4~20, 영문 대소문자, 숫자, @$!*?&- 사용 가능
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
// 최소 8자, 대소문자, 숫자, 특수문자 포함, 최대 20자

router.route("/login_status").get(async (req, res) => { // 로그인 상태를 확인하기 위함
   const sendData = {login_status: ''};
   if(req.session.login === true){
    console.log('로그인 상태')
    sendData.login_status = 'islogined'
   }

  return res.send(sendData);
})

router.route("/signup").post(async (req, res) => {
  const {id, password} = req.body;   
  const hashedPW = await bcrypt.hash(password,10);
  const sendData = {singup_Success: ''};
  if(!regexId.test(id)){
    sendData.singup_Success = '아이디 양식에 맞게 다시 입력해 주세요.';
    return res.send(sendData);
  }
  if(!regexPw.test(password)){
    sendData.singup_Success = '비밀번호 양식에 맞게 다시 입력해 주세요.';
    return res.send(sendData);
  }
  userModel.addUser(id,hashedPW,(err,result)=>{
    if(err){
      return res.status(500).json({ message: '회원가입 중 오류가 발생했습니다.' });   //5xx은 server 문제일 때, 4xx은 클라이언트의 요청 문제일 때
    }
    console.log('회원가입성공');
    return res.status(200).json({message: '회원가입 성공'});
  });
  
});

router.route("/login").post(async (req,res) =>{        //로그인 -> 회원가입이 되어있는지, 비밀번호가 맞는지 확인. 세션은 로그인을 하는 과정에서 만들어지고, 로그아웃을 하면 사라짐
  const id = req.body.id;
  const pw = req.body.password;
  var sendData = {isLogin : ''};
  db.query(`SELECT * FROM users WHERE studentID = ?`,[id], (err,data,fields) => {
    if(err){
      sendData.isLogin = 'query err';
      res.send(sendData);
      throw err;
      
    }
    if(data.length>0){ //정보가 존재할 때
      bcrypt.compare(pw, data[0].hash_password,(err,result)=>{
        if(err){
          sendData.isLogin= 'compare err'
          res.send(sendData);
          throw err;
        }
        else{

          if(result === true){
            req.session.login = true;
            req.session.userId= id;
            console.log('로그인성공');
            sendData.isLogin = '로그인성공><';
            return res.send(sendData); 
          }
          else{
            sendData.isLogin = '비밀번호가 불일치';
            return res.send(sendData);
          }

        }
      })
    }
    else{
      sendData.isLogin = '일치하는 정보가 존재하지 않습니다. 아이디와 비밀번호를 정확하게 입력해 주세요.';
      return res.send(sendData)
    }
  });

});
router.route("/logout").post(async (req, res) =>{
  req.session.destroy(err => {
    if(err){
      res.status(500).json({ message: '비상비상 오류 발생' });
    }
    return res.redirect("/main");
  })

})



