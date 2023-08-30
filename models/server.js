//* Servidor de Express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //http server
        this.server = http.createServer(this.app);

        //configuracion de sockets 
        this.io = socketio(this.server, {/* configuraciones */});

    }

    middlewares() {

        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    configurarSockets() {
        new Sockets(this.io);
    }

    execute() {

        // inicializar middlewares
        this.middlewares();

        // inicializar sockets
        this.configurarSockets();

        // inicializar server
        this.server.listen(this.port, () => {
            console.log('servidor corriendo en puerto:', this.port);
        });
    }

}

module.exports = Server;