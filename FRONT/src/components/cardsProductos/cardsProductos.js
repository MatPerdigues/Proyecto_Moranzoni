import { Fragment } from 'react'
import './cardsProductos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan,faPause, faPlay,faPencil} from '@fortawesome/free-solid-svg-icons';
import { useState} from "react";


export default function CardProd ({info,pausarProd,activarProd,popEliminar,editarProducto}) {


    const[activo,setActivo]=useState(info.activo);

    let idPausa="iconTable-"+info.id;
    let idActivar="iconTable1-"+info.id;
    let idFila = 'filaProd-'+info.id;       

  




    const elimProd=()=>{
        sessionStorage.setItem('elimProd',info.id);
        popEliminar();
    }

    const pausaProd=()=>{  
        setActivo('false');
        sessionStorage.setItem('pausaProd',info.id);         
        pausarProd(); 
    } 


    const activProd=()=>{
        setActivo('true');
        sessionStorage.setItem('activProd',info.id);
        activarProd();
   }

    const editarProd=()=>{
        sessionStorage.setItem('phDesc',info.descripcion);
        sessionStorage.setItem('phMarca',info.marca);
        sessionStorage.setItem('phCat',info.categoria);
        sessionStorage.setItem('phStock',info.stock);
        sessionStorage.setItem('phPrecio',info.precio);
        sessionStorage.setItem('editProd',info.id);
        editarProducto()
    }



    return(
        <Fragment>
            <table class='tabProd' id={idFila}>
                <td class='tdProd' id='tdProd7'> Cod. {info.id}</td>
                <td class='tdProd' id='tdProd1'>{info.descripcion}</td>
                <td class='tdProd' id='tdProd2'>{info.marca}</td>
                <td class='tdProd' id='tdProd3'>{info.categoria}</td>
                <td class='tdProd' id='tdProd4'>{info.stock}</td>
                <td class='tdProd' id='tdProd5'>$ {info.precio}</td>
                <td class='tdProd' id='tdProd9'><FontAwesomeIcon icon={faPencil} className='iconTable3' onClick={editarProd}/></td>
                <td class='tdProd' id='tdProd6'>
                 {activo==='true'?
                    <FontAwesomeIcon icon={faPause} className='iconTable' id={idPausa} onClick={pausaProd}/>
                 :  
                    <FontAwesomeIcon icon={faPlay} className='iconTable1' id={idActivar} onClick={activProd}/>
                }
                </td>
                <td class='tdProd' id='tdProd8'><FontAwesomeIcon icon={faTrashCan} className='iconTable' id='iconTable2' onClick={elimProd}/></td>
            </table>

        </Fragment>
    )
}