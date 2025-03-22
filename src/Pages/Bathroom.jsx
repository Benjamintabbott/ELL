import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import PageButton from "../Components/PageButton";
import bathroom from "../Assets/Bathroom/bathroom.png";
import toiletImage from "../Assets/Bathroom/toilet.png";
import toiletSound from '../Assets/Bathroom/toilet.mp3';
import towel1Image from '../Assets/Bathroom/towel1.png';
import towel1Sound from '../Assets/Bathroom/towel.mp3';
import toiletPaperImage from "../Assets/Bathroom/toilet-paper.png";
import toiletPaperSound from '../Assets/Bathroom/toilet-paper.mp3';
import sinkImage from "../Assets/Bathroom/sink.png";
import sinkSound from '../Assets/Bathroom/sink.mp3';
import faucetImage from "../Assets/Bathroom/faucet.png";
import faucetSound from '../Assets/Bathroom/faucet.mp3';
import handSoapImage from "../Assets/Bathroom/hand-soap.png";
import handSoapSound from '../Assets/Bathroom/hand-soap.mp3';
import bathTubImage from "../Assets/Bathroom/bath-tub.png";
import bathTubSound from '../Assets/Bathroom/bath-tub.mp3';
import showerCurtainImage from "../Assets/Bathroom/shower-curtain.png";
import showerCurtainSound from '../Assets/Bathroom/shower-curtain.mp3';
import shampooImage from "../Assets/Bathroom/shampoo.png";
import shampooSound from '../Assets/Bathroom/shampoo.mp3';
import towel2Image from '../Assets/Bathroom/towel2.png';
import showerImage from '../Assets/Bathroom/shower.png';
import showerSound from '../Assets/Bathroom/shower.mp3';
import bathmatImage from '../Assets/Bathroom/bathmat.png';
import bathmatSound from '../Assets/Bathroom/bathmat.mp3';
import toothbrushImage from '../Assets/Bathroom/toothbrush.png';
import toothbrushSound from '../Assets/Bathroom/toothbrush.mp3';
import toothpasteImage from '../Assets/Bathroom/toothpaste.png';
import toothpasteSound from '../Assets/Bathroom/toothpaste.mp3';
import mirrorImage from '../Assets/Bathroom/mirror.png';
import mirrorSound from '../Assets/Bathroom/mirror.mp3';
import barSoapImage from '../Assets/Bathroom/bar-of-soap.png';
import barSoapSound from '../Assets/Bathroom/bar-of-soap.mp3';

