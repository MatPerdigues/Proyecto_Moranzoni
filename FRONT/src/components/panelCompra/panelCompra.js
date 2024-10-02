import { Fragment } from 'react';
import './panelCompra.css';
import CardListas from '../cardListas/cardListas';
import { useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faXmark} from '@fortawesome/free-solid-svg-icons';
import { GiCheckMark } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Marcas from '../marcas/marcas';
const API = process.env.REACT_APP_API_URL;



export default function PanelCompra (){

    const [listProd,setListProd]=useState([]);
    const [total,setTotal]=useState(0);
    const[marcas,setMarcas]=useState([]);
    const[filterProd,setFilterProd]=useState([]);
    // let filterProd = [];
    // let opcCompra1 = sessionStorage.getItem('opcCompra');
    // let tipoCompra = sessionStorage.getItem('tipoCompra');



    // if(tipoCompra==='marca'){
    //     filterProd = listProd.filter((prod)=>prod.marca===opcCompra1);
    // } else{
    //     filterProd = listProd.filter((prod)=>prod.categoria===opcCompra1);
    // }




    const traerMarcas= async()=>{
        let marcas = await fetch(API+"/traerMarcas")   
        .then((res)=>res.json())
        .then((data)=>{setMarcas(data)})
        .catch(error => console.log("Se ha producido un error... " +error));        
        return marcas;
        }


    useEffect(()=>{
        traerMarcas();       

    },[])



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







    const containerOpc = (event)=>{   

        if(event.currentTarget.id==='btnPedidos'){                     
            
            document.getElementById('containerOpc').style.display='block';
            document.getElementById('btnPedidos').style.opacity='80%';
            document.getElementById('opcPedidos2').style.borderColor='orange';
            document.getElementById('opcPedidos2').style.fontStyle='italic';
            document.getElementById('opcPedidos2').style.fontWeight='500';
            document.getElementById('opcPedidos2').style.border='2px solid orange';
            document.getElementById('opcPedidos4').style.fontWeight='0';
            document.getElementById('opcPedidos4').style.fontStyle='normal';
            document.getElementById('opcPedidos4').style.border='1px solid grey';
            document.getElementById('containerCat').style.display='none';
            document.getElementById('containerMarcas').style.display='grid';
             
        }

        if(event.currentTarget.id==='opcPedidos4'){  
            
            document.getElementById('opcPedidos4').style.border='2px solid orange';
            document.getElementById('opcPedidos2').style.border='1px solid grey';
            document.getElementById('opcPedidos4').style.fontStyle='italic';
            document.getElementById('opcPedidos4').style.fontWeight='500';
            document.getElementById('opcPedidos2').style.fontStyle='normal';
            document.getElementById('opcPedidos2').style.fontWeight='0';    
            document.getElementById('containerMarcas').style.display='none';  
            document.getElementById('containerCat').style.display='flex';        
        }

        if(event.currentTarget.id==='opcPedidos2'){  
            
            document.getElementById('opcPedidos4').style.border='1px solid grey';
            document.getElementById('opcPedidos2').style.border='2px solid orange';
            document.getElementById('opcPedidos4').style.fontStyle='normal';
            document.getElementById('opcPedidos2').style.fontStyle='italic';
            document.getElementById('opcPedidos4').style.fontWeight='0';
            document.getElementById('opcPedidos2').style.fontWeight='500';
            document.getElementById('containerMarcas').style.display='grid';  
            document.getElementById('containerCat').style.display='none'; 
          
        }

        if(event.currentTarget.id==='iconCerrar'){
            document.getElementById('containerOpc').style.display='none';        
    }
}


    const opcCompra = (event) =>{
        let opcCompra = event.currentTarget.id;
        setFilterProd(listProd.filter((prod)=>prod.categoria===opcCompra));
        document.getElementById('secList').style.display='block';        
    }    





    const opcCompra2 = (event)=>{

        let opcCompra = event.currentTarget.id;
        console.log(opcCompra);
        setFilterProd(listProd.filter((prod)=>prod.marca===opcCompra))
        document.getElementById('secList').style.display='block';

    }   






    const dispBtn = ()=>{
        document.getElementById('iconClose').style.display='block';
    }




    const sumarPrecio = (precio)=>{

        let precioFinal = 0;
        if(precio!==undefined){
            precio = parseFloat(precio);
            precioFinal = precio.toFixed(2);
            precioFinal = parseFloat(precioFinal);            
            setTotal(precioFinal + total);            
        }
    }



    const restarPrecio = (precio)=>{

        let precioFinal = 0;
        if(precio!==undefined){
            precio = parseFloat(precio);
            precioFinal = precio.toFixed(2);
            precioFinal = parseFloat(precioFinal);            
            setTotal(total - precioFinal);            
        }
    }
    


    const sumArrCarrito=(id)=>{  
        
        // console.log(document.getElementById("cant"+id).innerHTML)

        sumarPrecio();               
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
            descCarrito.innerHTML = id;
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
        sumarPrecio();        
    }
                




    const cerrarCarrito=()=>{
        document.getElementById('iconClose').style.display='none';  
        document.getElementById('carrito').style.width='0%';
        document.getElementById('carrito').style.transition='all 2s'
              
    }
  


    
    const restarCarrito=(id)=>{
        let cantidad = 0;
        document.getElementById('carrito').style.width='10%';
        setTimeout(dispBtn, 2000);

        if(document.getElementById("cant"+id)!==null){
            cantidad = parseInt(document.getElementById("cant"+id).innerHTML)
        }        
        if(cantidad>0){
            document.getElementById("cant"+id).innerHTML=cantidad-1;
        }
        if(cantidad===1){           
            document.getElementById("info"+id).style.display='none';
        }        
    }

   




    return(
        <Fragment>

            <section class='secBtnPedidos'>
                <section class='divisorPedidos'></section>
                <button class='btnPedidos' id='btnPedidos' ><FontAwesomeIcon icon={faCartShopping} size='3x'/></button>
                <section class='divisorPedidos'></section>                    
            </section>
            <section class='containerOpc' id='containerOpc'>
                <section class='opcPedidos'>
                    <div class='opcPedidos1'></div>
                    <button class='opcPedidos2' id='opcPedidos2' onClick={containerOpc}>Nuestras Marcas</button>
                    <div class='opcPedidos3'></div>
                    <button class='opcPedidos4' id='opcPedidos4' onClick={containerOpc}>Categorías</button>
                    <div class='opcPedidos5'></div>                                              
                </section>
                 
                <section class='containerMarcas' id='containerMarcas'>                       
                    {marcas.map((marca)=>{
                        return <Marcas key={marca.id} info={marca} opcCompra2={opcCompra2}/>
                    })}                                              
                </section>
                 <section class='containerCat' id='containerCat'>
                    <div class='divCat'><button class='btnCat' id='Alfajores' onClick={opcCompra}><h5>Alfajores</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Barritas' onClick={opcCompra}><h5>Barritas</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Batidos' onClick={opcCompra}><h5>Batidos</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Bebidas' onClick={opcCompra}><h5>Bebidas</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Cereales' onClick={opcCompra}><h5>Cereales</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Chocolates' onClick={opcCompra}><h5>Chocolates</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Especias' onClick={opcCompra}><h5>Especias</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Galletas de arroz' onClick={opcCompra}><h5>Galletas de arroz</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Galletitas' onClick={opcCompra}><h5>Galletitas</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Golosinas' onClick={opcCompra}><h5>Golosinas</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Granolas' onClick={opcCompra}><h5>Granolas</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Pastas' onClick={opcCompra}><h5>Pastas</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Pastelería' onClick={opcCompra}><h5>Pastelería</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Postres' onClick={opcCompra}><h5>Postres</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Premezclas' onClick={opcCompra}><h5>Premezclas</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Rebozadores' onClick={opcCompra}><h5>Rebozadores</h5></button></div>
                    <div class='divCat'><button class='btnCat' id='Snacks' onClick={opcCompra}><h5>Snacks</h5></button></div>
                </section> 
            </section>
            <section class='secTitlesList'>
                    <table class='titlesList'>
                        <td class='tdTitlesList' id='tdTitlesList1'>Código</td>
                        <td class='tdTitlesList' id='tdTitlesList2'>Descripción</td>
                        <td class='tdTitlesList' id='tdTitlesList3'>Marca</td>
                        <td class='tdTitlesList' id='tdTitlesList4'>Categoría</td>
                        <td class='tdTitlesList' id='tdTitlesList5'>Precio</td>
                    </table>
            </section>        
            <section class='secList' id='secList'> 
                {filterProd.map((listado)=>{
                    return <CardListas key={listado.id} info={listado} sumArrCarrito={sumArrCarrito} restarCarrito={restarCarrito} sumarPrecio={sumarPrecio} restarPrecio={restarPrecio}/>
                })}     
            </section>
            <section class='carrito' id='carrito'>
                <div class='closeCarrito'><IoCloseSharp class='iconClose' id='iconClose' onClick={cerrarCarrito}/></div>
                <div class='divCarrito' id='divCarrito'><FontAwesomeIcon icon={faCartShopping} id='iconCarrito'/></div>
                <section class='titleCarrito' id='titleCarrito'>
                    <h6 class='h6Carrito' id='h6Carrito'>Código</h6>
                    <h6 class='h6Carrito' id='h6Carrito'>Cant.</h6>
                </section>
                <section class='prodCarrito' id='prodCarrito'>
                </section>
                <section class='totalCarrito' id='totalCarrito'>
                    <h6 class='h6Carrito'>TOTAL: ${total.toFixed(2)}</h6>
                </section> 
                <section class='checkCarrito' id='checkCarrito'>
                    <GiCheckMark class='checkIcon'/>
                </section>

            </section>
        </Fragment>
    )
}