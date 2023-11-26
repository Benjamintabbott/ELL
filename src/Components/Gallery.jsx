import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';


import image1 from '../Assets/1.png';
import image2 from '../Assets/2.png';
import image3 from '../Assets/3.png';
import image4 from '../Assets/4.png';
import image5 from '../Assets/5.png';
import image6 from '../Assets/6.png';


const Gallery = () => {
    return (
      <div className="gallery-container">
        <Link to="/Scene1" className="image-link">
          <img src={image1} alt="Kitchen" className="gallery-image" />
        </Link>
  
        <Link to="/Scene2" className="image-link">
          <img src={image2} alt="House" className="gallery-image" />
        </Link>
  
        <Link to="/Scene3" className="image-link">
          <img src={image3} alt="Desk" className="gallery-image" />
        </Link>
  
        <Link to="/Scene4" className="image-link">
          <img src={image4} alt="Bedroom" className="gallery-image" />
        </Link>
  
        <Link to="/Scene5" className="image-link">
          <img src={image5} alt="Backyard" className="gallery-image" />
        </Link>
  
        <Link to="/Scene6" className="image-link">
          <img src={image6} alt="School" className="gallery-image" />
        </Link>
      </div>
    );
  };

export default Gallery;