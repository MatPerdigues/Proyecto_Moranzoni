import { Fragment } from 'react';
import './panelAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruckArrowRight,faEnvelope, faCartShopping, faWheatAwnCircleExclamation,faCartArrowDown,faList,faShare,faCheck,faXmark,faArrowsRotate,faX,faPlus} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect,useRef } from "react";
import CardProd from '../cardsProductos/cardsProductos'
import CardMarcas from '../cardMarcas/cardMarcas';
import CardPedidos from '../cardPedidos/cardPedidos';
import CardMensajes from '../cardMensajes/cardMensajes';
import CardStock from '../cardStock/cardStock';
import { FaRegStar } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { LiaXbox } from 'react-icons/lia';
const API = process.env.REACT_APP_API_URL;



export default function PanelAdmin(){

    let dato='';
    let mensajeEditar='';
    let confMarca='';
    let confElimMarca='';
    let pedidosPendientes = [];

    

    
    const [arrMarcas,setArrMarcas]=useState([]);
    const [arrProd,setArrProd]=useState([]);
    const [arrFiltro,setArrFiltro]=useState([]);
    const [idEliminar,setIdEliminar]=useState('');
    const [phDesc,setPhDesc]=useState('');
    const [phMarca,setPhMarca]=useState('');
    const [phCat,setPhCat]=useState('');
    const [phStock,setPhStock]=useState('');
    const [phPrecio,setPhPrecio]=useState('');
    const [popMarca,setPopMarca]=useState('false');
    const [idMarca,setIdMarca]=useState('');
    const [marca,setMarca]=useState('');
    const [arrayPedidos,setArrayPedidos]=useState([]);
    const [pedidosFilter,setPedidosFilter]=useState([]);
    const [fechaPedido,setFechaPedido]=useState([]);
    const [arrayMensajes,setArrayMensajes] =useState([]);
    // const [selectedDate, setSelectedDate] = useState("");
    const dateInputRef = useRef(null);
    const [arrayStock,setArrayStock]=useState([]);

    

    // const [nombrePedido,setNombrePedido]=useState("");






    const optMarcas = ()=>{       
        for(let x=0; x<arrMarcas.length;x++){
            if(document.getElementById('inputProd').contains(document.getElementById(arrMarcas[x].nombre))){
            }else{
                let option = document.createElement('option');
                option.setAttribute("value",arrMarcas[x].nombre);
                option.setAttribute("id",arrMarcas[x].nombre);
                option.innerHTML = arrMarcas[x].nombre;
                document.getElementById('inputProd').appendChild(option);   
     
            }
        }  
     }





     const optMarcas1 = ()=>{       
        for(let x=0; x<arrMarcas.length;x++){
            if(document.getElementById('inputProd1').contains(document.getElementById(arrMarcas[x].nombre+"1"))){
            }else{
                let option = document.createElement('option');
                option.setAttribute("value",arrMarcas[x].nombre);
                option.setAttribute("id",arrMarcas[x].nombre+"1");
                option.innerHTML = arrMarcas[x].nombre;
                document.getElementById('inputProd1').appendChild(option);        
            }
        }  
     }





     const optMarcas2 = ()=>{       
        for(let x=0; x<arrMarcas.length;x++){
            if(document.getElementById('inputProd2').contains(document.getElementById(arrMarcas[x].nombre+"2"))){
            }else{
                let option = document.createElement('option');
                option.setAttribute("value",arrMarcas[x].nombre);
                option.setAttribute("id",arrMarcas[x].nombre+"2");
                option.innerHTML = arrMarcas[x].nombre;
                document.getElementById('inputProd2').appendChild(option);        
            }
        }  
     }

     

     const optMarcas3 = ()=>{       
        for(let x=0; x<arrMarcas.length;x++){
            if(document.getElementById('inputProd3').contains(document.getElementById(arrMarcas[x].nombre+"1"))){
            }else{
                let option = document.createElement('option');
                option.setAttribute("value",arrMarcas[x].nombre);
                option.setAttribute("id",arrMarcas[x].nombre+"1");
                option.innerHTML = arrMarcas[x].nombre;
                document.getElementById('inputProd3').appendChild(option);        
            }
        }  

    }
 
 




    // const showProd=()=>{

    //     optMarcas();
    //     optMarcas1();
    //     optMarcas2();

    //     document.getElementById('containerPedidos').style.display='none';
    //     document.getElementById('secProductos').style.display='block';
    // }

    


    const fondoBtn=(event)=>{
        if(event.currentTarget.id==="btnProd1"){
            document.getElementById('btnProd2').style.color='black';
            document.getElementById('btnProd1').style.color='#FFAB00';
            document.getElementById('formProductos').style.display='block';
            document.getElementById('secListProd').style.display='none';
            document.getElementById('mapProd').style.display='none'; 
            document.getElementById('popEliminar').style.display='none';
            document.getElementById('secEditar').style.display='none';
            document.getElementById('btnProd3').style.color='black';
            document.getElementById('formMarcas').style.display='none';
            document.getElementById('secMarcas').style.display='none';
        }
        if(event.currentTarget.id==="btnProd2"){
            document.getElementById('btnProd2').style.color='#FFAB00';
            document.getElementById('btnProd1').style.color='black';
            document.getElementById('formProductos').style.display='none';
            document.getElementById('secListProd').style.display='block';
            document.getElementById('secListProd').style.visibility='visible';
            document.getElementById('mapProd').style.visibility='visible';
            document.getElementById('btnProd3').style.color='black';
            document.getElementById('formMarcas').style.display='none';
            document.getElementById('secMarcas').style.display='none';
            }

        if(event.currentTarget.id==='btnProd3'){
            document.getElementById('btnProd3').style.color='#FFAB00';
            document.getElementById('formProductos').style.display='none';
            document.getElementById('btnProd2').style.color='black';
            document.getElementById('btnProd1').style.color='black';
            document.getElementById('secListProd').style.display='none';
            document.getElementById('mapProd').style.display='none'; 
            document.getElementById('popEliminar').style.display='none';
            document.getElementById('secEditar').style.display='none';
            document.getElementById('secMarcas').style.display='block';
            document.getElementById('cardMarcas').style.display='block';
            document.getElementById('secBtnMarca').style.display='flex';
            document.getElementById('formMarcas').style.display='none';
            document.getElementById('secPopElimMarca').style.display='none';
            // document.getElementById('confElimMarca').style.display='none';   

        }
    }





    const showMap=(event)=>{
        setArrFiltro([]);        
        let datoFiltro="";
        document.getElementById('mapProd').style.display='block';
        if(event===undefined){
            datoFiltro=sessionStorage.getItem('marca');
        }else{
            datoFiltro = event.target.value;
        }
        for(let x=0;x<arrProd.length;x++){
            if(datoFiltro===arrProd[x].marca){
                let filtradoMarca = arrProd.filter((prod)=>prod.marca===datoFiltro);
                setArrFiltro(filtradoMarca);
            }       
        }     
    }  






    const sumProd = async(event)=>{
        event.preventDefault();

        const formProducto = JSON.stringify({
            descripcion : event.target[0].value,
            marca : event.target[1].value,
            categoria : event.target[2].value,
            stock : event.target[3].value,
            precio : event.target[4].value           
        })  
        const response = await fetch(API+"/agregarProducto",{
            method:"POST",
            body:formProducto,
            headers:{
                //"Authorization": `Bearer ${localStorage.getItem("token")}`,
                
                'Content-Type':'application/json'
            }})    
            .then((res)=>res.json())
            .then((data)=>{dato=data})      
            alert(dato.mensaje);            
            if(dato.mensaje==="Producto cargado correctamente!"){
                document.getElementById("formProductos").reset()
            }            
        return(response);
    }  







    const traerProductos= async()=>{
        let productos = await fetch(API+"/traerProductos")  
        .then((res)=>res.json())
        .then((data)=>{setArrProd(data)})
        .catch(error => console.log("Se ha producido un error... " +error));   
        return productos
        }


    useEffect(()=>{
        traerProductos();  
        setArrayStock(arrProd.filter((producto)=>producto.stock===0));     

    },[]) 
    
    

    useEffect(()=>{            
        const arrayStock1 = arrProd.filter((producto)=>producto.stock===0);
        setArrayStock(arrayStock1);
    },[arrProd]);



    const traerPedidos= async()=>{
        let productos = await fetch(API+"/traerPedidos")      

        .then((res)=>res.json())
        .then((data)=>{setArrayPedidos(data)})
        .catch(error => console.log("Se ha producido un error... " +error));     
                
        return productos
    }

        

    useEffect(()=>{            
        const filtradoPedidos = arrayPedidos.filter((pedido)=>pedido.estado==="pendiente");   
        setPedidosFilter(filtradoPedidos);
        setFechaPedido(filtradoPedidos);        
        if(filtradoPedidos.length>0){
            document.getElementById('warning1').style.visibility='visible';
        }
    },[arrayPedidos])



    useEffect(()=>{            
        traerPedidos();   
    },[])   




    const traerMarcas= async()=>{
        let marcas = await fetch(API+"/traerMarcas")

        .then((res)=>res.json())
        .then((data)=>{setArrMarcas(data)}) 
        .catch(error => console.log("Se ha producido un error... " +error));  
        return marcas;
        }


    useEffect(()=>{
        traerMarcas();   
    },[]) 




    const traerMensajes= async()=>{
        let mensajes = await fetch(API+"/traerMensajes")      

        .then((res)=>res.json())
        .then((data)=>{setArrayMensajes(data)})
        .catch(error => console.log("Se ha producido un error... " +error));        
        return mensajes
        }


    useEffect(()=>{
        traerMensajes();       
    },[])    




    

    const pausarProd=async()=>{       
         const formPausar=JSON.stringify({
            idPausa:sessionStorage.getItem('pausaProd')
        }) 
        const response = await fetch(API+"/pausarProducto",{
            method:"POST",
            body:formPausar,
            headers:{                
                'Content-Type':'application/json'
            }})
    
            .then((res)=>res.json())
            .then((data)=>{setArrProd(data)})  

        return(response);
                   
        }

      





    const activarProd=async()=>{    

        const formActivar=JSON.stringify({
            idActivar:sessionStorage.getItem('activProd')
        }) 

        const response = await fetch(API+"/activarProducto",{
            method:"POST",
            body:formActivar,
            headers:{                
                'Content-Type':'application/json'
            }})    
            .then((res)=>res.json())
            .then((data)=>{setArrProd(data)})          
        
        return(response);
    }





    const popEliminar=()=>{
        setIdEliminar(sessionStorage.getItem('elimProd'))
        document.getElementById('secListProd').style.visibility='hidden';
        document.getElementById('mapProd').style.visibility='hidden';
        document.getElementById('popEliminar').style.display='block';

    }


    const popEliminar1=()=>{
        setIdEliminar(sessionStorage.getItem('elimProd'))
        document.getElementById('mapStock').style.display='none';
        document.getElementById('popEliminar1').style.display='block';


    }




    const xEliminar=()=>{
        document.getElementById('secListProd').style.visibility='visible';
        document.getElementById('mapProd').style.visibility='visible';
        document.getElementById('popEliminar').style.display='none';
    }


    const xEliminar1=()=>{
        document.getElementById('popEliminar1').style.display='none';
        document.getElementById('mapStock').style.display='block';
    }





    const eliminarProducto=async()=>{
        let idFila="filaProd-"+idEliminar;
        let trash=sessionStorage.getItem('trash');
          const formEliminar=JSON.stringify({
            idEliminar:sessionStorage.getItem('elimProd')
        }) 
        const response = await fetch(API+"/eliminarProducto",{
            method:"DELETE",
            body:formEliminar,
            headers:{
                //"Authorization": `Bearer ${localStorage.getItem("token")}`,
                
                'Content-Type':'application/json'
            }})    
            .then((res)=>res.json())
            .then((data)=>{setArrProd(data)})
            
            if(trash==='trashProducto'){
                xEliminar();
            }else{
                xEliminar1();
            }



            document.getElementById(idFila).style.display='none';

        return(response);      

    }




    const editarProducto=()=>{

        setPhDesc(sessionStorage.getItem('phDesc'));
        setPhMarca(sessionStorage.getItem('phMarca'));
        setPhCat(sessionStorage.getItem('phCat'));
        setPhStock(sessionStorage.getItem('phStock'));
        setPhPrecio(sessionStorage.getItem('phPrecio')); 
        document.getElementById('secListProd').style.display='none';
        document.getElementById('mapProd').style.display='none';
        document.getElementById('popEliminar').style.display='none';
        document.getElementById('secEditar').style.display='block';
    }


    const editarProductoStock=()=>{
        setPhDesc(sessionStorage.getItem('phDesc'));
        setPhMarca(sessionStorage.getItem('phMarca'));
        setPhCat(sessionStorage.getItem('phCat'));
        setPhStock(sessionStorage.getItem('phStock'));
        setPhPrecio(sessionStorage.getItem('phPrecio')); 
        document.getElementById('mapStock').style.display='none';
        document.getElementById('secEditarStock').style.display='block';
    }




     const cerrarForm=(event)=>{
        event.preventDefault();

        sessionStorage.setItem('phDesc','');
        sessionStorage.setItem('phMarca','');
        sessionStorage.setItem('phCat','');
        sessionStorage.setItem('phStock','');
        sessionStorage.setItem('phPrecio','')
        
        document.getElementById('secEditar').style.display='none';
        document.getElementById('secListProd').style.display='block'; 
        document.getElementById('mapProd').style.display='block'; 
    }


    const cerrarFormStock=(event)=>{
        event.preventDefault();
        document.getElementById('secEditarStock').style.display='none';
        document.getElementById('mapStock').style.display='block';
    }






    const actProd = async (event)=>{

        event.preventDefault();

        let editDesc = '';
        let editMarca='';
        let editCat = '';
        let editStock='';
        let editPrecio;
        let idEdit=sessionStorage.getItem('editProd');

        if(event.target[0].value===''){
            editDesc=phDesc;
        }else{
            editDesc=event.target[0].value;
        }
        if(event.target[1].value===''){
            editMarca=phMarca;
        }else{
            editMarca=event.target[1].value;
        }
        if(event.target[2].value===''){
            editCat=phCat;
        }else{
            editCat=event.target[2].value;
        }
        if(event.target[3].value===''){
            editStock=phStock;
        }else{
            editStock=event.target[3].value;
        }
        if(event.target[4].value===''){
            editPrecio=phPrecio;
        }else{
            editPrecio=event.target[4].value;
        }





        const formEditar = JSON.stringify({
            editDesc:editDesc,
            editMarca:editMarca,
            editCat:editCat,
            editStock:editStock,
            editPrecio:editPrecio,
            idEdit:idEdit
        })
        const response = await fetch(API+"/editarProducto",{
            method:"PUT",
            body:formEditar,
            headers:{                
                'Content-Type':'application/json'
            }})    
            .then((res)=>res.json())    
            .then((data)=>{mensajeEditar=data})
            alert(mensajeEditar.mensaje);            
             if(mensajeEditar.mensaje==="Producto actualizado correctamente!"){
                window.location.reload();
            }             
        return(response);
    }





    const crearMarca=()=>{
        document.getElementById('cardMarcas').style.display='none';
        document.getElementById('secBtnMarca').style.display='none';
        document.getElementById('formMarcas').style.display='block';
    }





    const cerrarFormMarca=()=>{
        //event.preventDefault();
        document.getElementById('formMarcas').style.display='none';
        document.getElementById('cardMarcas').style.display='block';
        document.getElementById('secBtnMarca').style.display='flex';
        document.getElementById("idFormMarcas").reset();
    }



    

    const enviarMarca=async(event)=>{
        event.preventDefault();

        let marca = event.target[0].value;
        let url = event.target[1].value;

        const formMarca = JSON.stringify({
            marca:marca,
            url:url
        })

        const response = await fetch(API+"/enviarMarca",{
            method:"POST",
            body:formMarca,
            headers:{
                //"Authorization": `Bearer ${localStorage.getItem("token")}`,
                
                'Content-Type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>{confMarca=data})       

        if(confMarca.mensaje==="Marca cargada correctamente!"){
            // setPopMarca('true');
            document.getElementById('formMarcas').style.display='none';
            document.getElementById('secPopMarca').style.display='block';
        }
        return(response);
    }





    const cerrarPopMarca = ()=>{
        document.getElementById('secPopMarca').style.display='none';
        window.location.reload();
    }





    const popElimMarca = ()=>{
        setIdMarca(sessionStorage.getItem('elimMarca'));
        setMarca(sessionStorage.getItem('marca'));
        document.getElementById('cardMarcas').style.display='none';
        document.getElementById('secBtnMarca').style.display='none';
        document.getElementById('secPopElimMarca').style.display='block';
    }





    const eliminarMarca = async()=>{
        
        const formElimMarca = JSON.stringify({
            idMarca:idMarca
        })

        const response = await fetch(API+"/eliminarMarca",{
            method:"DELETE",
            body:formElimMarca,
            headers:{
                'Content-Type':'application/json'
        }})

        .then(res=>res.json())
        .then((data)=>{confElimMarca=data})
        .catch(error => console.log("Se ha producido un error... " +error));    

        if(confElimMarca.mensaje==="Marca eliminada correctamente!"){
            document.getElementById('secPopElimMarca').style.display='none'; 
            document.getElementById('popConfElimMarca').style.display='block';  
               
        } 

        return(response);

    }




    const xElimMarca = ()=>{
        document.getElementById('secPopElimMarca').style.display='none';
        document.getElementById('cardMarcas').style.display='block';
        document.getElementById('secBtnMarca').style.display='flex';
    }





    const xConfElimMarca = ()=>{
        window.location.reload();
    }




    const handleIconClick = () => {
        dateInputRef.current.showPicker(); // Abre el calendario nativo
      };




    
      const handleDateChange = (event) => {       
        document.getElementById('warning1').style.visibility='hidden';
        const fechaCalendario = event.target.value;
        const arrayFecha = fechaCalendario.split("-");
        let dia = arrayFecha[2];
        if(dia<10){
            dia = dia.slice(-1);
        } else {
            dia = arrayFecha[2];
        }        
        let fechaPedido = dia+'-'+arrayFecha[1]+'-'+arrayFecha[0];      
    
         if(fechaPedido==='undefined-undefined-'){  
            const nuevosPedidos = arrayPedidos.filter((pedido) => pedido.estado === 'pendiente');
            setPedidosFilter(nuevosPedidos);
            if(nuevosPedidos.length>0){
                document.getElementById('warning1').style.visibility='visible';
            }

        } else{
            setPedidosFilter(arrayPedidos.filter((pedido)=>pedido.fecha===fechaPedido)); 
        }
      };




    const btnAdmin = (event)=>{
        if(event.currentTarget.id==='grpPanel1'){
            document.getElementById('secProductos').style.display='none';
            document.getElementById('containerMensajes').style.display='none';
            document.getElementById('containerStock').style.display='none';
            document.getElementById('containerPedidos').style.display='block';
        }

        if(event.currentTarget.id==='grpPanel2'){
            optMarcas();
            optMarcas1();
            optMarcas2();    
            document.getElementById('containerPedidos').style.display='none';
            document.getElementById('containerMensajes').style.display='none';
            document.getElementById('containerStock').style.display='none';
            document.getElementById('secProductos').style.display='block';
        }

        if(event.currentTarget.id==='grpPanel3'){
            document.getElementById('containerPedidos').style.display='none';
            document.getElementById('secProductos').style.display='none';
            document.getElementById('containerStock').style.display='none';
            document.getElementById('containerMensajes').style.display='block';
        }


        if(event.currentTarget.id==='grpPanel4'){
            optMarcas3();  
            document.getElementById('containerPedidos').style.display='none';
            document.getElementById('secProductos').style.display='none';
            document.getElementById('containerMensajes').style.display='none';
            document.getElementById('containerStock').style.display='block';
        }

    }


    const popEliminarMensaje=()=>{
        document.getElementById('mapMensajes').style.display='none';
        document.getElementById('popElimMensaje').style.display='block';
    }



    const cerrarPopElimMensaje=()=>{
        document.getElementById('popElimMensaje').style.display='none';
        document.getElementById('mapMensajes').style.display='block';
    }



    const confElimMensaje=async()=>{
       
        const formEliminarMensaje=JSON.stringify({
            idMsg:sessionStorage.getItem('idMensaje')
        }) 
        const response = await fetch(API+"/eliminarMensaje",{
            method:"DELETE",
            body:formEliminarMensaje,
            headers:{
                //"Authorization": `Bearer ${localStorage.getItem("token")}`,
                
                'Content-Type':'application/json'
            }})    
            .then((res)=>res.json())
            .then((data)=>{setArrayMensajes(data)})     
            document.getElementById('popElimMensaje').style.display='none';
            document.getElementById('mapMensajes').style.display='block';

        return(response);          
    }



    const descPedido=()=>{

        let idPedido = parseInt(sessionStorage.getItem("descPedidoId"));
        for(let x=0; x<arrayPedidos.length;x++){
            if(arrayPedidos[x].id===idPedido){               
                arrayPedidos.splice(x,1);
            }
        }
        pedidosPendientes = arrayPedidos.filter((pedido)=>pedido.estado==='pendiente');
        if(pedidosPendientes.length===0){
            document.getElementById('warning1').style.visibility='hidden';
        }
    }




    return(
        <Fragment>


            <div class='secPanel'>                
                <div class='grpPanel' id='grpPanel1' onClick={btnAdmin}>
                    <div class='grpPanelIcon'>
                        {/* {pedidosFilter.length>0? */}
                        <FaExclamationTriangle  id='warning1'/>
                        {/* :""}                      */}
                    </div>
                    {/* <div class='iconPanel' id='iconPanel1' onClick={showPedidos}> */}
                    <div class='iconPanel' id='iconPanel1' >
                        <FontAwesomeIcon icon={faTruckArrowRight} size='3x'/>
                    </div>
                </div>

                <div class='grpPanel' id='grpPanel3' onClick={btnAdmin}>
                    <div class='grpPanelIcon'>
                        {arrayMensajes.length>0?
                        <FaExclamationTriangle />
                        :""}
                    </div>
                    <div class='iconPanel' id='iconPanel3'>
                        <FontAwesomeIcon icon={faEnvelope} size='3x'/>
                    </div>
                </div>

                <div class='grpPanel' id='grpPanel4' onClick={btnAdmin}>
                    <div class='grpPanelIcon'>
                        {arrayStock.length>0?
                        <FaExclamationTriangle />
                        :""}
                    </div>
                    <div class='iconPanel' id='iconPanel4'>
                        <FontAwesomeIcon icon={faWheatAwnCircleExclamation} size='3x'/>
                    </div>
                </div>

                <div class='grpPanel' id='grpPanel2' onClick={btnAdmin}>
                    <div class='iconPanel' id='iconPanel2'>
                        <FontAwesomeIcon icon={faCartShopping} size='3x'/>
                    </div>
                </div>
            </div>




            <section class='secProductos' id='secProductos'>
                <section class='btnsProductos' id='btnsProductos'>
                    <button class='btnProd' id='btnProd2' onClick={fondoBtn}><FontAwesomeIcon icon={faList} size='2x'/></button>
                    <button class='btnProd' id='btnProd1' onClick={fondoBtn}><FontAwesomeIcon icon={faCartArrowDown} size='2x'/></button>                    
                    <button class='btnProd' id='btnProd3' onClick={fondoBtn}><FaRegStar class='iconMarca'/></button>
                </section>
                
                <form class='formProductos' id='formProductos' onSubmit={(event)=>{sumProd(event)}}>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h6>Descripción</h6></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <input type='text' required name='descripcion' class='inputProd'></input>
                    </section>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h6>Marca</h6></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <select required class='inputProd' id='inputProd'>
                            <option selected value=''></option>
                        </select>                        
                    </section>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h6>Categoría</h6></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <select required class='inputProd'>
                            <option selected value=''></option>
                            <option value='Galletitas'>Alfajores</option>
                            <option value='Barritas'>Barritas</option>
                            <option value='Batidos'>Batidos</option>
                            <option value='Bebidas'>Bebidas</option>
                            <option value='Cereales'>Cereales</option>
                            <option value='Chocolates'>Chocolates</option>
                            <option value='Especias'>Especias</option>
                            <option value='Galletas de arroz'>Galletas de arroz</option>
                            <option value='Galletitas'>Galletitas</option>
                            <option value='Golosinas'>Golosinas</option>
                            <option value='Granolas'>Granolas</option>
                            <option value='Pastas'>Pastas</option>
                            <option value='Pastelería'>Pastelería</option>
                            <option value='Potres'>Postres</option>
                            <option value='Premezclas'>Premezclas</option>
                            <option value='Rebozadores'>Rebozadores</option>
                            <option value='Snacks'>Snacks</option>
                        </select>                        
                    </section>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h6>Stock</h6></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <input type='number' required name='descripcion' class='inputProd'></input>
                    </section>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h6>Precio</h6></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <input type='number' required name='descripcion' class='inputProd' step=".01"></input>
                    </section>
                    <section class='contSubForm'>
                        <button class='subForm'><FontAwesomeIcon icon={faShare} size='2x'/></button>
                    </section>
                </form>
                <section class='secListProd' id='secListProd'>
                    <section class='secFormProd' id='sec'>
                        <div class='catProd'><h6>Marca</h6></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <select required class='inputProd' id='inputProd1' onClick={showMap}>
                            <option selected value=''></option>
                        </select>                        
                    </section> 
                </section> 
                 <section class='mapProd' id='mapProd'>
                    {arrFiltro.map((prod)=>{
                        return <CardProd key={prod.id} info={prod} pausarProd={pausarProd} activarProd={activarProd} popEliminar={popEliminar} editarProducto={editarProducto}></CardProd>
                    })}
                </section>
                <section class='popEliminar' id='popEliminar'>
                    <h5 class='h4Eliminar'>¿Seguro querés eliminar el producto n° {idEliminar}?</h5>
                    <div class='btnsEliminar'>                            
                        <button class='btnEliminar' onClick={xEliminar}><FontAwesomeIcon icon={faXmark} /></button>
                        <button class='btnEliminar' onClick={eliminarProducto}><FontAwesomeIcon icon={faCheck} /></button>
                    </div>
                </section>
                <section class='secEditar' id='secEditar'>                    
                    <form class='formProductos' id='formEditar' onSubmit={(event)=>{actProd(event)}}>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h6>Descripción</h6></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='text' name='descripcion' class='inputProd' placeholder={phDesc}></input>
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h6>Marca</h6></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <select class='inputProd' id='inputProd2'>
                                <option value='' selected disabled id='phMarca'>{phMarca}</option>
                            </select>                        
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h6>Categoría</h6></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <select class='inputProd'>
                                <option value='' selected disabled id='phMarca'>{phCat}</option>
                                <option value='Galletitas'>Alfajores</option>
                                <option value='Barritas'>Barritas</option>
                                <option value='Batidos'>Batidos</option>
                                <option value='Bebidas'>Bebidas</option>
                                <option value='Cereales'>Cereales</option>
                                <option value='Chocolates'>Chocolates</option>
                                <option value='Especias'>Especias</option>
                                <option value='Galletas de arroz'>Galletas de arroz</option>
                                <option value='Galletitas'>Galletitas</option>
                                <option value='Golosinas'>Golosinas</option>
                                <option value='Granolas'>Granolas</option>
                                <option value='Pastas'>Pastas</option>
                                <option value='Pastelería'>Pastelería</option>
                                <option value='Potres'>Postres</option>
                                <option value='Premezclas'>Premezclas</option>
                                <option value='Rebozadores'>Rebozadores</option>
                                <option value='Snacks'>Snacks</option>
                            </select>                        
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h6>Stock</h6></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='number' name='descripcion' class='inputProd' placeholder={phStock}></input>
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h6>Precio</h6></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='number' name='descripcion' class='inputProd' step=".01" placeholder={phPrecio}></input>
                        </section>
                         <section class='contSubForm' id='btnsEditar'>
                            <button class='subForm' ><FontAwesomeIcon icon={faX} size='2x' onClick={cerrarForm}/></button>
                            <button type='submit' class='subForm'><FontAwesomeIcon icon={faArrowsRotate} size='2x'/></button>
                        </section> 
                    </form>                            
                </section>
                <section class='secMarcas' id='secMarcas'>
                    <section id='cardMarcas'>
                        {arrMarcas.map((marca)=>{
                           return <CardMarcas key={marca.id} info={marca} popElimMarca={popElimMarca}/>
                        })}
                    <section class='secBtnMarca' id='secBtnMarca'>
                        <button class='btnMarca' onClick={crearMarca}><FontAwesomeIcon icon={faPlus} size='2x'/></button>
                    </section>
                    </section>
                    <section class='formMarcas' id='formMarcas'>
                        <form class='formProductos' id='idFormMarcas' onSubmit={(event)=>{enviarMarca(event)}}>
                            <section class='secFormProd' id='secFormProd1'>
                                <div class='catProd'><h5>Nombre</h5></div>
                                <section class='secDivisorProd'>
                                    <div class='divisorProd' id='divisorProd1'></div>
                                    <div class='divisorProd' id='divisorProd2'></div>
                                </section>
                                <input type='text' required name='descripcion' class='inputProd'></input>
                            </section>
                            <section class='secFormProd' id='secFormProd1'>
                                <div class='catProd'><h5>URL Imagen</h5></div>
                                <section class='secDivisorProd'>
                                    <div class='divisorProd' id='divisorProd1'></div>
                                    <div class='divisorProd' id='divisorProd2'></div>
                                </section>
                                <input type='text' required name='descripcion' class='inputProd'></input>
                            </section>
                            <section class='btnsEnviarMarca'>                                
                                <button class='subForm' onClick={cerrarFormMarca}><FontAwesomeIcon icon={faX} size='2x'/></button>
                                <button type='submit' class='subForm' ><FontAwesomeIcon icon={faShare} size='2x'/></button>
                            </section>
                        </form>
                    </section>
                  
                    <section class='secPopMarca' id='secPopMarca'>
                        <section class='popEliminar' id='popMarca'>
                            <h5 class='h4Eliminar'>Marca cargada correctamente!</h5>
                            <div class='btnsEliminar'>                            
                                <button class='btnEliminar' onClick={cerrarPopMarca}><FontAwesomeIcon icon={faCheck} /></button>
                            </div>
                        </section>
                    </section>
                    <section class='secPopMarca' id='secPopElimMarca'>
                        <section class='popEliminar' id='popElimMarca'>
                            <h5 class='h4Eliminar'>Seguro querés eliminar la marca {marca}?</h5>
                            <div class='btnsEliminar'>
                                <button class='btnEliminar' onClick={xElimMarca}><FontAwesomeIcon icon={faXmark} /></button>                            
                                <button class='btnEliminar' onClick={eliminarMarca}><FontAwesomeIcon icon={faCheck} /></button>
                            </div>
                        </section>
                    </section>
                    <section class='secPopMarca' id='popConfElimMarca'>
                        <section class='popEliminar' id='confElimMarca'>
                            <h5 class='h4Eliminar'>La marca se eliminó correctamente</h5>
                            <div class='btnsEliminar'>
                                <button class='btnEliminar' onClick={xConfElimMarca}><FontAwesomeIcon icon={faXmark} /></button>                            
                                
                            </div>
                        </section>
                    </section>
                </section>
            </section>






            <section class='containerPedidos' id='containerPedidos'>

                {/* {pedidosFilter.length>0? */}
                <div class='divFecha' id='divFecha'>
                    <div class='date-picker-container'>
                        <button onClick={handleIconClick} className="calendar-icon">
                          <FcCalendar id='calendar'/>
                        </button>
                        <input type="date" ref={dateInputRef} onChange={handleDateChange}className="hidden-date-input"/>                
                    </div>                              
                </div> 
                {/* // :''} */}

                {/* {pedidosFilter.length>0? */}
                <section class='secPedidos' id='secPedidos'>   
                    {/* <table class='tabPedidos1' id='tabPedidos1'>
                        <td id='numPedido1'><h6>Número</h6></td>
                        <td id='nomPedido1'><h6>Nombre</h6></td>
                        <td id='totPedido1'><h6>Total</h6></td>
                    </table> */}
                    {pedidosFilter.map((pedido)=>{
                        return <CardPedidos key={pedido.id} info={pedido} listProd={arrProd} descPedido={descPedido}/>
                    })}  
                </section>
                {/* :''} */}

                {pedidosFilter.length===0?
                <div class='popElimMensaje' id='popNoPedido'>
                    <h6>No hay pedidos registrados</h6>
                </div>
                :''}
            </section>





            <section class='containerMensajes' id='containerMensajes'>
                <section class='mapMensajes' id='mapMensajes'>
                    {arrayMensajes.map((mensaje)=>{
                        return <CardMensajes key={mensaje.id} info={mensaje} popEliminarMensaje={popEliminarMensaje}></CardMensajes>
                    })}
                </section>
                <div class='popElimMensaje' id='popElimMensaje'>
                    <h5>¿Seguro querés eliminar este mensaje?</h5>
                    <div class='btnsEliminar'>                            
                        <button class='btnEliminar' id='xElimMensaje' onClick={cerrarPopElimMensaje}><FontAwesomeIcon icon={faXmark} /></button>
                        <button class='btnEliminar' id='vElimMensaje' onClick={confElimMensaje}><FontAwesomeIcon icon={faCheck} /></button>
                    </div>
                </div>
                {arrayMensajes.length===0?
                <div class='popElimMensaje' id='popNoMsg'>
                    <h6>No hay mensajes nuevos</h6>
                </div>
                :''}
            </section>   


            
            
            <section class='containerStock' id='containerStock'>    
                <section className='mapStock' id='mapStock'>
                    {arrayStock.map((prod)=>{
                        return <CardStock key={prod.id} info={prod} editarProductoStock={editarProductoStock} pausarProd={pausarProd} activarProd={activarProd} popEliminar1={popEliminar1}></CardStock>
                    })}
                </section>
                <section class='secEditar' id='secEditarStock'>                    
                    <form class='formProductos' id='formEditar' onSubmit={(event)=>{actProd(event)}}>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h6>Descripción</h6></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='text' name='descripcion' class='inputProd' placeholder={phDesc}></input>
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h6>Marca</h6></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <select class='inputProd' id='inputProd3'>
                                <option value='' selected disabled id='phMarca'>{phMarca}</option>
                            </select>                        
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h6>Categoría</h6></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <select class='inputProd'>
                                <option value='' selected disabled id='phMarca'>{phCat}</option>
                                <option value='Galletitas'>Alfajores</option>
                                <option value='Barritas'>Barritas</option>
                                <option value='Batidos'>Batidos</option>
                                <option value='Bebidas'>Bebidas</option>
                                <option value='Cereales'>Cereales</option>
                                <option value='Chocolates'>Chocolates</option>
                                <option value='Especias'>Especias</option>
                                <option value='Galletas de arroz'>Galletas de arroz</option>
                                <option value='Galletitas'>Galletitas</option>
                                <option value='Golosinas'>Golosinas</option>
                                <option value='Granolas'>Granolas</option>
                                <option value='Pastas'>Pastas</option>
                                <option value='Pastelería'>Pastelería</option>
                                <option value='Potres'>Postres</option>
                                <option value='Premezclas'>Premezclas</option>
                                <option value='Rebozadores'>Rebozadores</option>
                                <option value='Snacks'>Snacks</option>
                            </select>                        
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h6>Stock</h6></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='number' name='descripcion' class='inputProd' placeholder={phStock}></input>
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h6>Precio</h6></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='number' name='descripcion' class='inputProd' step=".01" placeholder={phPrecio}></input>
                        </section>
                         <section class='contSubForm' id='btnsEditar'>
                            <button class='subForm' ><FontAwesomeIcon icon={faX} size='2x' onClick={cerrarFormStock}/></button>
                            <button type='submit' class='subForm'><FontAwesomeIcon icon={faArrowsRotate} size='2x'/></button>
                        </section> 
                    </form>   
                </section>
                <section class='popEliminar' id='popEliminar1'>
                    <h5 class='h4Eliminar'>¿Seguro querés eliminar el producto n° {idEliminar}?</h5>
                    <div class='btnsEliminar'>                            
                        <button class='btnEliminar' onClick={xEliminar1}><FontAwesomeIcon icon={faXmark} /></button>
                        <button class='btnEliminar' onClick={eliminarProducto}><FontAwesomeIcon icon={faCheck} /></button>
                    </div>
                </section>
            </section>
 
                
                

            

    
        </Fragment>
    )
}