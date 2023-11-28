const express = require('express')
const passport = require('passport')
const { checkRoles } = require('../../middlewares/authHandler')
const ProveedorController = require('../../controllers/proveedorController')

const router = express.Router()

router
    .get('/',ProveedorController.findAllProveedores)
    .post('/',ProveedorController.createProveedor)
    .get('/:id',ProveedorController.findOneProveedor)
    .delete('/:id',ProveedorController.deleteProveedor)
    
module.exports = router