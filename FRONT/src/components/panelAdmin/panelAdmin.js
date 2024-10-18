import { Fragment } from 'react';
import './panelAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruckArrowRight,faEnvelope, faCartShopping, faWheatAwnCircleExclamation,faCartArrowDown,faList,faShare,faCheck,faXmark,faArrowsRotate,faX,faPlus} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from "react";
import CardProd from '../cardsProductos/cardsProductos'
import CardMarcas from '../cardMarcas/cardMarcas';
import { FaRegStar } from "react-icons/fa";
const API = process.env.REACT_APP_API_URL;



export default function PanelAdmin(){

    let dato='';
    let mensajeEditar='';
    let confMarca='';
    let confElimMarca='';
    
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
 
 




    const showProd=()=>{

        optMarcas();
        optMarcas1();
        optMarcas2();

        document.getElementById('secProductos').style.display='block';
    }

    


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
            document.getElementById('confElimMarca').style.display='none';   

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


     
    





    

    const pausarProd=async()=>{       
         const formPausar=JSON.stringify({
            idPausa:sessionStorage.getItem('pausaProd')
        }) 

        const response = await fetch(API+"/pausarProducto",{
            method:"POST",
            body:formPausar,
            headers:{
                //"Authorization": `Bearer ${localStorage.getItem("token")}`,
                
                'Content-Type':'application/json'
            }})
    
            .then((res)=>res.json())
            .then((data)=>{setArrProd(data)})
            
            //showMap();

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
                //"Authorization": `Bearer ${localStorage.getItem("token")}`,
                
                'Content-Type':'application/json'
            }})
    
            .then((res)=>res.json())
            .then((data)=>{setArrProd(data)})          
        
        return(response);
    }





    const popEliminar=()=>{
        setIdEliminar(sessionStorage.getItem('elimProd'))
        //document.getElementById('secListProd').style.display='none';
        //document.getElementById('mapProd').style.display='none';
        document.getElementById('secListProd').style.visibility='hidden';
        document.getElementById('mapProd').style.visibility='hidden';
        document.getElementById('popEliminar').style.display='block';

    }




    const xEliminar=()=>{
        //document.getElementById('secListProd').style.display='block';
        //document.getElementById('mapProd').style.display='block';
        document.getElementById('secListProd').style.visibility='visible';
        document.getElementById('mapProd').style.visibility='visible';
        document.getElementById('popEliminar').style.display='none';
    }





    const eliminarProducto=async()=>{

        let idFila="filaProd-"+idEliminar;  

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

            xEliminar();

            document.getElementById(idFila).style.display='none';

          
            //alert(mensajeEliminar.mensaje);
            
            //window.location.reload();
   
       
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
                //"Authorization": `Bearer ${localStorage.getItem("token")}`,
                
                'Content-Type':'application/json'
            }})
    
            .then((res)=>res.json())
            //.then((data)=>{setResEditar(data)})      
            .then((data)=>{mensajeEditar=data})

            //alert(resEditar.mensaje);

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
            setPopMarca('true');
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
            document.getElementById('confElimMarca').style.display='block';       
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






    return(
        <Fragment>


            <div class='secPanel'>
                <div class='grpPanel' id='grpPanel1'>
                    <div class='iconPanel' id='iconPanel1'>
                        <FontAwesomeIcon icon={faTruckArrowRight} size='3x'/>
                    </div>
                </div>
                <div class='grpPanel' id='grpPanel2' onClick={showProd}>
                    <div class='iconPanel' id='iconPanel2'>
                        <FontAwesomeIcon icon={faCartShopping} size='3x'/>
                    </div>
                </div>
                <div class='grpPanel' id='grpPanel3'>
                    <div class='iconPanel' id='iconPanel3'>
                        <FontAwesomeIcon icon={faEnvelope} size='3x'/>
                    </div>
                </div>
                <div class='grpPanel' id='grpPanel4'>
                    <div class='iconPanel' id='iconPanel4'>
                        <FontAwesomeIcon icon={faWheatAwnCircleExclamation} size='3x'/>
                    </div>
                </div>
            </div>



            <section class='secProductos' id='secProductos'>
                <section class='btnsProductos' id='btnsProductos'>
                    <button class='btnProd' id='btnProd1' onClick={fondoBtn}><FontAwesomeIcon icon={faCartArrowDown} size='2x'/></button>
                    <button class='btnProd' id='btnProd2' onClick={fondoBtn}><FontAwesomeIcon icon={faList} size='2x'/></button>
                    <button class='btnProd' id='btnProd3' onClick={fondoBtn}><FaRegStar class='iconMarca'/></button>
                </section>
                
                <form class='formProductos' id='formProductos' onSubmit={(event)=>{sumProd(event)}}>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h5>Descripción</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <input type='text' required name='descripcion' class='inputProd'></input>
                    </section>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h5>Marca</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <select required class='inputProd' id='inputProd'>
                            <option selected value=''></option>
                        </select>                        
                    </section>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h5>Categoría</h5></div>
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
                        <div class='catProd'><h5>Stock</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorProd1'></div>
                            <div class='divisorProd' id='divisorProd2'></div>
                        </section>
                        <input type='number' required name='descripcion' class='inputProd'></input>
                    </section>
                    <section class='secFormProd' id='secFormProd1'>
                        <div class='catProd'><h5>Precio</h5></div>
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
                        <div class='catProd'><h5>Marca</h5></div>
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
                    <h4 class='h4Eliminar'>¿Seguro querés eliminar el producto n° {idEliminar}?</h4>
                    <div class='btnsEliminar'>                            
                        <button class='btnEliminar' onClick={xEliminar}><FontAwesomeIcon icon={faXmark} /></button>
                        <button class='btnEliminar' onClick={eliminarProducto}><FontAwesomeIcon icon={faCheck} /></button>
                    </div>
                </section>
                <section class='secEditar' id='secEditar'>                    
                    <form class='formProductos' id='formEditar' onSubmit={(event)=>{actProd(event)}}>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h5>Descripción</h5></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='text' name='descripcion' class='inputProd' placeholder={phDesc}></input>
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h5>Marca</h5></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <select class='inputProd' id='inputProd2'>
                                <option value='' selected disabled id='phMarca'>{phMarca}</option>
                            </select>                        
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h5>Categoría</h5></div>
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
                            <div class='catProd'><h5>Stock</h5></div>
                            <section class='secDivisorProd'>
                                <div class='divisorProd' id='divisorProd1'></div>
                                <div class='divisorProd' id='divisorProd2'></div>
                            </section>
                            <input type='number' name='descripcion' class='inputProd' placeholder={phStock}></input>
                        </section>
                        <section class='secFormProd' id='secFormProd1'>
                            <div class='catProd'><h5>Precio</h5></div>
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
                    {popMarca==='false'?
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
                    : <section class='secPopMarca' id='secPopMarca'>
                        <section class='popEliminar' id='popMarca'>
                            <h4 class='h4Eliminar'>Marca cargada correctamente!</h4>
                            <div class='btnsEliminar'>                            
                                <button class='btnEliminar' onClick={cerrarPopMarca}><FontAwesomeIcon icon={faCheck} /></button>
                            </div>
                        </section>
                    </section>} 
                    <section class='secPopMarca' id='secPopElimMarca'>
                        <section class='popEliminar' id='popElimMarca'>
                            <h4 class='h4Eliminar'>Seguro querés eliminar la marca {marca}?</h4>
                            <div class='btnsEliminar'>
                                <button class='btnEliminar' onClick={xElimMarca}><FontAwesomeIcon icon={faXmark} /></button>                            
                                <button class='btnEliminar' onClick={eliminarMarca}><FontAwesomeIcon icon={faCheck} /></button>
                            </div>
                        </section>
                    </section>
                    <section class='secPopMarca' id='popConfElimMarca'>
                        <section class='popEliminar' id='confElimMarca'>
                            <h4 class='h4Eliminar'>La marca se eliminó correctamente</h4>
                            <div class='btnsEliminar'>
                                <button class='btnEliminar' onClick={xConfElimMarca}><FontAwesomeIcon icon={faXmark} /></button>                            
                                
                            </div>
                        </section>
                    </section>



                </section>
            </section>

    
        </Fragment>
    )
}