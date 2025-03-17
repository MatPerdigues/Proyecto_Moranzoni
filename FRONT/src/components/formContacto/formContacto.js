import './formContacto.css';
import { Fragment,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShare} from '@fortawesome/free-solid-svg-icons';
import { FaCheck } from "react-icons/fa";

const API = process.env.REACT_APP_API_URL;


export default function FomrContacto (){

    const [caracteres,setCarateres] = useState(0);
    const [mensajeEnviado,setMensajeEnviado] = useState(false);
    // const [rtaMensaje,setrtaMensaje] = useState('');
    const [mensajePop,setMensajePop] = useState('');
    let mensaje = '';
    let rtaMensaje='';


    
    const sumCaracter=(event)=>{        
        mensaje = event.target.value;
        setCarateres(mensaje.length)        
    }


    const enviarMensaje = async(event)=>{

        event.preventDefault();

        const fecha = new Date();
        const yearActual = fecha.getFullYear();
        const hoy = fecha.getDate();
        const mesActual = fecha.getMonth() + 1;
        let fecha_envio = hoy+'-'+mesActual+'-'+yearActual;
 
        const formMensaje = JSON.stringify({
            fechaMensaje:fecha_envio,
            nomMensaje:event.target[0].value,
            telefono:event.target[1].value,
            mail:event.target[2].value,
            msg:event.target[3].value
        });

        const response = await fetch(API+"/enviarMensaje",{
            method:"POST",
            body:formMensaje,
            headers:{
                //"Authorization": `Bearer ${localStorage.getItem("token")}`,
                
                'Content-Type':'application/json'
            }})    
            .then((res)=>res.json())
            .then((data)=>{rtaMensaje=data});  
            // .then((data)=>(setrtaMensaje(data)));
            

            if(rtaMensaje.mensaje !== ''){
                setMensajeEnviado(true);
                setMensajePop(rtaMensaje.mensaje);
            }
        
            return(response);
    }


    const home = ()=>{
        window.location.href='../';
    }
    
    return(

        <Fragment>

            <section class='contenedorContacto'> 

                {mensajeEnviado===false?

                <form class='formContacto' id='formContacto' onSubmit={(event)=>{enviarMensaje(event)}}>
                    {/* <input type='number'></input> */}
                    <section class='secFormProd' id='telContacto'>
                        <div class='catProd'><h5>Nombre y apellido</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorContacto'></div>
                            <div class='divisorProd' id='divisorContacto1'></div>
                        </section>
                        <input type='text' required name='nomContacto' class='inputProd'></input>
                    </section>
                    <section class='secFormProd' id='telContacto'>
                        <div class='catProd'><h5>Teléfono</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorContacto'></div>
                            <div class='divisorProd' id='divisorContacto1'></div>
                        </section>
                        <input type='number' required name='telContacto' class='inputProd'></input>
                    </section>
                    <section class='secFormProd' id='telContacto'>
                        <div class='catProd'><h5>E-mail</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorContacto'></div>
                            <div class='divisorProd' id='divisorContacto1'></div>
                        </section>
                        <input type='email' required name='emailContacto' class='inputProd'></input>
                    </section>
                    <section class='secFormProd' id='secMensaje'>
                        <div class='catProd'><h5>Mensaje</h5></div>
                        <section class='secDivisorProd'>
                            <div class='divisorProd' id='divisorContacto'></div>
                            <div class='divisorProd' id='divisorContacto1'></div>
                        </section>
                        <textarea required name='mensajeContacto' class='inputProd' maxLength={300} id='mensajeContacto' onChange={(event)=>{sumCaracter(event)}}></textarea>
                    </section>
                    <div class='numCaracteres'>
                        <p>{caracteres}/300</p>                        
                    </div>
                     <button class='subForm' id='subContacto'><FontAwesomeIcon icon={faShare} size='2x'/></button>
                    
                </form>                
                :

                <section class='popMensaje'>
                    <h6 class='h6popMensaje'>{mensajePop}</h6>
                    <button type='submit' class='btnConf' id='btnMensaje'><FaCheck onClick={home}/></button>
                </section>

                }

            </section>
                
        </Fragment>

    )
}