const BathroomImageMap = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isHovered, setIsHovered] = useState({});

    useEffect(() => {
        const assets = [bathroom, toiletImage, towel1Image, toiletPaperImage, sinkImage, faucetImage,
                        toiletSound, towel1Sound, toiletPaperSound, sinkSound, faucetSound, handSoapImage, 
                        handSoapSound, bathTubImage, bathTubSound, showerCurtainImage, showerCurtainSound,
                        shampooImage, shampooSound];
        let loadedAssets = 0;
        const totalAssets = assets.length;

        const checkAllAssetsLoaded = () => {
            loadedAssets++;
            if (loadedAssets === totalAssets) {
                setTimeout(() => setIsLoading(false), 500);
            }
        };

        assets.forEach((src) => {
            if (src.endsWith(".mp3")) {
                const audio = new Audio(src);
                audio.oncanplaythrough = checkAllAssetsLoaded;
                audio.onerror = checkAllAssetsLoaded;
            } else {
                const img = new Image();
                img.src = src;
                img.onload = checkAllAssetsLoaded;
                img.onerror = checkAllAssetsLoaded;
            }
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
        imageContainer: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '63vw',
            height: '90vh',
            margin: '0 auto',
            overflow: 'hidden'
        },
        baseImage: {
            width: '100%',
            display: 'block'
        },
        overlayImage: {
            position: 'absolute',
            width: 'auto',
            height: 'auto',
            pointerEvents: 'none',
            transition: 'transform 0.2s ease-in-out'
        },
        hovered: {
            transform: 'scale(1.01)'
        },
        clickableArea: {
            position: 'absolute',
            cursor: 'pointer',
            zIndex: 10
        }
    };

    const handleAreaClick = (sound) => {
        const audio = new Audio(sound);
        audio.play();
    };

    if (isLoading) {
        return (
            <div style={styles.loadingScreen}>
                <ReactLoading type="bars" color="#ffffff" height={100} width={100} />
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <PageButton />
            <div style={styles.imageContainer}>
                {/* Base Image */}
                <img src={bathroom} alt="Bathroom" style={styles.baseImage} />
                
                {/* Overlay Items add , border: '1px solid red' */}
                {[{
                    img: toiletImage,
                    sound: toiletSound,
                    className: 'toilet',
                    areaStyle: { top: '49%', left: '63%', width: '7vw', height: '27vh' }
                }, {
                    img: towel1Image,
                    sound: towel1Sound,
                    className: 'towel1',
                    areaStyle: { top: '42vh', left: '33vw', width: '4vw', height: '16vh' }
                }, {
                    img: toiletPaperImage,
                    sound: toiletPaperSound,
                    className: 'toilet-paper',
                    areaStyle: { top: '56%', left: '76%', width: '3vw', height: '6vh' }
                }, {
                    img: sinkImage,
                    sound: sinkSound,
                    className: 'sink',
                    areaStyle: { top: '52%', left: '83%', width: '6vw', height: '25vh' }
                }, {
                    img: faucetImage,
                    sound: faucetSound,
                    className: 'faucet',
                    areaStyle: { top: '43%', left: '84.5%', width: '3.5vw', height: '8vh' }
                }, {
                    img: handSoapImage,
                    sound: handSoapSound,
                    className: 'hand-soap',
                    areaStyle: { top: '45%', left: '82%', width: '1.5vw', height: '6.25vh' }
                }, {
                    img: bathTubImage,
                    sound: bathTubSound,
                    className: 'bath-tub',
                    areaStyle: { top: '57%', left: '15%', width: '21vw', height: '18vh' }
                }, {
                    img: showerCurtainImage,
                    sound: showerCurtainSound,
                    className: 'shower-curtain',
                    areaStyle: { top: '18%', left: '16.5%', width: '9vw', height: '50vh' }
                }, {
                    img: shampooImage,
                    sound: shampooSound,
                    className: 'shampoo',
                    areaStyle: { top: '27%', left: '52%', width: '3vw', height: '14vh' }
                }, {
                    img: towel2Image,
                    sound: towel1Sound,
                    className: 'towel2',
                    areaStyle: { top: '25%', left: '3.5%', width: '3vw', height: '25vh' }
                }, {
                    img: showerImage,
                    sound: showerSound,
                    className: 'shower',
                    areaStyle: { top: '21%', left: '34%', width: '3.75vw', height: '7vh' }
                }, {
                    img: bathmatImage,
                    sound: bathmatSound,
                    className: 'bathmat',
                    areaStyle: { top: '81%', left: '17%', width: '19vw', height: '8vh' }
                }, {
                    img: mirrorImage,
                    sound: mirrorSound,
                    className: 'mirror',
                    areaStyle: { top: '16%', left: '82%', width: '7.5vw', height: '20vh' }
                },{
                    img: toothbrushImage,
                    sound: toothbrushSound,
                    className: 'toothbrush',
                    areaStyle: { top: '38.5%', left: '82%', width: '3vw', height: '2vh' }
                }, {
                    img: toothpasteImage,
                    sound: toothpasteSound,
                    className: 'toothpaste',
                    areaStyle: { top: '38.5%', left: '87%', width: '3vw', height: '2vh' }
                }, {
                    img: barSoapImage,
                    sound: barSoapSound,
                    className: 'bar-of-soap',
                    areaStyle: { top: '39%', left: '56%', width: '3.3vw', height: '3vh', border: '1px solid red' }
                }
                
            
            ].map((item, index) => (
                    <React.Fragment key={index}>
                        {/* Clickable Area */}
                        <div style={{ ...styles.clickableArea, ...item.areaStyle }}
                            onClick={() => handleAreaClick(item.sound)}
                            onMouseEnter={() => setIsHovered(prev => ({ ...prev, [item.className]: true }))}
                            onMouseLeave={() => setIsHovered(prev => ({ ...prev, [item.className]: false }))}>
                        </div>
                        
                        {/* Overlay Image */}
                        <img src={item.img} alt={item.className} 
                            style={{ ...styles.overlayImage, ...(isHovered[item.className] ? styles.hovered : {}) }} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default BathroomImageMap;