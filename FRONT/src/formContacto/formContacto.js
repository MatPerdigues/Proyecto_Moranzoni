import './formContacto.css';
import { Fragment,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShare} from '@fortawesome/free-solid-svg-icons';


export default function FomrContacto (){

    const [caracteres,setCarateres] = useState(0);;
    let mensaje = '';



    const sumProd1 = (event)=>{
        event.preventDefault();
        console.log('Hola Mundito');
        console.log(event.target[0].value);
        console.log(event.target[1].value);        
    }
    
    const sumCaracter=(event)=>{        
        mensaje = event.target.value;
        setCarateres(mensaje.length)

        
    }
    
    return(

        <Fragment>

            <section class='contenedorContacto'>          
                <form class='formContacto' id='formContacto' onSubmit={(event)=>{sumProd1(event)}}>
                    {/* <input type='number'></input> */}
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
            </section>
     
        </Fragment>

    )
}