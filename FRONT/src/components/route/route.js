import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../home/home';
import Admin from '../admin/admin';
import PanelAdmin from '../panelAdmin/panelAdmin';
import PanelCompra from '../panelCompra/panelCompra';
import FormContacto from '../../formContacto/formContacto';


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element ={<Home/>}></Route>
                <Route path = '/adminMoranzoni' element ={<Admin/>}></Route>
                <Route path='/panelAdmin' element={<PanelAdmin/>}></Route>
                <Route path='/panelCompra' element={<PanelCompra/>}></Route>
                <Route path='/formContacto' element={<FormContacto/>}></Route>



            </Routes>
        </BrowserRouter>
    )
}