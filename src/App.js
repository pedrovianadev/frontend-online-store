import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Category from './Components/Category';
import NotFound from './Components/NotFound';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/Cart" component={ Cart } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
        <Category />
      </div>
    );
  }
}

export default App;
