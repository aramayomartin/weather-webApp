import React from "react";
import styles from "../styles/City.module.css";
import {FaTemperatureHigh} from 'react-icons/fa';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {BsWind,BsClouds} from 'react-icons/bs';
import {MdGpsFixed} from 'react-icons/md';

export default function City({city}) {

    if(city){
    return (
        <div className={styles.ciudad} >
                <div className={styles.container}>
                    <h2>{city.name}</h2>
                    <div className={styles.info}>
                        <ul className={styles.list}>
                            <li><FaTemperatureHigh/> Temperature: {city.temp} ºC</li>
                            <li><TiWeatherPartlySunny/> Weather: {city.weather}</li>
                            <li><BsWind/> Wind: {city.wind} km/h</li>
                            <li><BsClouds/> Clouds: {city.clouds}</li>
                            <li><MdGpsFixed/> Lat/Long: {city.latitud}º/{city.longitud}º</li>
                        </ul>  
                        <img src={`https://openweathermap.org/img/wn/${city.img}@2x.png`} alt="#" className={styles.img}/> 
                    </div>
                </div>
        </div>
    )
    }else{return <p>Ciudad no encontrada</p>}
}
