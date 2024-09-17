import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello I'm Pavan</h1>
            <p className={styles.description}>Passionate full-stack developer with 3 years of experience crafting scalable solutions and optimizing user experiences.</p>
            <a href='mailto:pavankumar1999.k04@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/profile-pic.png")} alt='Hero Image of Me' className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
