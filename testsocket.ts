import * as io from 'socket.io-client';

const soUrl = 'http://localhost:4003';
const socket = io(soUrl);

socket.on('connect', () => {
  socket.send('Hello!');
  socket.emit('init-app', 'Hello!');
});
