import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from '../styles/Nav.module.css';

export default function Nav({onSearch}) {
  // acá va tu código

  return (
  <div className={styles.container}>
      <SearchBar onSearch={onSearch}/>
      
  </div>)
};