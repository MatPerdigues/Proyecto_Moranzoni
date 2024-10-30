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
    const{pedido,nombre,direccion,telefono,total}=req.body;

    dbConnection.query(`INSERT INTO pedidos (pedido,nombre,direccion,telefono,total) VALUES (?,?,?,?,?)`,[pedido,nombre,direccion,telefono,total],(error,data)=>{
        if(error){
            console.log(error);
            res.json({
                mensaje:"Se ha producido un error. Si el error persiste contactese con la empresa"
            });
        } else{
            res.json({
                mensaje:"Pedido cargado correctamente"
            })
        }



    })


}





module.exports={agregarProducto,traerProductos,pausarProducto,activarProducto,eliminarProducto,editarProducto,enviarMarca,traerMarcas,eliminarMarca,agregarPedido};