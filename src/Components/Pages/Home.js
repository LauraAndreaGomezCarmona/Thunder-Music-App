import React from 'react';

export const Home = () => {
    return (
        <div data-testid='home-id' className='main-message' aria-hidden='true'>
            <h3 className='thunder'>Welcome to</h3>
            <h4 className='main-title'>THUNDER</h4>
            <h4 className='phrase'>🎵 For music lovers ⭐🎶🐞</h4>
            <div className='main-text' aria-hidden='true'>
                <p>Thunder is a music platform that uses the Youtube data API   
                to ensure the users enjoy all the music and videos they like.</p> 
                <p className='second'>Apart from this great feature. What makes Thunder unique    
                is the songs quiz section where you can play to guess the right song,    
                it is a very interactive and funny game.</p>
            </div>
            <div className='main-row' aria-hidden='true'>
                <img className='welcome-headphones' src='./Images/headphones.png' alt='Thunder icon'/>
                <h6>Enjoy and vibrate like a thunder</h6>
                <img className='welcome-icon' src='./Images/Thunder.png' alt='thunder icon'/>
            </div>
        </div>
    );
};

