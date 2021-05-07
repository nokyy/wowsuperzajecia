import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import PageNotFound from './views/PageNotFound/PageNotFound';

import './App.css';

const  App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        {/* exact pozwala na wpakowanie home poza kolejką */}
        <Route path='/' component={Home} exact /> 
        <Route path='/movie/:id' component={Movie} />
        <Route path='*' component={PageNotFound} />
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
