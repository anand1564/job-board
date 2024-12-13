import http from "http";
import express from "express";
import userRouter from './routes/user';
import jobRouter from './routes/job';
import companyRouter from './routes/addCompany'

const mongoose = require('mongoose');
const database_url=process.env.DATABASE_URL || "";
mongoose.connect(database_url, {
})
.then(() => console.log('Connected to MongoDB'))
//@ts-ignore
.catch(err => console.error('Failed to connect to MongoDB', err));


const app=express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter);
app.use('/job',jobRouter);
app.use('/company',companyRouter);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
