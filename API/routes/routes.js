const express=require('express');
const router=express.Router();

const{agregarProducto,traerProductos,pausarProducto,activarProducto,eliminarProducto,editarProducto,enviarMarca,traerMarcas,eliminarMarca,agregarPedido,traerPedidos,cancelarPedido,procesarPedido,enviarMensaje}=require('../controllers/controllers')

router.post('/agregarProducto',agregarProducto);
router.get('/traerProductos',traerProductos);
router.post('/pausarProducto',pausarProducto);
router.post('/activarProducto',activarProducto);
router.delete('/eliminarProducto',eliminarProducto);
router.put('/editarProducto',editarProducto);
router.post('/enviarMarca',enviarMarca);
router.get('/traerMarcas',traerMarcas);
router.delete('/eliminarMarca',eliminarMarca);
router.post('/agregarPedido',agregarPedido);
router.get('/traerPedidos',traerPedidos);
router.post('/cancelarPedido',cancelarPedido);
router.post('/procesarPedido',procesarPedido);
router.post('/enviarMensaje',enviarMensaje);


module.exports=router;