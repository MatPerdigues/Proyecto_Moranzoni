import { Fragment } from 'react';
import './cardMarcas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

export default function CardMarcas({info,popElimMarca}){

    const elimMarca = ()=>{
        sessionStorage.setItem('elimMarca',info.id);
        sessionStorage.setItem('marca',info.nombre);
        popElimMarca();
    }

    return(
        <Fragment>
            <table class='tableMarcas'>
                <td class='tdMarcas' id='tdMarcas1'>{info.nombre}</td>
                <td class='tdProd' id='tdMarcas2'><FontAwesomeIcon icon={faTrashCan} className='iconTable' onClick={elimMarca}/></td>
            </table>
        </Fragment>
    )
}