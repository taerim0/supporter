const db = require('../lib/db');  // db.js 파일 불러오기



const addUser = (studentID, hashedPassword, callback) => {
  
  db.query('INSERT INTO users (studentID, hash_password) VALUES(?,?)', [studentID, hashedPassword], (err, result) => {
    if (err) {
      // 쿼리 실행 중 오류가 발생한 경우
      callback(err, null);
    } else {
      // 쿼리가 성공적으로 실행되었을 경우
      callback(null, result);
    }
  });
  
};

module.exports=userModel;

