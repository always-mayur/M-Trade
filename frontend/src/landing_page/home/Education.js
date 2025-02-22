import React from 'react';

function Education() {
    return ( 
        <div className='container mb-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='/media/education.svg' alt='education' style={{width:"70%"}}></img>
            </div>


            <div className='col-6 '>
                <h1 className='mb-2 fs-2'>Free open market education</h1>
                <p className='text-muted'>Varsity, the largest online stock market 
                    education book in the world covering everything from the basics
                    to advanced trading.</p>
                {/* <a href='' style={{textDecoration:"none"}}>Varsity  <i 
                class="fa-solid fa-arrow-right"></i></a> */}


                <p className='text-muted mt-4'>Trading Q&A, the most active trading and 
                    investment community in India for all your market related queries.</p>
                {/* <a href='' style={{textDecoration:"none"}}>Trading Q&A  <i 
                class="fa-solid fa-arrow-right"></i></a> */}
            </div>

        </div>
    </div>
    );
}

export default Education;