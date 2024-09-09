const express=require('express');
const router=express.Router();

const{agregarProducto,traerProductos,pausarProducto,activarProducto,eliminarProducto,editarProducto}=require('../controllers/controllers')

router.post('/agregarProducto',agregarProducto);
router.get('/traerProductos',traerProductos);
router.post('/pausarProducto',pausarProducto);
router.post('/activarProducto',activarProducto);
router.delete('/eliminarProducto',eliminarProducto);
router.put('/editarProducto',editarProducto);


module.exports=router;