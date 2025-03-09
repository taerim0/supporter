const db = require('../lib/db');  // db.js 파일 불러오기

// 테스트용 쿼리 실행
db.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.error('쿼리 실행 오류:', err);
    return;
  }
  console.log('테이블 데이터:', results);
});