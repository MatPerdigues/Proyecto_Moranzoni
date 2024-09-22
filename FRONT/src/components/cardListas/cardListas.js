import { Fragment } from 'react';
import './cardListas.css';


export default function CardListas({info}){
    return(
        <Fragment>
            <table>
                <td>{info.descripcion}</td>
                <td>{info.precio}</td>
            </table>
        </Fragment>
    )
}