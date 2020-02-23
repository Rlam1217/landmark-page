import React from 'react';
import Render from '../imgs/render.jpg';
import LandmarkWhite from '../imgs/landmark-white.svg';


function ContentCard () {
    return (

        <section id="landmark" className="landmark-building">
            <div className="render-image-wrapper">
                <img src={Render} alt="Landmark On Robson Complex"/>
            </div>
            <div className="content">
                <h2 className="subtitle">This Is</h2>
                <div className="landmark-title-wrapper">
                    <img src={LandmarkWhite} alt="Landmark On Robson"/>
                </div>
                <div className="link">Watch The Film</div>
            </div>   
        </section>

    )

}



export default ContentCard