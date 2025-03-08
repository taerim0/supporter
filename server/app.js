const express = require('express'); // Express 가져오기
const app = express(); // 앱 생성
const port = 3000; // 사용할 포트 설정

// 기본 경로("/")에 대한 응답
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 실행 중입니다! http://localhost:${port}`);
});
