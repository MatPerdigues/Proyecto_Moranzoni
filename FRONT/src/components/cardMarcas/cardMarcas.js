import { Fragment } from 'react';
import './cardMarcas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

export default function CardMarcas(){


    return(
        <Fragment>
            <table class='tableMarcas'>
                <td class='tdMarcas' id='tdMarcas1'>Marca</td>
                <td class='tdProd' id='tdMarcas2'><FontAwesomeIcon icon={faTrashCan} className='iconTable'/></td>
            </table>
        </Fragment>
    )
}