
import './App.css';
import Router from './components/route/route';
import { TbMessageUp } from "react-icons/tb";
import { SiInstagram } from "react-icons/si";
import { LiaFacebookSquare } from "react-icons/lia";
import { TfiMapAlt } from "react-icons/tfi";





function App() {
  return (

    
    <main>


      <header class='header'>
        <section class='contact'>
          <div class='contactoDiv'><LiaFacebookSquare class='iconContact' id='iconContact1'/></div>
          <div class='contactoDiv'><SiInstagram class='iconContact' id='iconContact2'/></div>
          <div class='contactoDiv'><TbMessageUp class='iconContact'/></div>
          <div class='contactoDiv'><TfiMapAlt class='iconContact'/></div>
        </section>
      </header>
      <section class='fondo'>
        <div class='imgFondo'></div>
        <div class='logoFondo'></div>
      </section>
      <div className="App">
        <Router/>
      </div>
    </main>

  );
}

export default App;
