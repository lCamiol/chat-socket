

class Sockets {

    constructor(io) {

        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // On coneccition
        this.io.on('connection', (socket) => {

            //Escuchar evento mensaje-cliente
            socket.on('mensaje-cliente', (data) => {
                console.log(data);
               this.io.emit('mensaje-from-server', data);
            });

        });
    }
}


module.exports = Sockets;