import {Link} from 'react-router-dom';
import React from 'react';
import './style/CategoryPage.css';

const CategoryPage = () => {
    return (
        <div>
            <h1>Select Your Category</h1>
            <p>Select You Book</p>
            <Link to="/books">Go to Category List</Link>
        </div>
    );
};

export default CategoryPage;