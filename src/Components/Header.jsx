import React from 'react';
import logo from '../Assets/ELL.png';
import './Header.css';


const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.textContainer}>
        <h1 style={styles.headerText}>ELL</h1>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#eee', // Set your desired background color
  },
  logoContainer: {
    marginRight: '20px', // Adjust the spacing between the logo and text
  },
  logo: {
    width: '100px', // Set the width of your logo as needed
    height: 'auto', // Maintain aspect ratio
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
  },
  headerText: {
    margin: 0,
    fontSize: '3.5em', // Set the font size as needed
  },
};

export default Header;