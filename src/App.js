import React from 'react';
import {Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
// import Extras from './components/Extras';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <Switch>
        <Route path='/' exact={true}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Route>
        {/* <Route path='/extras' exact={true}>
          <Extras />
        </Route> */}
      </Switch>
    </main>
  );
}

export default App;
