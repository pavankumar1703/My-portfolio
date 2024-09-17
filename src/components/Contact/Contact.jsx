import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Contact.module.css"
export const Contact = () => {
  return <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
            <a href='mailto:pavankumar1999.k04@gmail.com'>pavankumar1999.k04@gmail.com</a>
        </li>
        <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="Email icon"/>
            <a href='https://www.linkedin.com/in/pavan-kopera-392439171/'>linkedin.com/pavankopera</a>
        </li>
        <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt="Email icon"/>
            <a href='https://github.com/pavankumar1703'>github.com/pavankumar1703</a>
        </li>
    </ul>
  </footer>
}
