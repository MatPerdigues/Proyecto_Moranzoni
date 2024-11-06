import { Fragment,useEffect } from 'react'
import './cardPedidos.css'
// import CardDetalles from '../cardDetalles/cardDetalles';

export default function CardPedidos({info}){

    const productos = JSON.parse(info.pedido); 

    const mostrarProd =()=>{
        console.log(productos)
    }



    // const desplegarProductos = ()=>{ 

    //     for(let x=0; x<productos.lenght; x++){
              
    //         for(let y=0; y<arrayProductos.lenght; y++){
    //             if(productos[x].id===arrayProductos[y].id){                    
    //                 const parent1 = document.getElementById("detalleProd"+info.id);
    //                 const child1 = document.getElementById('tabDetalle'+info.id+"-"+productos[x].id);
                
    //                 if(parent1.contains(child1)===false){
    //                     let tableDetalle = document.createElement('table');
    //                     tableDetalle.setAttribute('class','tabDetalle');
    //                     tableDetalle.setAttribute('id','tabDetalle'+info.id+"-"+productos[x].id);
    //                     document.getElementById("detalleProd"+info.id).appendChild(tableDetalle);
                
    //                     let tdDetalle1 = document.createElement('td');
    //                     tdDetalle1.setAttribute('class','tdDetalle1');
    //                     tdDetalle1.setAttribute('id','tdDetalle1'+info.id+"-"+productos[x].id);
    //                     tdDetalle1.innerHTML=arrayProductos[y].descripcion;
    //                     document.getElementById('tabDetalle'+info.id+"-"+productos[x].id).appendChild(tdDetalle1);
                
    //                     let tdDetalle2 = document.createElement('td');
    //                     tdDetalle2.setAttribute('class','tdDetalle2');
    //                     tdDetalle2.setAttribute('id','tdDetalle2'+info.id+"-"+productos[x].id);
    //                     tdDetalle2.innerHTML=productos[x].cantidad;
    //                     document.getElementById('tabDetalle'+info.id+"-"+productos[x].id).appendChild(tdDetalle2);
    //                 }                
    //             }
    //         }
    //     }

    // }


    // useEffect(()=>{
    //     desplegarProductos();       

    // },[])

    
    return(
        <Fragment>
            <section class='infoPedido' onClick={mostrarProd}>
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
                        <td class='tdDetalle2'>Cantidad</td>
                    </table>
                    {/* {productos.map((prod)=>{
                        return <CardDetalles key={prod.id} prodPedido={prod} listProd={listProd}></CardDetalles>
                    })} */}
                </div>
            </section>
            
        </Fragment>
    )
} 