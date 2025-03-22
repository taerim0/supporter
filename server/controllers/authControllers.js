//로그인, 회원가입 관련
const db = require('../lib/db.js');
const bcrypt = require('bcrypt');
const router = require("Router");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 폼 데이터 ex)로그인, 회원가입 받기 위해 사용
app.use(router) // -> 사용한 미들웨어 app에게 알려주기

router.route("/signup").post(async (req, res) => {
  const {id, password} = req.body;   //구조분해할당 const id = req.body.id

  const hashedPW = await bcrypt.hash(password,10);
  
  
  userModel.addUser(id,hashedPW,(err,result)=>{
    if(err){
      return res.status(500).json({ message: '회원가입 중 오류가 발생했습니다.' });   //5xx은 server 문제일 때, 4xx은 클라이언트의 요청 문제일 때
    }
    console.log('회원가입성공');
    return res.status(200).json({message: '회원가입 성공'});
  });



  router.route("/login").post(async (req,res) =>{
    const id = req.body.id;
    const pw = req.body.password;
    



  })

  
  
});


