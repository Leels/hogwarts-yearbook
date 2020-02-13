import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FacultyPage from './components/FacultyPage';
import Gryffindor from './components/Gryffindor';
import Hufflepuff from './components/Hufflepuff';
import Ravenclaw from './components/Ravenclaw';
import Slytherin from './components/Slytherin'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Navbar />
    <Switch>
      <Route exact path='/' component={FacultyPage} />
      <Route path='/gryffindor' component={Gryffindor} />
      <Route path='/hufflepuff' component={Hufflepuff} />
      <Route path='/ravenclaw' component={Ravenclaw} />
      <Route path='/slytherin' component={Slytherin} />
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
