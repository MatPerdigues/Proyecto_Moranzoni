import { Fragment } from 'react';
import './cardListas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';

export default function CardListas({info,sumArrCarrito,restarCarrito,sumarPrecio,restarPrecio}){

    const[cantidad,setCantidad]=useState(0);


    const checkList = ()=>{    
        if(document.getElementById("cant"+info.id)===null){
            setCantidad(0);
        }else{
            let cantidadCarrito = parseInt(document.getElementById("cant"+info.id).innerHTML);           
            setCantidad(cantidadCarrito);     
        }
    }

    useEffect(()=>{
        checkList();       

    },[])

    



    const sumarCantidad = ()=>{        
        sumArrCarrito(info.id);       
        
        if(cantidad<info.stock){
            setCantidad(cantidad+1);
            sumarPrecio(info.precio)
        }
    }


    const restarCantidad = ()=>{
        restarCarrito(info.id);
        if(cantidad>0){
            setCantidad(cantidad-1);
            restarPrecio(info.precio)
        }
    }



    return(    
    
        <Fragment>
            <section class='filaList'>
                <table class='tableList'>
                    <td class='tdList' id='tdList4'>{info.id}</td>
                    <td class='tdList' id='tdList1'>{info.descripcion}</td>
                    <td class='tdList' id='tdList2'>{info.marca}</td>
                    <td class='tdList' id='tdList5'>{info.categoria}</td>
                    <td class='tdList' id='tdList3'>$ {info.precio}</td>
                </table>
                <section class='btnsList'>
                    <div class='btnList' id='btnList1' onClick={restarCantidad}><FontAwesomeIcon icon={faMinus} className='iconList'/></div>
                    <div class='btnList' id='btnList2'><span class='cantList' id={"cantList"+info.id}>{cantidad}</span></div>
                    <div class='btnList' id='btnList3' onClick={sumarCantidad}><FontAwesomeIcon icon={faPlus} className='iconList'/></div>
                </section>
            </section>
        </Fragment>
    )
}