import React from 'react';

function Universe() {
    return (     
<div className="container mt-5">
    <div className="row text-center">

        <h1 className='mb-3'>The MyTrade Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

            <div className="col-4  p-3 mt-5  ">
            <img src='/media/smallcaseLogo.png' />
            </div>

            {/* <div className="col-4  p-3 ">
            <img src='/media/streakLogo.png' />
            </div> */}

            <div className="col-4  p-3 mt-5">
            <img src='/media/sensibullLogo.svg' />
            </div>

            {/* <div className="col-4  p-3 mt-5">
            <img src='/media/zerodhaFundhouse.png' />
            </div> */}

            <div className="col-4  p-3 mt-5">
            <img src='/media/goldenpiLogo.png' />
            </div>

            {/* <div className="col-4  p-3 mt-5">
            <img src='/media/dittoLogo.png' />
            </div> */}
    </div>

    <button className='p-2 btn btn-primary fs-5 mb-3 mt-4' style={{width:"20%",marginLeft:"40%"}}>Sign Up</button>
</div>
    );
}

export default Universe;