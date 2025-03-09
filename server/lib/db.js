const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',       // 데이터베이스가 실행 중인 서버 주소
  user: 'root',            // MySQL 사용자 계정
  password: 'worud8457',            // MySQL 비밀번호
  database: 'users_db' // 사용할 데이터베이스 이름
});

db.connect((err) => {
  if (err) {
    console.error('DB 연결 오류:', err);
    return;
  }
  console.log('DB 연결 성공');
});

module.exports = db;