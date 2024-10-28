import { createServer } from 'http';
import process from 'node:process';

let count = 0;

console.log(process.env); 

const server = createServer((req, res) => {
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  if (req.url === '/') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.write(`
      <style>
        body {
          background-color: #1f1f1f;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
      <h1>MEMES GEN</h1>`
    );
    res.end();
  }

  if (req.url === '/api/memes') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    count+=1;
    console.log(count);
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ msg: count }));
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});