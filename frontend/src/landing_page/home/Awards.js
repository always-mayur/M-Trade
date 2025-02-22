import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-4 '>
            <div className='row'>
            <div className='col-6'>
                <img src='/media/largestBroker.svg' alt='largestbroker'></img>
            </div>

            <div className='col-6 p-5 mt-5'>
                <h1>India's most Trusted Stock Broker</h1>
                <p className='mb-5'>2+ MyTrade clients contribute to over all 15% of the 
                volume of India's Trading and Investing in:</p>
                
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li><p>Futures and Options</p></li>
                            <li><p>Commodity Derivatives</p></li>
                            <li><p>Currency Derivatives</p></li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct Mutual Funds</p></li>
                            <li><p>Bonds and Govt. Securities</p></li>
                        </ul>
                    </div>
                </div>
                <img src='\media\pressLogos.png' alt='pressLogos' style={{width:"90%"}}></img>
            </div>
            </div>

        </div>
    );
}

export default Awards;