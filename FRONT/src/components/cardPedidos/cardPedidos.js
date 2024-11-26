import { Fragment} from 'react'
import './cardPedidos.css'
import CardDetalles from '../cardDetalles/cardDetalles';
import { LiaAngleUpSolid } from "react-icons/lia";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";
const API = process.env.REACT_APP_API_URL;

export default function CardPedidos({info,listProd}){

    const productos = JSON.parse(info.pedido); 
    let dato = "";
    let dato1="";



    const onHover=(color)=>{
        document.getElementById("infoPedido" + info.id).style.backgroundColor=color;
    }



    const outHover=(color)=>{
        document.getElementById("infoPedido" + info.id).style.backgroundColor=color;
    }



    const expandirInfo = ()=>{
        document.getElementById("infoPedido" + info.id).style.backgroundColor='white';
        document.getElementById("infoPedido" + info.id).style.cursor='default';
        document.getElementById("infoPedido" + info.id).style.height='auto';
        document.getElementById("infoPedido" + info.id).style.backgroundColor='rgb(255, 165, 0, 0.2)';
        document.getElementById("infoPedido" + info.id).onmouseover = function() {onHover('rgb(255, 165, 0, 0.2)')};
        document.getElementById("infoPedido" + info.id).onmouseout = function() {outHover('white')};   
    }



    const contraerInfo=()=>{
        document.getElementById("infoPedido" + info.id).style.cursor='pointer';
        document.getElementById("infoPedido" + info.id).style.height='50px';
        document.getElementById("infoPedido" + info.id).onmouseover = function() {onHover('rgb(255, 165, 0, 0.2)')};
        document.getElementById("infoPedido" + info.id).onmouseout = function() {outHover('white')};        
    }



    const esconderPedido = ()=>{
        document.getElementById("infoPedido" + info.id).style.display='none'; 
    }


    const cancelarPedido = async()=>{

        let pedido = JSON.parse(info.pedido);
        // document.getElementById("infoPedido" + info.id).style.display='none';
        let arrStock = [];        

        for(let x=0; x<pedido.length; x++){
            let id = pedido[x].id;
            let stock = pedido[x].stock + pedido[x].cantidad;
            const stockProd = new Object();
            stockProd.id = id;
            stockProd.stock = stock;
            arrStock.push(stockProd);
        }

        const formCancelacion=JSON.stringify({
            nuevoStock:arrStock,
            idPedido:info.id 
        }) 

        const response = await fetch(API+"/cancelarPedido",{
            method:"POST",
            body:formCancelacion,
            headers:{                
                'Content-Type':'application/json'
            }})    
            .then((res)=>res.json())
            .then((data)=>{dato=data})              
            
            if(dato.mensaje==="Se ha producido un error"){
                alert("Se ha producido un error");
            } 
                        



        document.getElementById("infoPedido" + info.id).style.transition='all 1s'; 
        document.getElementById("infoPedido" + info.id).style.height='50px';
        document.getElementById("infoPedido" + info.id).style.backgroundColor='rgb(255, 0, 0, 0.2)';
        document.getElementById("infoPedido" + info.id).style.border='none';
        document.getElementById("infoPedido" + info.id).onmouseover = function() {onHover('rgb(255, 0, 0, 0.2)')};
        document.getElementById("infoPedido" + info.id).onmouseout = function() {outHover('rgb(255, 0, 0, 0.2)')}; 
        setTimeout(esconderPedido, 1000);   


        return(response);
    }




    const procesarPedido = async()=>{
        console.log('el pedido esta siendo procesado');
        let id=info.id;

        console.log(id);

        document.getElementById("infoPedido" + info.id).style.transition='all 1s'; 
        document.getElementById("infoPedido" + info.id).style.height='50px';
        document.getElementById("infoPedido" + info.id).style.backgroundColor='rgb(88, 218, 13,0.2)';
        document.getElementById("infoPedido" + info.id).style.border='none';
        document.getElementById("infoPedido" + info.id).onmouseover = function() {onHover('rgb(88, 218, 13,0.2)')};
        document.getElementById("infoPedido" + info.id).onmouseout = function() {outHover('rgb(88, 218, 13,0.2)')}; 
        setTimeout(esconderPedido, 1000);   




        const formProcesar=JSON.stringify({
            id:id            
        }) 


        const response = await fetch(API+"/procesarPedido",{
            method:"POST",
            body:formProcesar,
            headers:{                
                'Content-Type':'application/json'
            }})    
            .then((res)=>res.json())
            .then((data)=>{dato1=data})              
            
            if(dato1.mensaje==="Se ha producido un error"){
                alert("Se ha producido un error");
            } 



    
    
            return(response);




    }

    
    return(
        <Fragment>
            <section class='infoPedido' id={'infoPedido' + info.id}>
                <table class='tabPedidos' id={"tabPedidos" + info.id} onClick={expandirInfo}>
                    <td class='tdPedidosAdmin' id='numPedidos'>{info.id}</td>
                    <td class='tdPedidosAdmin' id='nomPedidos'>{info.nombre}</td>
                    <td class='tdPedidosAdmin' id='totPedidos'>${info.total}</td>
                </table>
                <section class='datosPedido'>
                    <div class='datosPedido1'>
                        <p class='h6infoPedido' id='h6infoPedido1'>Dirección: {info.direccion}</p>
                        <p class='h6infoPedido'>Localidad: {info.localidad}</p>
                        <p class='h6infoPedido'>Teléfono: {info.telefono}</p>
                        <p class='h6infoPedido'>Fecha: {info.fecha}</p>
                        <p class='h6infoPedido'>Estado: {info.estado}</p>
                    </div>
                    {info.estado==="pendiente"?
                    <div class='datosPedido2'>
                        <div class='datosPedido3'>
                            <div class='datosPedido4'><FcCancel id='datosPedidoIcon' onClick={cancelarPedido}/></div>
                            <div class='datosPedido5'><FaTruckArrowRight id='datosPedidoIcon'onClick={procesarPedido}/></div>
                        </div>
                    </div>
                    :""}
                        
                </section>
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