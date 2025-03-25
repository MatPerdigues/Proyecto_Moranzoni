import { Fragment } from 'react';
import './cardStock.css';

export default function CardStock({info}){
    return(
        <Fragment>
            <table class='tableStock'>
                <td class='tdStock' id='tdStock1'> Cod. {info.id}</td>
                <td class='tdStock' id='tdStock2'>{info.descripcion}</td>
                <td class='tdStock' id='tdStock3'>{info.marca}</td>
                <td class='tdStock' id='tdStock4'>{info.categoria}</td>
                <td class='tdStock' id='tdStock5'>{info.stock}</td>
                <td class='tdStock' id='tdStock6'>$ {info.precio}</td>

            </table>
        </Fragment>
    )
}