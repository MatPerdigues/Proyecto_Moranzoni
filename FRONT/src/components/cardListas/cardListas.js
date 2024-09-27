import { Fragment } from 'react';
import './cardListas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function CardListas({info,dispCarrito,sumArrCarrito}){

    const[cantidad,setCantidad]=useState(0);

    const sumarCantidad = ()=>{
        dispCarrito();
        sumArrCarrito(info.id);
        if(cantidad<info.stock){
            setCantidad(cantidad+1);
        }
    }


    const restarCantidad = ()=>{
        if(cantidad>0){
            setCantidad(cantidad-1);
        }
    }



    return(    
    
        <Fragment>
            <section class='filaList'>
                <table class='tableList'>
                    <td class='tdList' id='tdList1'>{info.descripcion}</td>
                    <td class='tdList' id='tdList2'>{info.marca}</td>
                    <td class='tdList' id='tdList3'>$ {info.precio}</td>
                </table>
                <section class='btnsList'>
                    <div class='btnList' id='btnList1' onClick={restarCantidad}><FontAwesomeIcon icon={faMinus} className='iconList'/></div>
                    <div class='btnList' id='btnList2'><span class='cantList' >{cantidad}</span></div>
                    <div class='btnList' id='btnList3' onClick={sumarCantidad}><FontAwesomeIcon icon={faPlus} className='iconList'/></div>
                </section>
            </section>
        </Fragment>
    )
}