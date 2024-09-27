import { Fragment } from 'react';
import './panelCompra.css';
import CardListas from '../cardListas/cardListas';
import { useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
const API = process.env.REACT_APP_API_URL;


export default function PanelCompra (){


    const [listProd,setListProd]=useState([]);
    // const [filterProd,setFilterProd]=useState([]);
    let filterProd = [];

    let opcCompra = sessionStorage.getItem('opcCompra');
    let tipoCompra = sessionStorage.getItem('tipoCompra');
    //let arrCarrito = [];
    const [arrCarrito,setArrCarrito]=useState([]);

    sessionStorage.setItem('carrito',arrCarrito);



    if(tipoCompra==='marca'){
        filterProd = listProd.filter((prod)=>prod.marca===opcCompra);
    } else{
        filterProd = listProd.filter((prod)=>prod.categoria===opcCompra);
    }


    
    

    const traerProductos = async()=>{    
        
                
        let productos = await fetch (API+'/traerProductos')
        .then((res)=>res.json())
        .then ((data)=>{setListProd(data)})
        .catch(error => console.log("Se ha producido un error... " +error));         

        return productos;
        }


    useEffect(()=>{
        traerProductos(); 
              
    },[])




    const dispCarrito=()=>{
        document.getElementById('carrito').style.display='block';
        document.getElementById('divCarrito').style.display='flex';
        
    }


    const checkCarrito=()=>{
        console.log(arrCarrito)
    }


    const sumArrCarrito=(id)=>{
       arrCarrito.push(id);
       sessionStorage.setItem('carrito',arrCarrito);
        //setArrCarrito(arrCarrito);
        console.log(arrCarrito);
    }

    
    


   




    return(
        <Fragment>
            <section class='secList'>
                {filterProd.map((listado)=>{
                    return <CardListas key={listado.id} info={listado} dispCarrito={dispCarrito} sumArrCarrito={sumArrCarrito}/>
                })}     
            </section>
            <section class='carrito' id='carrito'>
                <div class='divCarrito' id='divCarrito'><FontAwesomeIcon icon={faCartShopping} id='iconCarrito'/></div>
                <section class='prodCarrito'>
                    {arrCarrito.map((prod)=>{
                        return(
                            <table key={prod}>
                                <td>{prod}</td>
                            </table>
                        )
                    })
                    }
                </section>
            </section>
        </Fragment>
    )
}