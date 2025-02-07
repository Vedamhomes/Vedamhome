"use client"
 // Overlay.js
import { useState, useEffect } from "react";
import styles from "./style.css";

const Overlay = (props) => {
  const { setIsBannerOpn } = props;
  const [showOverlay, setShowOverlay] = useState(true);
  const [imageSrc, setImageSrc] = useState('coming_soon_new.jpg');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setImageSrc('coming_soon_new_mobile.jpg');
      } else {
        setImageSrc('coming_soon_new.jpg');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once to set the initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClose = () => {
    setShowOverlay(false);
  };

  const hadleBtnCkick = () => {
    setShowOverlay(false);
    setIsBannerOpn(true)
  };

  if (!showOverlay) return null;

  return (
    <div className="overlay_popup">
    <div className="overlay">
    
      <img src={imageSrc} alt="Welcome" />
      {/* <div onClick={hadleBtnCkick} className="click_me_btn">
        <img className="click_me_btn_img" src="button.png" alt="click me" />
      </div> */}
      <div onClick={() => setIsBannerOpn(true)} className='click_me_btn'>
          <button className='click_me_btn_img'>Avail pre-launch benefits now</button>
       </div>
      <button
        className="close-btn"
        onClick={handleClose}
        aria-label="Close Overlay"
      ></button>
          </div>
    </div>
  );
};

export default Overlay;
