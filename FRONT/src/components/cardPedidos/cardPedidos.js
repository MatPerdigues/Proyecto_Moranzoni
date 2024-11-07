import { Fragment,useEffect } from 'react'
import './cardPedidos.css'
import CardDetalles from '../cardDetalles/cardDetalles';

export default function CardPedidos({info,listProd}){

    const productos = JSON.parse(info.pedido); 

    let objetoArray = [];

   const prueba = ()=>{
    console.log(listProd);
   }
    
    // mostrarProd =()=>{

    //     for(let x=0; x<productos.length; x++){
    //         let ind = listProd.findIndex(obj=> obj.id===productos[x].id);
    //         console.log(productos[x].id);
    //         console.log(productos[x].cantidad);
    //         console.log(listProd[ind].descripcion);
    //         console.log(listProd[ind].marca);


    //         const parent1 = document.getElementById("detalleProd"+info.id);
    //         const child1 = document.getElementById('tabDetalle'+info.id+"-"+productos[x].id);
    //         if(parent1.contains(child1)===false){
    //             let tableDetalle = document.createElement('table');
    //             tableDetalle.setAttribute('class','tabDetalle');
    //             tableDetalle.setAttribute('id','tabDetalle'+info.id+"-"+productos[x].id);
    //             document.getElementById("detalleProd"+info.id).appendChild(tableDetalle);
                
    //             let tdDetalle1 = document.createElement('td');
    //             tdDetalle1.setAttribute('class','tdDetalle1');
    //             tdDetalle1.setAttribute('id','tdDetalle1'+info.id+"-"+productos[x].id);
    //             tdDetalle1.innerHTML=listProd[ind].descripcion;
    //             document.getElementById('tabDetalle'+info.id+"-"+productos[x].id).appendChild(tdDetalle1);
                
    //             let tdDetalle3 = document.createElement('td');
    //             tdDetalle3.setAttribute('class','tdDetalle3');
    //             tdDetalle3.setAttribute('id','tdDetalle3'+info.id+"-"+productos[x].id);
    //             tdDetalle3.innerHTML=listProd[ind].marca;
    //             document.getElementById('tabDetalle'+info.id+"-"+productos[x].id).appendChild(tdDetalle3);
        
    //             let tdDetalle2 = document.createElement('td');
    //             tdDetalle2.setAttribute('class','tdDetalle2');
    //             tdDetalle2.setAttribute('id','tdDetalle2'+info.id+"-"+productos[x].id);
    //             tdDetalle2.innerHTML=productos[x].cantidad;
    //             document.getElementById('tabDetalle'+info.id+"-"+productos[x].id).appendChild(tdDetalle2);
            
    //         }
    // }

   
       
        // for(let x=0; x<productos.length; x++){
        //     for(let y=0; y<listProd.length; y++){
        //         if(productos[x].id===listProd[y].id)
        //             console.log(productos[x].id + listProd[y].descripcion + productos[x].cantidad);
        //             const parent1 = document.getElementById("detalleProd"+info.id);
        //             const child1 = document.getElementById('tabDetalle'+info.id+"-"+productos[x].id);

        //             if(parent1.contains(child1)===false){
        //                 let tableDetalle = document.createElement('table');
        //                 tableDetalle.setAttribute('class','tabDetalle');
        //                 tableDetalle.setAttribute('id','tabDetalle'+info.id+"-"+productos[x].id);
        //                 document.getElementById("detalleProd"+info.id).appendChild(tableDetalle);

        //                 let tdDetalle1 = document.createElement('td');
        //                 tdDetalle1.setAttribute('class','tdDetalle1');
        //                 tdDetalle1.setAttribute('id','tdDetalle1'+info.id+"-"+productos[x].id);
        //                 tdDetalle1.innerHTML=listProd[y].descripcion;
        //                 document.getElementById('tabDetalle'+info.id+"-"+productos[x].id).appendChild(tdDetalle1);

        //                 let tdDetalle3 = document.createElement('td');
        //                 tdDetalle3.setAttribute('class','tdDetalle3');
        //                 tdDetalle3.setAttribute('id','tdDetalle3'+info.id+"-"+productos[x].id);
        //                 tdDetalle3.innerHTML=listProd[y].marca;
        //                 document.getElementById('tabDetalle'+info.id+"-"+productos[x].id).appendChild(tdDetalle3);
                
        //                 let tdDetalle2 = document.createElement('td');
        //                 tdDetalle2.setAttribute('class','tdDetalle2');
        //                 tdDetalle2.setAttribute('id','tdDetalle2'+info.id+"-"+productos[x].id);
        //                 tdDetalle2.innerHTML=productos[x].cantidad;
        //                 document.getElementById('tabDetalle'+info.id+"-"+productos[x].id).appendChild(tdDetalle2);
                    
        //             }
                    
        //     }
        // }


    // }

    
    return(
        <Fragment>
            <section class='infoPedido'>
                <table class='tabPedidos'>
                    <td class='tdPedidosAdmin' id='numPedidos'>{info.id}</td>
                    <td class='tdPedidosAdmin' id='nomPedidos'>{info.nombre}</td>
                    <td class='tdPedidosAdmin' id='totPedidos'>${info.total}</td>
                </table>
                <p class='h6infoPedido' id='h6infoPedido1'>Dirección: {info.direccion}</p>
                <p class='h6infoPedido'>Localidad: {info.localidad}</p>
                <p class='h6infoPedido'>Teléfono: {info.telefono}</p>
                <p class='h6infoPedido'>Fecha: {info.fecha}</p>
                <div class='detalleProd' id={"detalleProd"+info.id}>
                    <table class='tabDetalle'>
                        <td class='tdDetalle1'>Producto</td>
                        <td class='tdDetalle3'>Marca</td>
                        <td class='tdDetalle2'>Cantidad</td>
                    </table>
                    {productos.map((producto)=>{
                        return <CardDetalles key={producto.id} info={producto} listProd={listProd}/>
                    })} 
                </div>
            </section>
            
        </Fragment>
    )
} 