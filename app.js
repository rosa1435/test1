import express from 'express';
import connect from './schemas/index.js';
import Router from './routes/router.js'; // 이름을 확인하고 필요에 따라 수정

const app = express();
const PORT = 3000;

connect();

// Express에서 req.body에 접근하여 body 데이터를 사용할 수 있도록 설정합니다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// '/user' 경로에 대한 라우트를 등록합니다.
app.use('/user', Router);

app.listen(PORT, () => {
  console.log(`${PORT} 포트로 서버가 열렸어요!`);
});