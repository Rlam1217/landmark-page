import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner';
import LandmarkContent from './components/LandmarkContent';
import './style.css';


function App () {
    return (
        <div>
            <Banner />
            <LandmarkContent />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


