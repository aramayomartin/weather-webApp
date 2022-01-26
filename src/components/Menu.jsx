import React from 'react';
import styles from '../styles/Menu.module.css'
import {Link} from 'react-router-dom';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineHome} from 'react-icons/ai';
export default function Menu() {
  // acá va tu código
  return (
  <div className={styles.navigator}>
      <ul className={styles.list}>
          <Link to='/'><li className={styles.item}><AiOutlineHome className={styles.icons}/> Home</li></Link>
          <Link to='/about'><li className={styles.item}><CgProfile className={styles.icons}/> About me</li> </Link>
      </ul>
  </div>)
};