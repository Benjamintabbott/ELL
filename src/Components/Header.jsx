import React from 'react';
import logo from '../Assets/ELL.png';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo"/>
        </Link>
        <h1 className="headerText">English Language Learners</h1>
      </div>
    </div>
  );
};



export default Header;