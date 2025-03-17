import { Fragment } from 'react';
import './cardMensajes.css';
import { TfiTrash } from "react-icons/tfi";
import { LiaAngleUpSolid } from "react-icons/lia";

export default function CardMensajes ({info,popEliminarMensaje}){
    
    const showMensaje=()=>{
        document.getElementById('telMensaje'+info.id).style.display='block';
        document.getElementById('textMensaje'+info.id).style.display='block';
        document.getElementById('closeMensaje'+info.id).style.display='flex';
    }

    const closeMensaje=()=>{
        document.getElementById('telMensaje'+info.id).style.display='none';
        document.getElementById('textMensaje'+info.id).style.display='none';
        document.getElementById('closeMensaje'+info.id).style.display='none';
        // document.getElementById('secMensaje').style.height='40px';
    }

    const popElimMensaje=()=>{
        popEliminarMensaje();       
    }
    
    return(
        <Fragment>
            <section class='secMensaje' id='secMensaje' >
                <table class='tableMensaje' onClick={showMensaje}>
                    <td class='tdMensaje' id='tdMensaje1'>{info.nombre}</td>
                    <td class='tdMensaje' id='tdMensaje2'>{info.email}</td>
                    <td class='tdMensaje' id='tdMensaje3'>{info.fecha}</td>
                    <td class='tdMensaje' id='tdMensaje4'><TfiTrash id='elimMensaje' onClick={popElimMensaje}/></td>                    
                </table>
                <div class='telMensaje' id={"telMensaje" + info.id}>Teléfono: {info.telefono}</div>
                <div class='textMensaje' id={"textMensaje" + info.id}>{info.mensaje}</div> 
                <div class='closeMensaje' id={"closeMensaje"+info.id}><LiaAngleUpSolid class='upIcon2' onClick={closeMensaje}/></div>                
            </section>            
        </Fragment>
    )
}