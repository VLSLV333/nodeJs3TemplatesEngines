// import { requestHandler } from './routes';

const http = require('http');

const handler = require('./routes').requestHandler;

const server = http.createServer(handler);

server.listen(3000);
