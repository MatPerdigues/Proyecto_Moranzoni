import { Fragment, useEffect, useState } from 'react';
import './pagination.css';

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
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

    


                  

     const opcCompra2=(nombre)=>{

        
        console.log(nombre);


    }
    
    const distrMarcas = ()=>{ 


        let idContainerImg=0;
        let idContainerImgs = 0;
        let carouselItem = 0;
            
        for(let x=0; x<marcas.length;x++){
                
            if(document.getElementById('containerImgs'+idContainerImgs).childElementCount<6){
                if(document.getElementById("containerImg"+idContainerImg)===null){
                    let containerImg = document.createElement('div');
                    containerImg.setAttribute("class","containerImg");
                    containerImg.setAttribute("id","containerImg"+ idContainerImg);
                    document.getElementById('containerImgs'+idContainerImgs).appendChild(containerImg);  
                    
                    let imagenMarca = document.createElement('img');
                    imagenMarca.setAttribute("src",marcas[x].imagen);
                    imagenMarca.setAttribute("alt","img marca");
                    imagenMarca.setAttribute("class","imgMarcas");
                    imagenMarca.setAttribute("id",marcas[x].nombre);  
                    document.getElementById("containerImg"+ idContainerImg).appendChild(imagenMarca);  
                    document.getElementById(marcas[x].nombre).addEventListener("click", function(){opcCompra2(marcas[x].nombre)})
                    
                    idContainerImg++;
                }
            }else{

                carouselItem++;
                idContainerImgs++;
                        

                if(document.getElementById("carouselItem"+carouselItem)===null){                        
                    let divCarousel = document.createElement('div');  
                    divCarousel.setAttribute("class","carousel-item");
                    divCarousel.setAttribute("id","carouselItem"+carouselItem);
                    document.getElementById('carouselInner').appendChild(divCarousel); 
                }

                if(document.getElementById("containerImgs"+idContainerImgs)===null){                        
                    let containerImgs = document.createElement('div');  
                    containerImgs.setAttribute("class","containerImgs");
                    containerImgs.setAttribute("id","containerImgs"+ idContainerImgs);
                    document.getElementById("carouselItem"+carouselItem).appendChild(containerImgs); 
                }

                if(document.getElementById("containerImg"+idContainerImg)===null){
                    let containerImg = document.createElement('div');
                    containerImg.setAttribute("class","containerImg");
                    containerImg.setAttribute("id","containerImg"+ idContainerImg);
                    document.getElementById('containerImgs'+idContainerImgs).appendChild(containerImg);  
                    
                    let imagenMarca = document.createElement('img');
                    imagenMarca.setAttribute("src",marcas[x].imagen);
                    imagenMarca.setAttribute("alt","img marca");
                    imagenMarca.setAttribute("class","imgMarcas");
                    imagenMarca.setAttribute("id",marcas[x].nombre);  
                    document.getElementById("containerImg"+ idContainerImg).appendChild(imagenMarca);  
                    document.getElementById(marcas[x].nombre).addEventListener("click", function(){opcCompra2(marcas[x].nombre)})
                    
                    idContainerImg++;
                }
                
                
            }
            }
        }     

        distrMarcas();


    return(
        <Fragment>
        <section class='secPagination' id='secPagination'>


            <div id="carouselExample" class="carousel slide" >
                <div class="carousel-inner" id='carouselInner'>                
                    <div class="carousel-item active" id='carouselItem0'>
                        <div class='containerImgs' id='containerImgs0'></div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" id='flecha'>
                    <GrPrevious id='flecha1'/>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" id='flecha'>

                    <GrNext id='flecha1'/>

                </button>
            </div>

        </section>


        </Fragment>
)

}


                           