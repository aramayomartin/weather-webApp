import React from 'react';
import styles from '../styles/Card.module.css';
import {Link} from 'react-router-dom';
import {AiOutlineClose} from "react-icons/ai";
export default function Card(props) {
  // ESTADOS
  // FUNCIONES
  function handleButton(){
    props.onClose(props.id)
  }
  //RETORNO
  return (
  <div className={styles.card}>
    <div className={styles.boton}>
      <button className={styles.closeButton} onClick={handleButton}><AiOutlineClose/></button>
    </div>
    <Link to={`/city/${props.id}`}>
      <p className={styles.title}>{props.name}</p>
    </Link>
    <div className={styles.temp}>
      <div className={styles.min}>
        <p>Min</p>
        <p>{props.min}°</p>
      </div>
      <div className={styles.max}>
        <p>Max</p>
        <p>{props.max}°</p>
      </div>
      <img src={`https://openweathermap.org/img/wn/${props.img}@2x.png`} alt="#" className={styles.image}/>
    </div>
  </div>)
};