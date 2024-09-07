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






module.exports={agregarProducto,traerProductos,pausarProducto,activarProducto,eliminarProducto};