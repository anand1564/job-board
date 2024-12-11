import http from "http";
import express from "express";
import userRouter from './routes/user';

const app=express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
