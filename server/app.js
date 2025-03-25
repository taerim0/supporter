const express = require('express'); 
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);  // `mysql-session`을 `express-session`과 연결
const app = express(); 
const port = 3001; 
const options = require('./lib/session.js')


const session_store = new MySQLStore(options);

app.use(
  session({
    key: "session_cookie_name",
    secret: "session_cookie_secret",
    store: session_store,
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World! 서버가 정상적으로 작동합니다.");
});





app.listen(port, () => {
  console.log(`서버가 실행 중입니다! http://localhost:${port}`);
});
