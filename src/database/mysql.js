const mysql= require('mysql2');
const config = require('../config');
const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.pass,
    database: config.mysql.dbnm, 
}

let conexion;

function connectionMysql(){
    conexion = mysql.createConnection(dbconfig);
    conexion.connect(error => {
        if (error){
            console.log('[Error en BBDD:] ', error );
            setTimeout(connectionMysql, 2000)
        } else {
            console.log('BBDD conectada.')
        }
    });
    conexion.on('Error: ', err => {
        console.log('[Error en BBDD:] ', err );
        if (err.code === 'PROTOCOL_CONNECTION_LOST')
            connectionMysql();
        else
            throw err;

    })
}

connectionMysql();

function findAll(tabla){
   return new Promise((resolve, reject) => {
        conexion.query(`select * from ${tabla}`, (error, result) => {
            return error ? reject('Error en SQL findAll: ', error) : resolve(result);
        });
   }
)
}

function findOneById(tabla, id){
   return new Promise((resolve, reject) => {
        conexion.query(`select * from ${tabla} where id = ${id}`, (error, result) => {
            return error ? reject('Error en SQL findOneById: ', error) : resolve(result);
        });
   }
)
}

function saveOne(tabla, data){
    return new Promise((resolve, reject) => {
        //conexion.query(`update ${tabla} set name = ?, email = ?, phone = ?, birthdate = ?, edad = ? where id = ${data.id}`, data.name, data.email, data.phone, data.birthdate, data.edad, (error, result) => {        
        conexion.query(`insert into ${tabla} (name, email, phone, birthdate, edad) values ('${data.name}', '${data.email}', '${data.phone}', '${data.birthdate}', ${data.edad})`, (error, result) => {
            console.log('Error: ', error)
            return error ? reject('Error en SQL saveOne: ', error) : resolve(result);
        });
   })

}

function updateOne(tabla, data){
       return new Promise((resolve, reject) => {
        //conexion.query(`update ${tabla} set name = ?, email = ?, phone = ?, birthdate = ?, edad = ? where id = ${data.id}`, data.name, data.email, data.phone, data.birthdate, data.edad, (error, result) => {        
        conexion.query(`update ${tabla} set name = '${data.name}', email = '${data.email}', phone = '${data.phone}', birthdate = '${data.birthdate}', edad = '${data.edad}' where id = ${data.id}`, (error, result) => {
            return error ? reject('Error en SQL updateOne: ', error) : resolve(result);
        });
   })
}

function deleteOne(tabla, id){
   return new Promise((resolve, reject) => {
        //conexion.query(`delete from ${tabla} where id = ?`, id (error, result) => {
        conexion.query(`delete from ${tabla} where id = ${id}`, (error, result) => {
            return error ? reject('Error en SQL deleteOne: ', error) : resolve(result);
        });
   })
}

module.exports = { findAll, findOneById, saveOne, updateOne, deleteOne}