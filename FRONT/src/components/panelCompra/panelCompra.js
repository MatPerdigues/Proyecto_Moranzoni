import { Fragment } from 'react';
import './panelCompra.css';
import CardListas from '../cardListas/cardListas';
import { useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { GiCheckMark } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FaTruckArrowRight } from "react-icons/fa6";
import { IoArrowBackSharp } from "react-icons/io5";

const API = process.env.REACT_APP_API_URL;



export default function PanelCompra (){

    const [listProd,setListProd]=useState([]);
    const [total,setTotal]=useState(0);
    const[marcas,setMarcas]=useState([]);
    const[filterProd,setFilterProd]=useState([]);
    let nomEnvio = '';
    let dirEnvio = '';
    let telEnvio = '';
    const[nombre,setNombre]=useState('');
    const[direccion,setDireccion]=useState('');
    const[telefono,setTelefono]=useState('');
    const[arrayCompra,setArrayCompra]=useState([]); 
    let arrayObjetos = [];
    let dato='';
     






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



    const listener = (event)=>{        

        let opcCompra1 = event.currentTarget.id;
        setFilterProd(listProd.filter((prod)=>prod.marca===opcCompra1));
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


    





    const confirmarProducto = (id,descripcion,marca,categoria,precio,cantidad)=>{

        if(document.getElementById('tableList'+id)){
            document.getElementById('tableList'+id).style.display='flex';
        }


        cantidad++;
        
        const parent1 = document.getElementById("secTabConf");
        const child1 = document.getElementById("tdConf1"+id);

        if(parent1.contains(child1)===false){
            let tableProducto = document.createElement('table');
            tableProducto.setAttribute('class','tableList');
            tableProducto.setAttribute('id','tableList'+id);
            document.getElementById('secTabConf').appendChild(tableProducto);

            let tdCodigo = document.createElement('td');
            tdCodigo.setAttribute('class','tdConf1');
            tdCodigo.setAttribute('id','tdConf1'+id);
            tdCodigo.innerHTML=id
            document.getElementById('tableList'+id).appendChild(tdCodigo);
      

            let tdDescr = document.createElement('td');
            tdDescr.setAttribute('class','tdConf2');    
            tdDescr.setAttribute('id','tdConf2'+id);          
            document.getElementById('tableList'+id).appendChild(tdDescr);


            let tdMarca = document.createElement('td');
            tdMarca.setAttribute('class','tdConf3');    
            tdMarca.setAttribute('id','tdConf3'+id);          
            document.getElementById('tableList'+id).appendChild(tdMarca);

            let tdCategoria = document.createElement('td');
            tdCategoria.setAttribute('class','tdConf4');    
            tdCategoria.setAttribute('id','tdConf4'+id);          
            document.getElementById('tableList'+id).appendChild(tdCategoria);

            let tdPrecio = document.createElement('td');
            tdPrecio.setAttribute('class','tdConf5');    
            tdPrecio.setAttribute('id','tdConf5'+id);          
            document.getElementById('tableList'+id).appendChild(tdPrecio);

            let tdCantidad = document.createElement('td');
            tdCantidad.setAttribute('class','tdConf6');    
            tdCantidad.setAttribute('id','tdConf6'+id);          
            document.getElementById('tableList'+id).appendChild(tdCantidad);
            
       
        }

        document.getElementById('tdConf2'+id).innerHTML=descripcion;
        document.getElementById('tdConf3'+id).innerHTML=marca;
        document.getElementById('tdConf4'+id).innerHTML=categoria;
        document.getElementById('tdConf5'+id).innerHTML=precio;
        document.getElementById('tdConf6'+id).innerHTML=cantidad;

        
                


    }
    


    const sumArrCarrito=(id)=>{    
    

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



    const anularProducto=(id)=>{
        let cantidad = 0;

        if(document.getElementById('tdConf6'+id)!==null){
            cantidad = parseInt(document.getElementById('tdConf6'+id).innerHTML);
        }        
        if(cantidad>0){
            document.getElementById('tdConf6'+id).innerHTML=cantidad-1;
        }
        if(cantidad===1){           
            document.getElementById('tableList'+id).style.display='none';
            // document.getElementById('tableList'+id).remove();
        } 

    }




   


    const distrMarcas = ()=>{ 
        
         let idContainerImgs = 0;
         let carouselItem = 0;    

 
        for(let x=0; x<marcas.length;x++){           

            if(document.getElementById('containerImgs'+idContainerImgs).childElementCount<6){
                

                if(document.getElementById('containerImg'+x)===null){
                    let containerImg = document.createElement('div');
                    containerImg.setAttribute("class","containerImg");
                    containerImg.setAttribute("id","containerImg"+x); 
                    document.getElementById("containerImgs"+idContainerImgs).appendChild(containerImg);
                }

                if(document.getElementById('containerImg'+x).childElementCount<1){                
                let imagenMarca = document.createElement('img');
                imagenMarca.setAttribute("src",marcas[x].imagen);
                imagenMarca.setAttribute("alt","img marca");
                imagenMarca.setAttribute("class","imgMarcas");
                imagenMarca.setAttribute("id",marcas[x].nombre);
                document.getElementById("containerImg"+x).appendChild(imagenMarca);
                
                }


                document.getElementById(marcas[x].nombre).onclick=listener;
                
            }else{
                idContainerImgs++;
                carouselItem++;

                if(document.getElementById("carouselItem"+carouselItem)===null){                             
                    let divCarousel = document.createElement('div');  
                    divCarousel.setAttribute("class","carousel-item");
                    divCarousel.setAttribute("id","carouselItem"+carouselItem);
                    document.getElementById("carouselInner").appendChild(divCarousel);
                }

                if(document.getElementById('containerImgs'+idContainerImgs)===null){
                    let containerImgs = document.createElement('div');
                    containerImgs.setAttribute("class","containerImgs");
                    containerImgs.setAttribute("id","containerImgs"+ idContainerImgs);
                    document.getElementById("carouselItem"+carouselItem).appendChild(containerImgs);
                }

                if(document.getElementById('containerImg'+x)===null){
                    let containerImg = document.createElement('div'); 
                    containerImg.setAttribute("class","containerImg");
                    containerImg.setAttribute("id","containerImg"+x); 
                    document.getElementById("containerImgs"+idContainerImgs).appendChild(containerImg);
                }
                if(document.getElementById('containerImg'+x).childElementCount<1){                    
                let imagenMarca = document.createElement('img');
                imagenMarca.setAttribute("src",marcas[x].imagen);
                imagenMarca.setAttribute("alt","img marca");
                imagenMarca.setAttribute("class","imgMarcas");
                imagenMarca.setAttribute("id",marcas[x].nombre);
                document.getElementById("containerImg"+x).appendChild(imagenMarca);
                }

                // document.getElementById(marcas[x].nombre).addEventListener("click", listener);
                document.getElementById(marcas[x].nombre).onclick=listener;
            }
        }

    }

        

    
    distrMarcas();





    const popCompra = ()=>{
        document.getElementById('containerOpc').style.display='none';
        if( document.getElementById('secTitleList')!==null){
            document.getElementById('secTitleList').style.display='none';
        }
        document.getElementById('secList').style.display='none';
        document.getElementById('carrito').style.display='none';
        document.getElementById('popCompra').style.display='block';
    }



    const secEnvios = ()=>{
        document.getElementById('secTabConf').style.display='none';
        document.getElementById('totalConf').style.display='none';
        document.getElementById('btnsConf').style.display='none'
        document.getElementById('secEnvios').style.display='block';
    }


    const progress1 = ()=>{
        document.getElementById('intBorder1').style.width='100%';
        document.getElementById('intBorder1').style.opacity='1';
        document.getElementById('intBorder1').style.transition='all 2s';
        document.getElementById('extCircle2').style.backgroundColor='orange';
        document.getElementById('extCircle2').style.transitionDelay='2s';
        document.getElementById('extCircle2').style.opacity='1';
        document.getElementById('descProgreso2').style.opacity='1';
        document.getElementById('descProgreso2').style.transitionDelay='2s';
        document.getElementById('secTabConf').style.visibility='hidden';
        document.getElementById('totalConf').style.visibility='hidden';
        document.getElementById('btnsConf').style.visibility='hidden';
        setTimeout(secEnvios,2100);
      
    }



    const secConfirmacion = ()=>{
        document.getElementById('secEnvios').style.display='none';
        document.getElementById('secConfirmacion').style.display='block';


    }



    const funcEnvio = (event)=>{
        event.preventDefault();
        nomEnvio = event.target[0].value;
        dirEnvio = event.target[1].value;
        telEnvio = event.target[2].value;

        setNombre(nomEnvio);
        setDireccion(dirEnvio);
        setTelefono(telEnvio);


        console.log(nomEnvio);

        document.getElementById('intBorder2').style.width='100%';
        document.getElementById('intBorder2').style.opacity='1';
        document.getElementById('intBorder2').style.transition='all 2s';
        document.getElementById('extCircle3').style.backgroundColor='orange';
        document.getElementById('extCircle3').style.transitionDelay='2s';
        document.getElementById('extCircle3').style.opacity='1';
        document.getElementById('descProgreso3').style.opacity='1';
        document.getElementById('descProgreso3').style.transitionDelay='2s';
        document.getElementById('secEnvios').style.visibility='hidden';
        setTimeout(secConfirmacion,2100);

    }

    const iconConfirmar3 = ()=>{

        document.getElementById('secConfirmacion').style.display='none';
        document.getElementById('mnsjCompra').style.display='block';
    }


    const iconConfirmar2 = ()=>{
        document.getElementById('iconConfirmar').style.transform = "rotate(0deg)";
        document.getElementById('secConfirmacion').style.visibility='hidden';
        setTimeout(iconConfirmar3,500);
    } 


    const iconConfirmar1 = ()=>{
        document.getElementById('iconConfirmar').style.transform = "rotate(-40deg)"; 
         setTimeout(iconConfirmar2,500);
        document.getElementById('iconConfirmar').style.left='145px';
        document.getElementById('iconConfirmar').style.transition='all 1s linear 0s';
    }


    const iconConfirmar = ()=>{
        document.getElementById('iconConfirmar').style.color='orange';
        document.getElementById('iconConfirmar').style.left='-40px';
        document.getElementById('iconConfirmar').style.transition='all 1s';
        setTimeout(iconConfirmar1,1000);


        console.log(arrayCompra);
        console.log(nombre);
        console.log(direccion);
        console.log(telefono);


    }

    const home = ()=>{
        window.location.href='../';
    }


    const cancelProductos = ()=>{
        document.getElementById('containerOpc').style.display='block';    
        document.getElementById('secTitleList').style.display='block';        
        document.getElementById('secList').style.display='block';
        document.getElementById('carrito').style.display='block';
        document.getElementById('popCompra').style.display='none';
    }


    const cancelEnvio=()=>{
        document.getElementById('secEnvios').style.display='none';
        document.getElementById('secTabConf').style.display='block';
        document.getElementById('secTabConf').style.visibility='visible';
        document.getElementById('totalConf').style.display='flex';
        document.getElementById('totalConf').style.visibility='visible';
        document.getElementById('btnsConf').style.display='flex'
        document.getElementById('btnsConf').style.visibility='visible';

        document.getElementById('intBorder1').style.width='0%';
        document.getElementById('intBorder1').style.opacity='0.3'
        document.getElementById('extCircle2').style.backgroundColor='grey';
        document.getElementById('extCircle2').style.opacity='0.3';
        document.getElementById('extCircle2').style.transitionDelay='0s';
        document.getElementById('descProgreso2').style.opacity='0.3';
        document.getElementById('descProgreso2').style.transitionDelay='0s';
    }


    const cancelConfirmacion=()=>{
        document.getElementById('secConfirmacion').style.display='none';
        document.getElementById('secEnvios').style.display='block';
        document.getElementById('secEnvios').style.visibility='visible';
        document.getElementById('intBorder2').style.width='0%';
        document.getElementById('intBorder2').style.opacity='0.3';
        document.getElementById('intBorder2').style.transition='all 2s';
        document.getElementById('extCircle3').style.backgroundColor='grey';
        document.getElementById('extCircle3').style.transitionDelay='0s';
        document.getElementById('extCircle3').style.opacity='0.3';
        document.getElementById('descProgreso3').style.opacity='0.3';
        document.getElementById('descProgreso3').style.transitionDelay='0s';       
    }


    

    const arrCompra =(id,stock)=>{
        arrayCompra.push(id);
        console.log(arrayCompra);   
    }




    const arrResta=(id)=>{
        let index = arrayCompra.indexOf(id);
        arrayCompra.splice(index,1);
        console.log(arrayCompra);
    }



    

    const sumPedido = async()=>{


        

        let stockProd = 0;
        for(let x=0; x<arrayCompra.length; x++){
            let arrayFiltrado = arrayCompra.filter((id)=>id===arrayCompra[x]);
            if(arrayObjetos.some(e => e.id === arrayCompra[x])) {                    
                }else{
                    for(let y=0; y<listProd.length; y++){
                        if(arrayCompra[x]===listProd[y].id){
                            stockProd = listProd[y].stock
                        }
                    }                 
                    const objeto = new Object();        
                    objeto.id = arrayCompra[x];             
                    objeto.cantidad = arrayFiltrado.length;
                    objeto.stock = stockProd-arrayFiltrado.length;
                    arrayObjetos.push(objeto);
                }           
            }

        const pedidoJSON = JSON.stringify(arrayObjetos);

        console.log(arrayObjetos);
        

        const formPedido = JSON.stringify({
            pedido:pedidoJSON,
            nombre:nombre,
            direccion:direccion,
            telefono:telefono,
            total:total.toFixed(2)                   
        })    


        console.log(arrayObjetos.toString());


        const response = await fetch(API+"/agregarPedido",{
            method:"POST",
            body:formPedido,
            headers:{
                //"Authorization": `Bearer ${localStorage.getItem("token")}`,
                
                'Content-Type':'application/json'
            }})    
            .then((res)=>res.json())
            .then((data)=>{dato=data})      
            
            
            if(dato.mensaje==="Pedido cargado correctamente"){
                iconConfirmar();
            }else{
                alert(dato.mensaje);
            }
            
        return(response);
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
                    <section class='secPagination' id='secPagination'>                                     
                        <div id="carouselExample" class="carousel slide" >
                            <div class="carousel-inner" id='carouselInner'>                
                                <div class="carousel-item active" id='carouselItem0'>
                                    <div class='containerImgs' id='containerImgs0'></div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" id='flecha2'>
                                <GrPrevious id='flecha1'/>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" id='flecha3'>
                                <GrNext id='flecha1'/>
                            </button>
                        </div>
                    </section>
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

            {filterProd.length>0?
                <section class='secTitlesList' id='secTitleList'>
                    <table class='titlesList'>
                        <td class='tdTitlesList' id='tdTituloList1'>Código</td>
                        <td class='tdTitlesList' id='tdTituloList2'>Descripción</td>
                        <td class='tdTitlesList' id='tdTituloList3'>Marca</td>
                        <td class='tdTitlesList' id='tdTituloList4'>Categoría</td>
                        <td class='tdTitlesList' id='tdTituloList5'>Precio</td>
                    </table>
                </section>        
            :''}
            <section class='secList' id='secList'> 
                {filterProd.map((listado)=>{
                    return <CardListas key={listado.id} info={listado} sumArrCarrito={sumArrCarrito} restarCarrito={restarCarrito} sumarPrecio={sumarPrecio} restarPrecio={restarPrecio} confirmarProducto={confirmarProducto} anularProducto={anularProducto} arrCompra={arrCompra} arrResta={arrResta}/>
                })}     
            </section>
            <section class='popCompra' id='popCompra'>
                <section class='progreso' id='progreso'>
                    <div class='extCircle' id='extCircle1'>
                        <div class='intCircle'></div>
                    </div>
                    <div class='extBorder' id='extBorder1'>
                        <div class='intBorder' id='intBorder1'></div>
                    </div>
                    <div class='extCircle' id='extCircle2'>
                        <div class='intCircle'></div>
                    </div>
                    <div class='extBorder'>
                        <div class='intBorder' id='intBorder2'></div>
                    </div>
                    <div class='extCircle' id='extCircle3'>
                        <div class='intCircle'></div>
                    </div>
                </section>
                <section class='descProgreso' id='descProgreso'>
                    <p class='descProgreso1' >Productos</p>
                    <p class='descProgreso1' id='descProgreso2'>Envío</p>
                    <p class='descProgreso1' id='descProgreso3'>Confirmación</p>
                </section>
                <section class='secTabConf' id='secTabConf'>
                    <table class='titlesList' id='titleList'>
                        <td class='tdTitlesList' id='tdTitlesList1'>Código</td>
                        <td class='tdTitlesList' id='tdTitlesList2'>Descripción</td>
                        <td class='tdTitlesList' id='tdTitlesList3'>Marca</td>
                        <td class='tdTitlesList' id='tdTitlesList4'>Categoría</td>
                        <td class='tdTitlesList' id='tdTitlesList5'>Precio</td>
                        <td class='tdTitlesList' id='tdTitlesList6'>Cantidad</td>
                    </table>         
                </section>
                <h6 class='h6Carrito' id='totalConf'>TOTAL: ${total.toFixed(2)}</h6>  
                <section class='btnsConf' id='btnsConf'>
                    <div class='btnConf'><FaX onClick={cancelProductos}/></div>
                    <div class='btnConf' id='btnConf2'><FaCheck onClick={progress1}/></div>
                </section> 
                <section class='secEnvios' id='secEnvios'>
                    <form class='formProductos' id='formEditar' onSubmit={(event)=>{funcEnvio(event)}}>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h5>Nombre y apellido</h5></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='text' required name='descripcion' class='inputProd' ></input>
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h5>Dirección de envío</h5></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='text' name='descripcion' class='inputProd' required></input>
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h5>Teléfono</h5></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='number' name='descripcion' class='inputProd' required></input>
                        </section>
                        <section class='btnsConf' id='btnsConf'>
                            <div class='btnConf'><FaX onClick={cancelEnvio}/></div>
                            <button type='submit' class='btnConf' id='btnEnvio'><FaCheck/></button>
                        </section>
                    </form>
                </section>
                <section class='secConfirmacion' id='secConfirmacion'>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h5>Nombre y apellido</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <div class='inputProd'><p>{nombre}</p></div>
                    </section>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h5>Dirección de envío</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <div class='inputProd'><p>{direccion}</p></div>
                    </section>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h5>Teléfono</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <div class='inputProd'><p>{telefono}</p></div>
                    </section>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h5>Total</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <div class='inputProd'><p>$ {total.toFixed(2)}</p></div>
                    </section>
                    <section class='btnsConfirmar'>             
                        <div class='btnConfirmacion' id='btnConfirmacion2' ><IoArrowBackSharp id='iconCancel' onClick={cancelConfirmacion}/> </div>
                        <div class='btnConfirmacion' id='btnConfirmacion1'><FaTruckArrowRight id='iconConfirmar' onClick={sumPedido}/></div>                       
                    </section>
                </section>
                <section class='mnsjCompra' id='mnsjCompra'>
                    <div class='contMensaje'>
                        <h5>Muchas gracias por tu pedido! En los próximos minutos nos contactaremos para coordinar la entrega.<br/><br/>Tu número de pedido es el 23651.</h5>
                    </div>
                    <div class='divFinalizar'>
                        <GiCheckMark id='iconFinalizar' onClick={home}/>
                    </div>
                </section>
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
                    <GiCheckMark class='checkIcon' onClick={popCompra}/>
                </section>

            </section>
        </Fragment>
    )
}

