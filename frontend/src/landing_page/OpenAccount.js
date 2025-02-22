import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5' >
            <div className='row text-center'>
                <img src='/media/homeHero.png' alt='heroImage' className='mb-5'></img>
                <h1 className='mt-5'>Open a My Trade account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs' 
                style={{width:"20%",margin:"0 auto"}}>Sign Up</button>

            </div>

        </div>
    );
}

export default OpenAccount;