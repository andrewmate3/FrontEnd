import React, { useState, useEffect } from 'react';
import '../App.css'
import figure1 from '../Resources/Figure1.png'
import figure2 from '../Resources/Figure2.png'
import figure3 from '../Resources/Figure3.png'


function GraphComponent(){
    const imagesList =[
        {
            id: 1,
            src: figure1,
            alt: "Figure1"
        }, 
        {
            id: 2,
            src: figure2,
            alt: "Figure2"
        },
        {
            id: 3,
            src: figure3,
            alt: "Figure3"
        }
    ];

    return(
        <div className='wrap'>
            <div className='images'>
                {
                    imagesList.map((image) => (
                        <img key={image.id} src={image.src} alt={image.alt}></img>
                    ))
                }
            </div>
        </div>
    );
}

export default GraphComponent;