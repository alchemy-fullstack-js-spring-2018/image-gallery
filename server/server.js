require('dotenv').config({path: __dirname + '/.env'});
const http = require('http');
const app = require('./lib/app');
const connect = require('./lib/connect');

connect(process.env.MONGO_URI || 'mongodb://localhost:27017/albums');

const server = http.createServer(app);
const port = process.env.port || 3000;

server.listen(port, () => {
  // eslint-disable-next-line
  console.log('server running on', server.address().port);
});