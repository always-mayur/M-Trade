import React from "react";

function Hero() {
return (
<section className="container-fluid" id="supportHero">
    <div className="p-3 " id="supportWrapper">
    <h4 className="p-3">Support Portal</h4>
    <h4 className="mt-3"><a href="" className="p-3 " style={{textDecoration:"none"}}>Track Tickets</a> </h4> 
    </div>
    <div className="row p-3 m-3">
    <div className="col-6 p-1 mr-2">
        <h1 className="fs-3 ">
        Search for an answer or browse help topics to create a ticket
        </h1>
        <input placeholder="Eg. how do I activate F&O" />
        <br />
        <div className="mt-3" >
        <a href="" className="p-3 " style={{textDecoration:"none"}}>1.Track account opening</a> <br/>
        <a href="" className="p-3" style={{textDecoration:"none"}}>2.Track segment activation</a> <br/>
        <a href="" className="p-3" style={{textDecoration:"none"}}>3.Intraday margins</a> <br/>
        <a href="" className="p-3" style={{textDecoration:"none"}}>4.Kite user manual</a> <br/>
        </div>
    </div>
    <div className="col-6 p-3 " >
        <h1 className="fs-3">Featured</h1>
        <ol>
        <li>
            <a href="" style={{textDecoration:"none"}}>Current Takeovers and Delisting - January 2024</a>
        </li>
        <li>
            <a href=""  style={{textDecoration:"none"}}>Latest Intraday leverages - MIS & CO</a>
        </li>
        </ol>
    </div>
    </div>
</section>
);
}

export default Hero;
