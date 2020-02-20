const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const PORT = 3000;

app.use(cors());

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('moveSlide', (slide) => {
    io.emit('changeSlide', slide)
  })
});

http.listen(PORT, () => {
  console.log(`connect to ${PORT}`)
})
