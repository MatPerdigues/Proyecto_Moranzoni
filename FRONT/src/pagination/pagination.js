import { Fragment } from 'react';
import './pagination.css';



export default function Pagination(){

    const elim = ()=>{
        document.getElementById('div1').style.display='none';
        document.getElementById('div2').style.display='block';

    }

    const elim2 = ()=>{
        document.getElementById('div2').style.display='none';
         document.getElementById('div1').style.display='block';

    }

  


    return(
        <Fragment>
            <section class='secPagination'>
                <div class='div1' id='div1' onClick={elim}></div>
                <div class='div2' id='div2' onClick={elim2}></div>
            </section>
        </Fragment>
    )
}


                           