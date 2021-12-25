import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () =>{
    return(
        <div>
            <h1>My Work</h1>
            checkout the things i have done:
            <Link to="/portfolio/1">item 1</Link>
            <Link to="/portfolio/2">item 2</Link>
        </div>
    )
}

export default Portfolio;