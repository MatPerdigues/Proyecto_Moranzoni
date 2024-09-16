import { Fragment, useState, useEffect } from 'react';
import './home.css';
import { FaTruckFast } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
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
        }

        if(event.currentTarget.id==='opcPedidos4'){  
            
            document.getElementById('opcPedidos4').style.border='2px solid orange';
            document.getElementById('opcPedidos2').style.border='1px solid grey';
            document.getElementById('opcPedidos4').style.fontStyle='italic';
            document.getElementById('opcPedidos4').style.fontWeight='500';
            document.getElementById('opcPedidos2').style.fontStyle='normal';
            document.getElementById('opcPedidos2').style.fontWeight='0';            
        }

        if(event.currentTarget.id==='opcPedidos2'){  
            
            document.getElementById('opcPedidos4').style.border='1px solid grey';
            document.getElementById('opcPedidos2').style.border='2px solid orange';
            document.getElementById('opcPedidos4').style.fontStyle='normal';
            document.getElementById('opcPedidos2').style.fontStyle='italic';
            document.getElementById('opcPedidos4').style.fontWeight='0';
            document.getElementById('opcPedidos2').style.fontWeight='500';
          
        }
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
                    <section class='containerMarcas'>

                        {marcas.map((marca)=>{
                            return <Marcas key={marca.id} info={marca}/>
                        })}
                                              
                    </section>
                </section>

{/*                 <Marcas></Marcas> */}
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