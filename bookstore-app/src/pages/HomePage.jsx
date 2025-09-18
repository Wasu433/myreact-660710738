import {Link} from 'react-router-dom';
import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Bookstore</h1>
            <p>Discover a variety of books across different genres.</p>
            <Link to="/books">Browse Books</Link>
        </div>
    );
};

export default HomePage;