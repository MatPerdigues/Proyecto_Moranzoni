import { Fragment } from 'react';
import './home.css';

export default function Home(){
    return(
        <Fragment>
            <main>                
                <section class='descripcion'>
                    <div class='tituloDescripcion'>
                        <h4>Distribuidora Moranzoni</h4>
                    </div>
                    <div class='textoDescripcion'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </section>
            </main>

        </Fragment>
    )
}