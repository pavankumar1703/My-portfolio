import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css';
export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img src={getImageUrl("about/about1.png")} 
        alt='My about Image' className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} 
                 alt='cursor icon' />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a front end developer with experience
                        in building responsive and optimized sites
                    </p>
                </div> 
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} 
                 alt='server icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                    I'm a backend developer proficient in designing and implementing 
                    robust server-side solutions for optimal performance.
                    </p>
                </div> 
            </li>
           
        </ul>
  
        </div>
    </section>
  )
}
