import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner';
import ContentCard from './components/ContentCard';




import './style.css';


function App () {
    return (
        <div>
            <Banner />
            <ContentCard />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


