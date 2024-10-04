import { Fragment, useEffect, useState } from 'react';
import './pagination.css';
import Marcas from '../marcas/marcas';
const API = process.env.REACT_APP_API_URL;



export default function Pagination(){
    
    const[marcas,setMarcas]=useState([]);

    const traerMarcas= async()=>{
        let marcas = await fetch(API+"/traerMarcas")   
        .then((res)=>res.json())
        .then((data)=>{setMarcas(data)})
        .catch(error => console.log("Se ha producido un error... " +error));        
        return marcas;
        }


    useEffect(()=>{
        traerMarcas();       

    },[])


 

    

    const pagination = (event)=>{  
        if(event.currentTarget.id==='link2'){           
            document.getElementById('containerItems').style.left='0%';
        }
        if(event.currentTarget.id==='link3'){           
            document.getElementById('containerItems').style.left='-100%';
        }
        if(event.currentTarget.id==='link4'){           
            document.getElementById('containerItems').style.left='-200%';
        }     
    }

                  

    const opcCompra2=()=>{

        console.log(document.getElementById("pagMarcas").childElementCount);

    }



    const pagination1 = (event)=>{  
        if(event.currentTarget.id==='link12'){           
            document.getElementById('marcasPag').style.left='0%';
        }
        if(event.currentTarget.id==='link13'){           
            document.getElementById('marcasPag').style.left='-102%';
        }
        if(event.currentTarget.id==='link14'){           
            document.getElementById('marcasPag').style.left='-204%';
        }     
    }

      
  


    return(
        <Fragment>
            <section class='secPagination' id='secPagination'>
                <nav aria-label="Page navigation example" class='containerNav'>
                    <ul class="pagination" >
                      <li onClick={pagination} class="page-item" id='link1'><button class="page-link">Previous</button></li>                      
                      <li onClick={pagination} class="page-item" id='link2' active><a class="page-link" href="#">1</a></li>
                      <li onClick={pagination} class="page-item" id='link3'><a class="page-link" href="#">2</a></li>
                      <li onClick={pagination} class="page-item" id='link4'><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
                <section class='containerItems' id='containerItems'> 
                    <section class='items1' id='items1'>
                        <div class='itemPage'></div>
                        <div class='itemPage'></div>
                        <div class='itemPage'></div>
                        <div class='itemPage'></div>
                    </section>
                    <section class='items1'>
                        <div class='itemPage2'></div>
                        <div class='itemPage2'></div>
                        <div class='itemPage2'></div>
                        <div class='itemPage2'></div> 
                    </section>
                    <section class='items1'>
                        <div class='itemPage3'></div>
                        <div class='itemPage3'></div>
                        <div class='itemPage3'></div>
                        <div class='itemPage3'></div> 
                    </section>
                </section>
            </section>

            <section class='pagMarcas' id='pagMarcas'>
                <section class='marcasPag' id='marcasPag'>
                    {marcas.map((marca)=>{
                        return <Marcas key={marca.id} info={marca} opcCompra2={opcCompra2}/>
                    })} 
                </section>               
            </section>

            <nav aria-label="Page navigation example" class='containerNav1'>
                    <ul class="pagination" >
                      <li onClick={pagination1} class="page-item" id='link11'><button class="page-link">Previous</button></li>                      
                      <li onClick={pagination1} class="page-item" id='link12' active><button class="page-link" >1</button></li>
                      <li onClick={pagination1} class="page-item" id='link13'><button class="page-link" >2</button></li>
                      <li onClick={pagination1} class="page-item" id='link14'><button class="page-link" >Next</button></li>
                    </ul>
                </nav>
                    
                    







        </Fragment>
    )
}


                           