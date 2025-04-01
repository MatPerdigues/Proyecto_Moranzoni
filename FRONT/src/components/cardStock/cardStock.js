import { Fragment } from 'react';
import './cardStock.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan,faPause, faPlay,faPencil} from '@fortawesome/free-solid-svg-icons';
import { LiaAngleUpSolid } from "react-icons/lia";
import { useState } from 'react';

export default function CardStock({info,editarProductoStock,activarProd,pausarProd, popEliminar1}){

    const[activo,setActivo]=useState(info.activo);
    let idPausa="iconTable-"+info.id;
    let idActivar="iconTable1-"+info.id;
    let idFila = 'filaProd-'+info.id; 


    const verInfoStock = ()=>{
        document.getElementById("stock"+info.id).style.height='auto';              
    }


    const closeInfoStock=()=>{
        document.getElementById("stock"+info.id).style.height='50px';
    }
    

    const editarProdStock=()=>{
        sessionStorage.setItem('phDesc',info.descripcion);
        sessionStorage.setItem('phMarca',info.marca);
        sessionStorage.setItem('phCat',info.categoria);
        sessionStorage.setItem('phStock',info.stock);
        sessionStorage.setItem('phPrecio',info.precio);
        sessionStorage.setItem('editProd',info.id);
        editarProductoStock()
    }


    const activProd=()=>{
        setActivo('true');
        sessionStorage.setItem('activProd',info.id);
        activarProd();
   }


   const pausaProd=()=>{  
    console.log('a ver si arranca...')
    setActivo('false');
    sessionStorage.setItem('pausaProd',info.id);         
    pausarProd(); 
    } 


    const elimProd=()=>{
    sessionStorage.setItem('elimProd',info.id);
    sessionStorage.setItem('trash','trashStock');
    popEliminar1();
    }



    return(
        <Fragment>
            <div class='infoProdStock' id={"stock"+info.id} >
                <table class='tableStock' id={idFila}>
                    <td class='tdStock' id='tdStock1' onClick={verInfoStock}> Cod. {info.id}</td>
                    {/* <td class='tdStock' id='tdStock2'>{info.descripcion}</td> */}
                    <td class='tdStock' id='tdStock3' onClick={verInfoStock}>{info.marca}</td>
                    {/* <td class='tdStock' id='tdStock4'>{info.categoria}</td> */}
                    <td class='tdStock' id='tdStock5' onClick={verInfoStock}>Sin stock</td>
                    {/* <td class='tdStock' id='tdStock6'>$ {info.precio}</td> */}
                    <td class='tdStock' id='tdStock6'>
                        <div class='contIconsStock'>
                            <div class='contIconStock'><FontAwesomeIcon icon={faPencil} className='iconTable3' onClick={editarProdStock}/></div>
                            <div class='contIconStock'>
                            {activo==='true'?
                                <FontAwesomeIcon icon={faPause} className='iconTable' id={idPausa} onClick={pausaProd}/>
                                :
                                <FontAwesomeIcon icon={faPlay} className='iconTable1' id={idActivar} onClick={activProd}/>
                            }
                                </div>
                            <div class='contIconStock'><FontAwesomeIcon icon={faTrashCan} className='iconTable' id='iconTable2' onClick={elimProd}/></div>
                        </div>
                    </td>
                </table>
                <div class='descProdStock' id='descProdStock1'><span class='DescSpan'>Descripción: </span>{info.descripcion}</div>
                <div class='descProdStock' id='descProdStock2'><span class='DescSpan'>Categoría: </span>{info.categoria}</div>
                {/* <div class='descProdStock'><span class='DescSpan'>Categoría: </span>{info.categoria}</div> */}
                <div class='descProdStock' id='descProdStock3'><span class='DescSpan'>Precio: </span>$ {info.precio}</div> 
                <div class='closeInfoStock' id='closeInfoStock'><LiaAngleUpSolid class='upIcon2' onClick={closeInfoStock}/></div>   
       
            </div>

        </Fragment>
    )
}