import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner';
import LandmarkContent from './components/LandmarkContent';
import ContentCard from './components/ContentCard';
import Residences from './imgs/residences.jpg';
import './style.css';
import QuoteSection from './components/QuoteSection';


function App () {
    return (
        <div>
            <Banner />
            <QuoteSection />
            <LandmarkContent />
            <ContentCard image={Residences} title="Residences" subtitle="Refined" button="Discover the residences" />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


