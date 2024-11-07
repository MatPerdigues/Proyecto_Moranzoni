import { Fragment } from 'react';
import './cardDetalles.css';


export default function CardDetalles({info,listProd}){

    const prueba = ()=>{
        console.log(listProd);
       }



    return(
        <Fragment>
            <p>{info.cantidad}</p>
            {/* <p>{listProd.marca}</p> */}
          
        </Fragment>
    )
} 