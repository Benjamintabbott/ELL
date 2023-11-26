import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './PageButton.css';


const PageButton = () => {
  return (
    <div className='round-button-container'>
      <Link to="/" className="round-button">
      </Link>
    </div>
  );
};

export default PageButton;