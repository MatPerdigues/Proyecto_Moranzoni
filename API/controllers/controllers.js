const dbConnection = require('../config/dataBase');

const agregarProducto= async (req,res)=>{
    const{descripcion,marca,categoria,stock,precio}=req.body;

    dbConnection.query("INSERT INTO Productos (descripcion,marca,categoria,stock,precio,activo) VALUES (?,?,?,?,?,'true')",[descripcion,marca,categoria,stock,precio],(error,data)=>{
        if(error){
            console.log(error);
        } else {
            res.json({
                mensaje:`Producto cargado correctamente!`});
        }
    })

}

const traerProductos=async(req,res)=>{
    

    dbConnection.query("SELECT * FROM Productos",(error,data)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.json(data);
        }
    })
}



const pausarProducto = async(req,res)=>{

    const{idPausa}=req.body;

    dbConnection.query(`UPDATE Productos SET activo='false' WHERE id="${idPausa}"`,(error,data)=>{
        if(error){
            res.send(error);
            console.log(error);
        }else{     
            dbConnection.query("SELECT * FROM Productos",(error,data)=>{
                if(error){
                    console.log(error);
                    res.send(error);
                }else{                   
                    res.json(data);
                }
            })

        }
    })    
}




const activarProducto = async(req,res)=>{

    const{idActivar}=req.body;

    dbConnection.query(`UPDATE Productos SET activo='true' WHERE id="${idActivar}"`,(error,data)=>{
        if(error){
            res.send(error);
            console.log(error);
        }else{            
            dbConnection.query("SELECT * FROM Productos",(error,data)=>{
                if(error){
                    console.log(error);
                    res.send(error);
                }else{                   
                    res.json(data);
                }
            })


        }
    })
}



const eliminarProducto = async (req,res)=>{

   
    const{idEliminar}=req.body;

    dbConnection.query(`DELETE FROM Productos WHERE id="${idEliminar}"`,(error,data)=>{
        if(error){
            console.log(error);
        }else{            
            dbConnection.query("SELECT * FROM Productos",(error,data)=>{
                if(error){
                    console.log(error);
                    res.send(error);
                }else{                   
                    res.json(data);
                }
            })


        }

    })
}    


const editarProducto = async (req,res)=>{

   
    const{editDesc,editMarca,editCat,editStock,editPrecio,idEdit}=req.body;

    dbConnection.query(`UPDATE Productos SET descripcion="${editDesc}", marca="${editMarca}", categoria="${editCat}", stock="${editStock}", precio="${editPrecio}" WHERE id="${idEdit}"`,(error,data)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.json({
                mensaje:"Producto actualizado correctamente!"
            });
            }
        })
    }




const enviarMarca = async(req,res)=>{
    const{marca,url} = req.body;

    dbConnection.query(`INSERT INTO marcas (nombre,imagen) VALUES (?,?)`,[marca,url],(error,data)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.json({
                mensaje:'Marca cargada correctamente!'
            })
        }
    }

    )
}



const traerMarcas=async(req,res)=>{
    

    dbConnection.query("SELECT * FROM marcas",(error,data)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.send(data)
        }
    })
}




const eliminarMarca = async(req,res)=>{

    const{idMarca}=req.body;

    dbConnection.query(`DELETE FROM marcas WHERE id=${idMarca}`,(error,data)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.json({
                mensaje:"Marca eliminada correctamente!"
            })
        }
    }

    )

}

 

const agregarPedido = async(req,res)=>{
    const{pedido,nombre,direccion,localidad,telefono,total,fecha}=req.body;

    dbConnection.query(`INSERT INTO pedidos (pedido,nombre,direccion,localidad,telefono,total,fecha,estado) VALUES (?,?,?,?,?,?,?,?)`,[pedido,nombre,direccion,localidad,telefono,total,fecha,"pendiente"],(error,data)=>{
        if(error){
            console.log(error);
            res.json({
                mensaje:"Se ha producido un error. Si el error persiste contactese con la empresa"
            });
        } else{

            let query = "UPDATE Productos SET stock = CASE id ";
            const ids = [];

            const cadena = pedido;
            const arrayObjetos = JSON.parse(cadena);    

            arrayObjetos.forEach((producto) => {
                query += `WHEN ${producto.id} THEN ${producto.stock} `;
                ids.push(producto.id);
              });

            query += `END WHERE id IN (${ids.join(",")})`;

            dbConnection.query(query,(error,data)=>{
                if(error){
                    console.log(error);
                    res.json({
                        mensaje:"Se ha producido un error. Si el error persiste contactese con la empresa"
                    });

                }else{
                    // res.json({
                    //     mensaje:"Pedido cargado correctamente"
                    // })
                    dbConnection.query("SELECT * FROM pedidos WHERE id = LAST_INSERT_ID()",(error,data)=>{
                        if(error){
                            console.log(error);
                            res.json({
                                mensaje:"Se ha producido un error. Si el error persiste contactese con la empresa"
                            });
                        }else{                       
                            res.send(data);

                        }
                    });
                }
            })
        }
    })
}




const traerPedidos=async(req,res)=>{    

    dbConnection.query("SELECT * FROM pedidos",(error,data)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.send(data)
        }
    })
}



const cancelarPedido = async(req,res)=>{
    const{nuevoStock,idPedido}=req.body;
    let queryStock = "UPDATE Productos SET stock = CASE id ";
    const ids = [];
    const estado = "cancelado"

    

    nuevoStock.forEach((producto) => {
        queryStock += `WHEN ${producto.id} THEN ${producto.stock} `;
        ids.push(producto.id);
      });

    queryStock += `END WHERE id IN (${ids.join(",")})`;


    const queryEstado = `UPDATE pedidos SET estado = "cancelado" WHERE id = ${idPedido};`;



    dbConnection.query(queryStock,(error,data)=>{
        if(error){
            console.log(error);
            res.json({
                mensaje:"Se ha producido un error"
            });

        }else{
            dbConnection.query(queryEstado,(error,data)=>{
                if(error){
                    console.log(error);
                    res.json({
                        mensaje:"Se ha producido un error"
                    });
                }else{
                    res.json({
                        mensaje:"Stock actualizado"
                    });
                }
            })  
        }   
    })
}




const procesarPedido = async(req,res)=>{

    const{id}=req.body;
    let estado = "procesado"
    dbConnection.query(`UPDATE pedidos SET estado="procesado" WHERE id=${id}`,(error,data)=>{
        if(error){
            console.log(error);
            res.json({
                mensaje:"Se ha producido un error"
            });
        }
    })}


const enviarMensaje = async(req,res)=>{
    const{fechaMensaje,telefono,mail,msg}=req.body;


    dbConnection.query(`INSERT INTO mensajes (fecha,telefono,email,mensaje) VALUES (?,?,?,?)`,[fechaMensaje,telefono,mail,msg],(error,data)=>{
        if(error){
            console.log(error)
            res.json({
                mensaje:'Se ha producido un error. Intentalo nuevamente.'
            })
        } else {
            res.json({
                mensaje:'Muchas gracias por tu mensaje!! Nos contacteremos a la brevedad.'
            })
        }
    }
)
}







module.exports={agregarProducto,traerProductos,pausarProducto,activarProducto,eliminarProducto,editarProducto,enviarMarca,traerMarcas,eliminarMarca,agregarPedido,traerPedidos,cancelarPedido,procesarPedido,enviarMensaje};