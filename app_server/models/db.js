const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/Loc8r';

const monConn = mongoose.createConnection(dbURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const connetionNotice = (connection, db) => {
    connection.on('connected', () => {
        console.log(`Mongoose connected to ${db}`);
    });

    connection.on('error', err => {
        console.log('Mongoose connection error:', err);
    });

    connection.on('disconnected', () => {
        console.log(`Mongoose disconnected to ${db}`);
    });
};

const gracefulShutdown = (connection, msg, callback) => {
    connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

const shutdownNotice = (connection) => {
    // for nodemon restart
    process.once('SIGUSR2', () => {
        gracefulShutdown(connection, 'nodemon restart', () => {
            process.kill(process.pid, 'SIGUSR2');
        });
    });
    // for app restart
    process.on('SIGINT', () => {
        gracefulShutdown(connection, 'app termination', () => {
            process.exit(0);
        });
    });
    // for heroku restart
    process.on('SIGTERM', () => {
        gracefulShutdown(connection, 'Heroku shutdown', () => {
            process.exit(0);
        });
    });
};

connetionNotice(monConn, dbURI);
shutdownNotice(monConn);

require('./locations');