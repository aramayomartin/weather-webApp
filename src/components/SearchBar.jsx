import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';
import { AiOutlineSearch } from "react-icons/ai";


export default function SearchBar({onSearch}) {
  // acá va tu código
  // ESTADOS
  const [city,setCity]= useState("");
  // FUNCIONES
  function handleSubmit(e){
    e.preventDefault();
    if(city.length!==0){
      onSearch(city);
      document.getElementById("input-Search").value='';
      setCity('');
    }
  }
  function handleCity(e){
    e.preventDefault();
    setCity(e.target.value);
  }
  // RETORNO
  //      <input type="submit" value =  'Search'   />

  return (
  <div >
    <form action="" className={styles.form}>
      <input 
      id='input-Search'
      type="text" 
      placeholder='City' 
      onChange={(e)=>handleCity(e)}
      className={styles.input}/>
      <button type='submit'
      className={styles.btnSearch}
      onClick={(e)=>handleSubmit(e)}
      ><AiOutlineSearch /></button>
    </form>
  </div>)
};