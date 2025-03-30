const express = require('express'); 
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);  // `mysql-session`을 `express-session`과 연결
const authRouter = require("./controllers/authControllers.js");
const dotenv = require('dotenv');

dotenv.config({ path: '../.env'});

const app = express(); 
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
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello, World! 서버가 정상적으로 작동합니다.");
});


const PORT = process.env.PORT || 1141;
app.listen(PORT, "0.0.0.0", () => {
  console.log(process.env.MYSQL_PASSWORD);
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});



