
import './App.css';
import Router from './components/route/route';
import { TbMessageUp } from "react-icons/tb";
import { SiInstagram } from "react-icons/si";

import { TfiMapAlt } from "react-icons/tfi";
import { BiCartDownload } from "react-icons/bi";
import fondo from "./fondoMoranzoni.png";







function App() {


const contacto=()=>{
  window.location.href='../formContacto';
}


const verProductos =()=>{
  window.location.href='../panelCompra';
}



const tipIn = (event)=>{


  if(event.currentTarget.id==='iconContact2'){
    document.getElementById('tip1').style.opacity='100%';  
    document.getElementById('tip1').style.transition='all 0.5s';  
  }

  if(event.currentTarget.id==='iconContact3'){
    document.getElementById('tip2').style.opacity='100%';  
    document.getElementById('tip2').style.transition='all 0.5s';  
  }

  if(event.currentTarget.id==='iconContact4'){
    document.getElementById('tip3').style.opacity='100%';  
    document.getElementById('tip3').style.transition='all 0.5s';  
  }

  if(event.currentTarget.id==='iconContact1'){
    document.getElementById('tip4').style.opacity='100%';  
    document.getElementById('tip4').style.transition='all 0.5s';  
  }


}



const tipOut =()=>{
  document.getElementById('tip1').style.opacity='0%';
  document.getElementById('tip2').style.opacity='0%';
  document.getElementById('tip3').style.opacity='0%';
  document.getElementById('tip4').style.opacity='0%';
}



  return (    
    <main>
      <header class='header'> 
          <section class='contactIcons'>
            
            <div class='contactoDiv'><a href='https://www.instagram.com/distribuidora.moranzoni/' ><SiInstagram class='iconContact' id='iconContact2' onMouseOver={tipIn} onMouseOut={tipOut}/></a>
              <div class='tip' id='tip1'>
                <p class='pContact'>Instagram</p>
              </div>           
            </div>
            <div class='contactoDiv'><TbMessageUp class='iconContact' id='iconContact3' onClick={contacto} onMouseOver={tipIn} onMouseOut={tipOut}/>
              <div class='tip' id='tip2'>
                <p class='pContact'>Contactanos</p>
              </div> 
            </div>
            <div class='contactoDiv'><TfiMapAlt class='iconContact' id='iconContact4' onMouseOver={tipIn} onMouseOut={tipOut}/>
              <div class='tip' id='tip3'>
                <p class='pContact'>Encontranos</p>
              </div> 
            </div>
            <div class='contactoDiv'><BiCartDownload class='iconContact' id='iconContact1' onMouseOver={tipIn} onMouseOut={tipOut} onClick={verProductos}/>
              <div class='tip' id='tip4'>
                <p class='pContact'>Productos</p>
              </div> 
            </div>
          </section>
      </header>
      <section class='fondo'>
       <img class='imgFondo' src={fondo} alt='fondoMoranzoni.png'></img>
       <a href='../'><div class='logoFondo'></div></a>
      </section>
      <div className="App">
        <Router/>
      </div>
    </main>

  );
}

export default App;
