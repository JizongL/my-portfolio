import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../route/LandingPage/LandingPage'
import Portfolio from '../../route/Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import AboutMe from '../../route/AboutMe/AboutMe'
import ContactMe from '../../route/ContactMe/ContactMe'

function App() {
  return (
    <div className="App">
      <header className='App__header'>
        <Header/>
      </header>
      <main className='App__main'>
        <Switch>
          <Route
              exact 
              path={'/'}
              component={LandingPage}
          >              
          </Route>
          <Route
              
              path={'/portfolio'}
              component={Portfolio}
          >              
          </Route>

          <Route
              
              path={'/about'}
              component={AboutMe}
          >              
          </Route>
          <Route
              
              path={'/contact'}
              component={ContactMe}
          >              
          </Route>
        
        </Switch>        
      </main>
    <div className='footer'>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
