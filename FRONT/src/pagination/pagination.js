import { Fragment } from 'react';
import './pagination.css';



export default function Pagination(){

    if(document.getElementById("containerItems")!==null){
        document.getElementById("containerItems").style.transition = "all 2s";

    }

    

    const pagination = (event)=>{

        

        if(event.currentTarget.id==='link2'){

            document.getElementById('containerItems').style.position='relative';           
            document.getElementById('containerItems').style.left='0%';
            document.getElementById("containerItems").style.transition = "all 2s";

        }
        if(event.currentTarget.id==='link3'){
           document.getElementById("containerItems").style.transition = "all 2s"
            document.getElementById('containerItems').style.position='relative';           
            document.getElementById('containerItems').style.left='-100%';
            document.getElementById("containerItems").style.transition = "all 2s";
            

        }
    
      
    }
  


    return(
        <Fragment>




            <section class='secPagination' id='secPagination'>
                <nav aria-label="Page navigation example" class='containerNav'>
                    <ul class="pagination" >
                      <li onClick={pagination} class="page-item" id='link1'><a class="page-link" href="#">Previous</a></li>                      
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
                    <section class='items2'>
                        <div class='itemPage2'></div>
                        <div class='itemPage2'></div>
                        <div class='itemPage2'></div>
                        <div class='itemPage2'></div> 
                    </section>
                    

                </section>
            </section>






        </Fragment>
    )
}


                           