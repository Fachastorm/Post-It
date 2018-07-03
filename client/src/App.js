import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'
import PostForm from './containers/postForm'
import postPage from './containers/postPage';
import Navbar from './components/Navbar';
import PostShow from './containers/postShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/posts' component={postPage} />
            <Route exact path='/posts/new' component={PostForm} />
            <Navbar />
          </Switch>
          </div>
          </Router>
      </div>
    );
  }
}

export default App;
