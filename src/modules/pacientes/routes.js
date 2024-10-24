const express = require('express');
const controller = require('./controller');

const router = express.Router();
const respuesta = require('../../outputs/response/respuestas');

router.get('/', findAll);
router.get('/:id', findOneById);
router.post('/', saveOne);
router.put('/', updateOne);
router.delete('/:id', deleteOne);

async function findAll(req, res, next) {
    try {
        const findAll = await controller.findAll();
        respuesta.success(req, res, findAll, 200);
    } catch (err){
        next(err);
    }
}

async function findOneById(req, res, next) {
        try {
        const findOne = await controller.findOneById(req.params.id);
        respuesta.success(req, res, findOne, 200);
    } catch (err){
        next(err);
    }
}

async function saveOne(req, res, next) {
        try {
        const updateOne = await controller.saveOne(req.body);
        respuesta.success(req, res, updateOne, 200);
    } catch (err){
        next(err);
    }
}

async function updateOne(req, res, next) {
        try {
        const updateOne = await controller.updateOne(req.body);
        respuesta.success(req, res, updateOne, 200);
    } catch (err){
        next(err);
    }
}

async function deleteOne(req, res, next) {
        try {
        const deleteOne = await controller.deleteOne(req.params.id);
        respuesta.success(req, res, deleteOne, 200);
    } catch (err){
        next(err);
    }
}

module.exports = router;