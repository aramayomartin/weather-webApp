import React from 'react';
import styles from '../styles/About.module.css';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import profile from '../images/profile.jpeg';

export default function About(){
    return(
        <div className={styles.about}>        
            <h1 className={styles.name}>Martín Aramayo</h1>
            <div className={styles.presentation}>
                <div className={styles.text}>
                <p name="description"  className={styles.description}>
                    Hello, currently I'm a student at <a className={styles.link} href="https://www.soyhenry.com/">Henry's bootcamp</a>.
                    I want to become in a full stack developer who will
                    be able to have a correct understanding of back and frontend.
                    <br />This is my first proyect, a SPA which collects data from the 
                    openWeatherMap API and use ReactJS and Vanilla CSS to render the
                    data.   
                </p>
                </div>
                <img src={profile} alt="" className={styles.photo}/>
            </div>
            <div className={styles.contactBox}>
                <ul className={styles.contact}>
                <a href='https://www.linkedin.com/in/raul-martin-aramayo-marca/'><li className={styles.item}><AiFillLinkedin/></li></a>
                <a href="https://github.com/aramayomartin/"><li className={styles.item}><AiFillGithub/></li></a>        
                </ul>
            </div>
        </div>
    )
}