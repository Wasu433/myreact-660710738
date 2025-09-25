import {Link} from 'react-router-dom';
import React from 'react';
import './style/BooksPage.css'; 

const BooksPage = () => {
    return (
        <div>
            <h1>BookStore</h1>
            <p>Select You Book</p>
            <Link to="/books">Click your book</Link>
        </div>
    );
};

export default BooksPage;