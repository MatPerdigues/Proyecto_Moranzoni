import { Fragment } from 'react';
import './home.css';
import { FaTruckFast } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import Marcas from '../marcas/marcas';

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
                <section class='secCards'>
                    <section class='card'>
                        <div class='cardImg'></div>
                        <div class='titCard'><h4 class='h4Card'>Nuestros Productos</h4></div>
                        <div class='textCard'><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p></div>
                    </section>
                    <section class='card'>
                        <div class='cardImg2'><FaTruckFast /></div>
                        <div class='titCard' id='titCard2'><h4 class='h4Card'>Envíos</h4></div>
                        <div class='textCard'><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p></div>
                    </section>
                    <section class='card'>
                        <div class='cardImg2' id='cardImg3'><RiTeamFill /></div>
                        <div class='titCard' id='titCard3'><h4 class='h4Card'>Nuestro Equipo</h4></div>
                        <div class='textCard'><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p></div>
                    </section>
                </section>
                <Marcas></Marcas>

            </main>

        </Fragment>
    )
}