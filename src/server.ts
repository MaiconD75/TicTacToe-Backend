import http from 'http';
import app from './app';

const server = http.createServer(app);

server.listen(3333, () => {
  console.log('lisntening on http://localhost:3333');
});
