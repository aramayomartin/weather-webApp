import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

//Parte visual
import Home from './components/Home.jsx'
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import City from './components/City.jsx';
import Cards from './components/Cards';
// Routing
//import data from './data.js';

function App() {
  // ESTADOS 
  const [cities, setCities] = useState([]);
  const [citiesId, setCitiesId] = useState([]);
  const apiKey='4ae2636d8dfbdc3044bede63951a019b';
  // FUNCIONES
  function onSearch(city){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if(citiesId.includes(ciudad.id)){alert("Ciudad ya añadida")}
          else{
            setCities(oldCities =>[...oldCities,ciudad]);
            setCitiesId(oldCitiesId => [...oldCitiesId,ciudad.id])
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCitiesId(oldCities => oldCities.filter(c => c !== id));
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function Filtro(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  // A RETORNAR
  return (
    <div className="App">
      <div className= 'top'>  
        <Route path='/'>
          <Menu/>
        </Route>  
        <Route exact path='/'>
          <Home onSearch={onSearch} onClose={onClose} cities={cities}/>
        </Route>
      </div>
      <div className='cards'>
      <Route exact path='/'>
        <Cards onClose={onClose} cities={cities}/>
      </Route>
      </div>
      <div className='about'>
      <Route path='/about' component={About}/>
      </div>
    <div className='city'>
      <Route
        path='/city/:id'
        render={({match}) => <City city={Filtro(match.params.id)} />}
      />
    </div>
    </div>
  );
}

export default App;