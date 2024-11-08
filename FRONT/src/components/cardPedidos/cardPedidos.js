import { Fragment } from 'react'
import './cardPedidos.css'
import CardDetalles from '../cardDetalles/cardDetalles';
import { LiaAngleUpSolid } from "react-icons/lia";

export default function CardPedidos({info,listProd}){

    const productos = JSON.parse(info.pedido); 

    const onHover=()=>{

        document.getElementById("infoPedido" + info.id).style.backgroundColor='rgb(255, 165, 0, 0.2)';
    }


    const outHover=()=>{
        document.getElementById("infoPedido" + info.id).style.backgroundColor='white';
    }


    const expandirInfo = ()=>{
        document.getElementById("infoPedido" + info.id).style.backgroundColor='white';
        document.getElementById("infoPedido" + info.id).style.cursor='default';
        document.getElementById("infoPedido" + info.id).style.height='auto';
        document.getElementById("tabPedidos" + info.id).style.height='auto';
        document.getElementById("infoPedido" + info.id).style.backgroundColor='rgb(255, 165, 0, 0.2)';
        document.getElementById("infoPedido" + info.id).onmouseover = function() {onHover()};
        document.getElementById("infoPedido" + info.id).onmouseout = function() {outHover()};


    }


    const contraerInfo=()=>{
        document.getElementById("infoPedido" + info.id).style.cursor='pointer';
        document.getElementById("infoPedido" + info.id).style.height='50px';
        document.getElementById("tabPedidos" + info.id).style.height='50px';
        document.getElementById("infoPedido" + info.id).onmouseover = function() {onHover()};
        document.getElementById("infoPedido" + info.id).onmouseout = function() {outHover()};

        
    }

    
    return(
        <Fragment>
            <section class='infoPedido' id={'infoPedido' + info.id}>
                <table class='tabPedidos' id={"tabPedidos" + info.id} onClick={expandirInfo}>
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
                <div class='upIcon'><LiaAngleUpSolid class='upIcon2' onClick={contraerInfo}/></div>
                
            </section>
            
        </Fragment>
    )
} 