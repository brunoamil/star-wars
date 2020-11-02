import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Template from '../components/Template';

import Home from './../pages/Home';
import Dashboard from './../pages/Dashboard';
import About from './../pages/About';
import Swapi from './../pages/Swapi';

import ListFilms from '../components/ListFilms'
import ListPeople from '../components/ListPeople';
import ListPlanets from '../components/ListPlanets';
import ListSpecies from '../components/ListSpecies';
import ListStarships from '../components/ListStarships';
import ListVehicles from '../components/ListVehicles';

const Routes = () => (
  <Switch>
    <Template>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/swapi" component={Swapi} />
      <Route path="/films" component={ListFilms} />
      <Route path="/people" component={ListPeople} />
      <Route path="/planets" component={ListPlanets} />
      <Route path="/species" component={ListSpecies} />
      <Route path="/starships" component={ListStarships} />
      <Route path="/vehicles" component={ListVehicles} />
    </Template>
  </Switch>
)

export default Routes;