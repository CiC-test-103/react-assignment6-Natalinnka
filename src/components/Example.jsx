/** Styling imports */
import { useState, useEffect } from 'react';
import styles from './Example.module.css';

import heroImage from '../images/drawers.jpg';
import avatar from '../images/avatar-michelle.jpg';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import shareIcon from '../images/icon-share.svg';

const Example = () => {
  const [isShareVisible, setIsShareVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleShareOptions = () => setIsShareVisible(prev => !prev);

  return (
    <div className={styles.card}>
      <img src={heroImage} alt="Drawers" className={styles.heroImage} />

      <div className={styles.content}>
        <h1 className={styles.title}>
           Shift the overall look and feel by <br />
           adding these wonderful touches to <br />
           furniture in your home
        </h1>

        <p className={styles.description}>
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare
          and uninviting. I’ve got some simple tips to help you make any room feel complete.
        </p>

        <footer className={styles.footer}>
          {(!isShareVisible || isDesktop) && (
            <div className={styles.author}>
              <img src={avatar} alt="Michelle" className={styles.avatar} />
              <div>
                <p className={styles.name}>Michelle Appleton</p>
                <p className={styles.date}>28 Jun 2020</p>
              </div>

              <div className={styles.popupContainer}>
                <button
                  className={`${styles.shareButton} ${isShareVisible ? styles.active : ''}`}
                  onClick={toggleShareOptions}
                >
                  <img src={shareIcon} alt="Share" width="15" height="13" />
                </button>
              </div>
            </div>
          )}

          {isShareVisible && (
            <div className={styles.shareOptions}>
              <p className={styles.shareText}>Share</p>
              <div className={styles.icons}>
                <img src={facebookIcon} alt="Facebook" className={styles.icon} />
                <img src={twitterIcon} alt="Twitter" className={styles.icon} />
                <img src={pinterestIcon} alt="Pinterest" className={styles.icon} />

                {/* Share button inside popup for mobile */}
                {!isDesktop && (
                  <button
                    className={`${styles.shareButton} ${styles.active}`}
                    onClick={toggleShareOptions}
                  >
                    <img src={shareIcon} alt="Share" width="15" height="13" />
                  </button>
                )}
              </div>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Example;