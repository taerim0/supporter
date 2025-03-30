const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE 
});

db.connect((err) => {
  if (err) {
    console.error('DB 연결 오류:', err);
    return;
  }
  console.log('DB 연결 성공');
});

module.exports = db;


