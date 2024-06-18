import React from 'react';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className='container header-block'>
            <Link to='/'>The Meal</Link>
        </header>
    );
};

export default Header;