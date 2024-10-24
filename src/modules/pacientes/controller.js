const db = require('../../database/mysql');
const TABLE = 'paciente';

function findAll(){
    return db.findAll(TABLE);
}

function findOneById(id){
    return db.findOneById(TABLE, id);
}

function saveOne(body){
    return db.saveOne(TABLE, body);
}

function updateOne(body){
    return db.updateOne(TABLE, body);
}

function deleteOne(id){
    return db.deleteOne(TABLE, id);
}

module.exports = { findAll, findOneById, saveOne, updateOne, deleteOne}