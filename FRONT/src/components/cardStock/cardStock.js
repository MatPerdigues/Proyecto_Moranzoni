import { Fragment } from 'react';
import './cardStock.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan,faPause, faPlay,faPencil} from '@fortawesome/free-solid-svg-icons';
import { LiaAngleUpSolid } from "react-icons/lia";

export default function CardStock({info,editarProductoStock}){

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

    return(
        <Fragment>
            <div class='infoProdStock' id={"stock"+info.id} >
                <table class='tableStock' onClick={verInfoStock}>
                    <td class='tdStock' id='tdStock1'> Cod. {info.id}</td>
                    {/* <td class='tdStock' id='tdStock2'>{info.descripcion}</td> */}
                    <td class='tdStock' id='tdStock3'>{info.marca}</td>
                    {/* <td class='tdStock' id='tdStock4'>{info.categoria}</td> */}
                    <td class='tdStock' id='tdStock5'>Sin stock</td>
                    {/* <td class='tdStock' id='tdStock6'>$ {info.precio}</td> */}
                    <td class='tdStock' id='tdStock6'>
                        <div class='contIconsStock'>
                            <div class='contIconStock'><FontAwesomeIcon icon={faPencil} className='iconTable3' onClick={editarProdStock}/></div>
                            <div class='contIconStock'><FontAwesomeIcon icon={faPause} className='iconTable' /></div>
                            <div class='contIconStock'><FontAwesomeIcon icon={faTrashCan} className='iconTable' id='iconTable2'/></div>
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