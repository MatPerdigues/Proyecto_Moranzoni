import { Fragment } from 'react';
import './cardDetalles.css';


export default function CardDetalles({info,listProd}){

    let ind = listProd.findIndex(obj=> obj.id===info.id);

    return(
        <Fragment>


            <table class='tablaDetalle' id='tablaDetalle'>
                <td class='tdCardDetalle1' id='tdCardDetalle1'>{listProd[ind].descripcion}</td>
                <td class='tdCardDetalle2' id='tdCardDetalle2'>{listProd[ind].marca}</td>
                <td class='tdCardDetalle3' id='tdCardDetalle3'>{info.cantidad}</td>
            </table>
          
        </Fragment>
    )
}   