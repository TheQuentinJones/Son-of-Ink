// Home.jsx

// Import necessary modules and assets
import React from 'react';
import videoBg from 'public/static/videos/Tattoo Video.mp4'; // Import the background video
import styles from './Home.module.css'; // Import the CSS module for styling
import Link from 'next/link';

// Define the Home functional component
const Home = () => {
  return (
    // Main container for the home section
    <div className={styles.home}>
      {/* Container for the background video */}
      <div className={styles.videoContainer}>
        {/* Background video element */}
        <video src={videoBg} autoPlay loop muted className={styles.video} />
      </div>
      
      {/* Text overlay */}
      <h5 className={`${styles['text-overlay']} ${styles['customFont']}`}>Son's of Ink</h5>
      
      {/* Button container */}
      <div className={styles['button-container']}>
        {/* Wrap the button with Link and specify the href */}
        <Link href="/booking">
         <button className={`${styles['round-button']} ${styles['text-overlay']}`}>
              CONSULTATIONS
         </button>
          
        </Link>
      </div>
    </div>
  );
};

// Export the Home component for use in other parts of the application
export default Home;













