import http from "http";
import express from "express";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, TypeScript!");
});
const app=express();
app.get('/',(req,res)=>{
  res.send('Hello, TypeScript!');
})
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
