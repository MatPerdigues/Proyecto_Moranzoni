import { Fragment } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie,faLock, faRightToBracket,faUserCheck} from '@fortawesome/free-solid-svg-icons';
const ADMINUSER = process.env.REACT_APP_ADMINUSER;
const ADMINPASS = process.env.REACT_APP_ADMINPASS;


export default function Admin (){



    const login = async(event)=>{
        event.preventDefault();

        document.getElementById("usuario").style.backgroundColor = "white";
        document.getElementById("usuario").style.borderColor = "grey";
        document.getElementById("adminPass").style.backgroundColor = "white";
        document.getElementById("adminPass").style.borderColor = "grey";


        let usuario = event.target[0].value;
        let password = event.target[1].value;


        if(ADMINUSER===usuario && ADMINPASS===password){
            console.log('Avanzando');
            document.getElementById('submit').style.display='none';
            document.getElementById('userCheck').style.display='flex';
            document.getElementById('userCheckIcon').style.opacity='100%';
            window.location.href='../panelAdmin';
            
          
        } else if(ADMINUSER!==usuario){
            document.getElementById("usuario").style.backgroundColor = "#FED7AA";
            document.getElementById("usuario").style.borderColor = "red";
            

        } else {
            document.getElementById("adminPass").style.backgroundColor = "#FED7AA";
            document.getElementById("adminPass").style.borderColor = "red";

        }


    }    


    return(
        <Fragment>
            <section>
                <form class='admForm'  onSubmit={(event)=>{login(event)}}>
                    <div class='divForm1'>
                        <label for='usuario' class='iconForm'><FontAwesomeIcon icon={faUserTie} size="2x"/></label>
                        <input type='text' class='inputForm' required placeholder='Usuario...' id='usuario' name='usuario'></input>
                
                    </div>
                    <div class='divForm2'>
                        <label for='adminPass' class='iconForm'><FontAwesomeIcon icon={faLock} size='2x'/></label>
                        <input type='password' class='inputForm' required placeholder='Contraseña...' id='adminPass'></input>
                    </div>
                    <div>
                        <button type='submit' class='submit' id='submit'><FontAwesomeIcon icon={faRightToBracket} size="3x"/></button>
                    </div>
                    <div class='userCheck' id='userCheck'>
                        <div id='userCheckIcon' class='userCheckIcon'>
                            <FontAwesomeIcon icon={faUserCheck} size='3x'/>
                        </div>
                    </div>
                </form>
            </section>
        </Fragment>
    )
}