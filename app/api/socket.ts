import { Server } from 'socket.io';
export default function SocketHandler(req, res) {
    if (res.socket.server.io) {
        console.log('Already set up');
        res.end();
        return;
    }

    const io = new Server(res.socket.server);

    res.socket.server.io = io;

    const onConnection = (socket) => {
        console.log('yo lmao');
    };

    io.on('connection', onConnection);

    console.log('bruh');
    res.end();
}
