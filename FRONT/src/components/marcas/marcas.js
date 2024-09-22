import { Fragment } from 'react';
import './marcas.css';


export default function Marcas({info,opcCompra2}){


    return(
        <Fragment>
            <section class='marcas'>
                <img src={info.imagen} alt="img marca" class='imgMarcas' id={info.nombre} onClick={opcCompra2}/>                
            </section>
        </Fragment>
    )
}



