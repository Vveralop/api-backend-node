require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT   || 2000,
    },
    mysql: {
        host: process.env.DBHOST || 'localhost',
        port: process.env.DBPORT || '3306',
        user: process.env.DBUSER || 'root',
        pass: process.env.DBPASS || 'admin',
        dbnm: process.env.DBNAME || 'nodejs'
    }
}