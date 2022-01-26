import React from 'react';
import Card from './Card'
import styles from '../styles/Cards.module.css';

export default function Cards({cities,onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities.length===0){
    return (
      <p>No cities entered</p>
    )
  }else{
  return (
  <div className={styles.container}>
  {
    cities.map((city)=>(
      <Card 
      max={city.max}
      min={city.min}
      name={city.name}
      img={city.img}
      onClose={onClose}
      key = {city.id}
      id={city.id}
      />
    ))
  }
  </div>)
  }
};