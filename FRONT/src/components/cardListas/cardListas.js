import { Fragment } from 'react';
import './cardListas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';

export default function CardListas({info,sumArrCarrito,restarCarrito,sumarPrecio,restarPrecio,confirmarProducto,anularProducto,arrCompra,arrResta}){

    const[cantidad,setCantidad]=useState(0);


    const checkList = ()=>{    
        if(document.getElementById("cant"+info.id)===null){
            setCantidad(0);
        }else{
            let cantidadCarrito = parseInt(document.getElementById("cant"+info.id).innerHTML);           
            setCantidad(cantidadCarrito);     
        }

        if(info.stock===0){
            document.getElementById("cantList"+info.id).style.backgroundColor="rgb(255, 0, 0, 0.2)";
            
        }
    }

    useEffect(()=>{
        checkList();       

    },[])    



    const sumarCantidad = ()=>{        
              
        
        if(cantidad<info.stock){            
            sumArrCarrito(info.id); 
            setCantidad(cantidad+1);
            sumarPrecio(info.precio);
            confirmarProducto(info.id, info.descripcion, info.marca, info.categoria, info.precio, cantidad);
            arrCompra(info.id,info.stock);
        }
    }


    const restarCantidad = ()=>{
        restarCarrito(info.id);
        if(cantidad>0){
            setCantidad(cantidad-1);
            restarPrecio(info.precio);
            anularProducto(info.id);
            arrResta(info.id)
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