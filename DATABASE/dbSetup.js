const mysql = require('mysql');

function dbConnection() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'dbtester',
        password: 'dbtester123',
        database: 'job_portal'
    })
    connection.connect();
        return connection;
}

module.exports = dbConnection;