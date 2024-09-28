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




    const sumArrCarrito=(id)=>{        

        const parent = document.getElementById("prodCarrito");
        const child = document.getElementById("prod"+id); 
  
        if(parent.contains(child)===false){
            let infoCarrito = document.createElement('section');
            infoCarrito.setAttribute("id","info"+id);
            infoCarrito.setAttribute("class","infoCarrito");           
            document.getElementById("prodCarrito").appendChild(infoCarrito);

            let descCarrito = document.createElement('div');
            descCarrito.setAttribute("id","prod"+id);           
            descCarrito.innerHTML = "Codigo "+id;
            document.getElementById("info"+id).appendChild(descCarrito);

            let cantCarrito = document.createElement('div');
            cantCarrito.setAttribute("id","cant"+id);            
            cantCarrito.innerHTML = 1;            
            document.getElementById("info"+id).appendChild(cantCarrito);
            
            document.getElementById("info"+id).style.display='flex';
            document.getElementById("info"+id).style.justifyContent='space-between';
            document.getElementById("info"+id).style.width='80%';
            document.getElementById("info"+id).style.margin='auto';
            document.getElementById("info"+id).style.borderBottom='1px solid orange';

        }else{

            let stock = 0;
            for(let x=0; x<filterProd.length; x++){
                if(filterProd[x].id===id){
                    stock = filterProd[x].stock;
                }
            }

            let cantidad = parseInt(document.getElementById("cant"+id).innerHTML); 
            
            if(cantidad<stock){
                document.getElementById("cant"+id).innerHTML=cantidad+1;
            }
        }


        
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
                <section class='prodCarrito' id='prodCarrito'>
                    <section class='titleCarrito'>
                        <h6 class='h6Carrito'>Prod.</h6>
                        <h6 class='h6Carrito'>Cant.</h6>
                    </section>

                     {/* {arrCarrito.map((prod)=>{
                        return(
                            <table key={prod}>
                                <td>{prod}</td>
                            </table>
                        )
                    })
                    }  */}
                </section>
            </section>
        </Fragment>
    )
}