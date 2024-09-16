import { Fragment } from 'react';
import './marcas.css';


export default function Marcas({info}){


    return(
        <Fragment>
            <section class='marcas'>
                <img src={info.imagen} alt="img marca" class='imgMarcas'/>                
            </section>
        </Fragment>
    )
}



