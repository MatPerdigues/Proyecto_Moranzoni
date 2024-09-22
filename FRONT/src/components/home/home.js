import { Fragment, useState, useEffect } from 'react';
import './home.css';
import { FaTruckFast } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faXmark} from '@fortawesome/free-solid-svg-icons';
import Marcas from '../marcas/marcas';
const API = process.env.REACT_APP_API_URL;

export default function Home(){

    const[marcas,setMarcas]=useState([]);


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
        sessionStorage.setItem('opcCompra',event.currentTarget.id);
        sessionStorage.setItem('tipoCompra','categoria');
        window.location.href='./panelCompra';
    }


    const opcCompra2 = (event)=>{
        sessionStorage.setItem('opcCompra',event.currentTarget.id);
        sessionStorage.setItem('tipoCompra','marca');
        window.location.href='./panelCompra';
    }



    return(
        <Fragment>
            <main>                
                <section class='descripcion'>
                    <div class='tituloDescripcion'>
                        <h4>Distribuidora Moranzoni</h4>
                    </div>
                    <div class='textoDescripcion'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </section>
                <section class='secBtnPedidos'>
                    <section class='divisorPedidos'></section>
                    <button class='btnPedidos' id='btnPedidos' onClick={containerOpc}><FontAwesomeIcon icon={faCartShopping} size='3x'/></button>
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
                    <section class='btnCerrar'><FontAwesomeIcon icon={faXmark} class='iconCerrar' id='iconCerrar' onClick={containerOpc}/></section>  
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


                <section class='secCards'>
                    <section class='card'>
                        <div class='cardImg'></div>
                        <div class='titCard'><h4 class='h4Card'>Nuestros Productos</h4></div>
                        <div class='textCard'><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p></div>
                    </section>
                    <section class='card'>
                        <div class='cardImg2'><FaTruckFast /></div>
                        <div class='titCard' id='titCard2'><h4 class='h4Card'>Envíos</h4></div>
                        <div class='textCard'><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p></div>
                    </section>
                    <section class='card'>
                        <div class='cardImg2' id='cardImg3'><RiTeamFill /></div>
                        <div class='titCard' id='titCard3'><h4 class='h4Card'>Nuestro Equipo</h4></div>
                        <div class='textCard'><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p></div>
                    </section>
                </section>
                

            </main>

        </Fragment>
    )
}