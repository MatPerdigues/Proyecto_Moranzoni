import { Fragment } from 'react';
import './panelCompra.css';
import CardListas from '../cardListas/cardListas';
import { useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faFilter} from '@fortawesome/free-solid-svg-icons';
import { GiCheckMark } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
const API = process.env.REACT_APP_API_URL;


export default function PanelCompra (){

    const [listProd,setListProd]=useState([]);
    const [total,setTotal]=useState(0);
    const [totalGlobal,setTotalGlobal]=useState(0);
    
    let filterProd = [];

    let opcCompra = sessionStorage.getItem('opcCompra');
    let tipoCompra = sessionStorage.getItem('tipoCompra');




    if(tipoCompra==='marca'){
        filterProd = listProd.filter((prod)=>prod.marca===opcCompra);
    } else{
        filterProd = listProd.filter((prod)=>prod.categoria===opcCompra);
    }

    
    

    const traerProductos = async()=>{                    
        let productos = await fetch (API+'/traerProductos')
        .then((res)=>res.json())
        .then ((data)=>{setListProd(data)})
        .catch(error => console.log("Se ha producido un error... " +error));         

        return productos;
        }

    useEffect(()=>{
        traerProductos(); 
              
    },[])




    const dispBtn = ()=>{
        document.getElementById('iconClose').style.display='block';
    }



    const ocultarCarrito = ()=>{
        document.getElementById('carrito').style.display='none';
    }




    const sumArrCarrito=(id)=>{ 

        let precio=0

        for(let x=0; x<filterProd.length; x++){
            if(filterProd[x].id===id){
                precio = parseFloat(filterProd[x].precio);
            }
        }
        
        setTotal(precio+total)   
        setTotalGlobal (total.toFixed(2));
     

        
        document.getElementById('carrito').style.width='10%';
        document.getElementById('carrito').style.display='block';
        setTimeout(dispBtn, 2000); 

        const parent = document.getElementById("prodCarrito");
        const child = document.getElementById("prod"+id); 
  
        if(parent.contains(child)===false){
            let infoCarrito = document.createElement('section');
            infoCarrito.setAttribute("id","info"+id);
            infoCarrito.setAttribute("class","infoCarrito");           
            document.getElementById("prodCarrito").appendChild(infoCarrito);

            let descCarrito = document.createElement('div');
            descCarrito.setAttribute("id","prod"+id);           
            descCarrito.innerHTML = "Codigo "+id;
            document.getElementById("info"+id).appendChild(descCarrito);

            let cantCarrito = document.createElement('div');
            cantCarrito.setAttribute("id","cant"+id);            
            cantCarrito.innerHTML = 1;            
            document.getElementById("info"+id).appendChild(cantCarrito);
            
            document.getElementById("info"+id).style.display='flex';
            document.getElementById("info"+id).style.justifyContent='space-between';
            document.getElementById("info"+id).style.width='80%';
            document.getElementById("info"+id).style.margin='auto';
            document.getElementById("info"+id).style.borderBottom='1px solid orange';
           

        }else{

            document.getElementById("info"+id).style.display='flex';

            let stock = 0;
            for(let x=0; x<filterProd.length; x++){
                if(filterProd[x].id===id){
                    stock = filterProd[x].stock;
                }
            }

            let cantidad = parseInt(document.getElementById("cant"+id).innerHTML);             
            if(cantidad<stock){
                document.getElementById("cant"+id).innerHTML=cantidad+1;
            }
        }        
    }




    const cerrarCarrito=()=>{
        document.getElementById('carrito').style.width='0%';
        document.getElementById('carrito').style.transition='all 2s'
        document.getElementById('iconClose').style.display='none';
        setTimeout(ocultarCarrito, 2000); 
    }

    
    
    const restarCarrito=(id)=>{
        let cantidad = parseInt(document.getElementById("cant"+id).innerHTML)

        if(cantidad>0){
            document.getElementById("cant"+id).innerHTML=cantidad-1;
        }


        if(cantidad===1){
            console.log('la cantidad es cero papaaaa')
            document.getElementById("info"+id).style.display='none';
        }

        
    }

   




    return(
        <Fragment>
            <section class='secList'>
                {filterProd.map((listado)=>{
                    return <CardListas key={listado.id} info={listado} sumArrCarrito={sumArrCarrito} restarCarrito={restarCarrito}/>
                })}     
            </section>
            <section class='carrito' id='carrito'>
                <div class='closeCarrito'><IoCloseSharp class='iconClose' id='iconClose' onClick={cerrarCarrito}/></div>
                <div class='divCarrito' id='divCarrito'><FontAwesomeIcon icon={faCartShopping} id='iconCarrito'/></div>
                <section class='titleCarrito' id='titleCarrito'>
                    <h6 class='h6Carrito' id='h6Carrito'>Prod.</h6>
                    <h6 class='h6Carrito' id='h6Carrito'>Cant.</h6>
                </section>
                <section class='prodCarrito' id='prodCarrito'>
                </section>
                <section class='totalCarrito' id='totalCarrito'>
                    <h6 class='h6Carrito'>TOTAL: ${totalGlobal}</h6>
                </section> 
                <section class='checkCarrito' id='checkCarrito'>
                    <GiCheckMark class='checkIcon'/>
                </section>

            </section>
        </Fragment>
    )
}