const express = require('express'); 
const session = require('express-session');


const app = express(); 
const port = 3000; 



app.listen(port, () => {
  console.log(`서버가 실행 중입니다! http://localhost:${port}`);
});
