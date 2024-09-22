import { Fragment } from 'react';
import './panelCompra.css';
import CardListas from '../cardListas/cardListas';
import { useState,useEffect} from 'react';
const API = process.env.REACT_APP_API_URL;

export default function PanelCompra (){


    const [listProd,setListProd]=useState([]);
    // const [filterProd,setFilterProd]=useState([]);
    let filterProd = [];

    let opcCompra = sessionStorage.getItem('opcCompra');
    let tipoCompra = sessionStorage.getItem('tipoCompra');



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






    return(
        <Fragment>
            {filterProd.map((listado)=>{
               return <CardListas key={listado.id} info={listado}/>
            })}     
        </Fragment>
    )
}