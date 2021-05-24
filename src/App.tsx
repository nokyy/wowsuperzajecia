import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import PageNotFound from './views/PageNotFound/PageNotFound';
import store from './store';
import TodoPanel from './views/todoPanel/todoPanel';

import './App.css';


const  App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <Switch>
        {/* exact pozwala na wpakowanie home poza kolejką */}
        <Route path='/' component={Home} exact /> 
        <Route path='/movie/:id' component={Movie} />
        <Route path='/todos' component={TodoPanel} />
        <Route path='*' component={PageNotFound} />
        
      </Switch>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
