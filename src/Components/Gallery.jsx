import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import kitchen from '../Assets/kitchen.png';
import bathroom from '../Assets/Bathroom/bathroom.png';
import classroom from '../Assets/classroom.png';
import backyard from '../Assets/backyard.png';

const Gallery = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const images = [kitchen, bathroom, classroom, backyard];
        let loadedImages = 0;
        const totalImages = images.length;

        const checkAllImagesLoaded = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                setTimeout(() => setIsLoading(false), 500);
            }
        };

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = checkAllImagesLoaded;
            img.onerror = checkAllImagesLoaded; // In case of any loading errors, still proceed
        });
    }, []);

    const styles = {
        loadingScreen: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            fontSize: '1.5rem',
            zIndex: 9999
        },
        container: {
            textAlign: 'center',
            padding: '20px'
        },
        galleryContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
        },
        imageLink: {
            textDecoration: 'none'
        },
        galleryImage: {
            width: '30rem',
            borderRadius: '10px',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            margin: '15px'
        }
    };

    if (isLoading) {
        return (
            <div style={styles.loadingScreen}>
                <ReactLoading type="bars" color="#ffffff" height={100} width={100} />
                <p>Loading Gallery...</p>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div>
                <h1>Choose Your Scene!</h1><br />
            </div>
            <div style={styles.galleryContainer}>
                {[{ img: kitchen, link: "/Kitchen" },
                  { img: bathroom, link: "/Bathroom" },
                  { img: classroom, link: "/Classroom" },
                  { img: backyard, link: "/Backyard" }].map((scene, index) => (
                    <Link to={scene.link} style={styles.imageLink} key={index}>
                        <img 
                            src={scene.img} 
                            alt={scene.link.replace("/", "")}
                            style={styles.galleryImage}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.boxShadow = '0px 0px 20px rgba(255, 255, 255, 0.8)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Gallery;