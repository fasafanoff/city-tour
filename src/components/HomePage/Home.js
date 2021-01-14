import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div className="home-page">
            <h1>What's up!</h1>
            <p>
                This is the home page of my little project, enjoy it.
                You can go visit <b>About</b> page, and read some info about this project,
                or you can use my interactive part in <b>Tours</b> link.
            </p>  
        </div>
    );
}

export default Home;
