import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../route/LandingPage/LandingPage'
import Portfolio from '../../route/Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import AboutMe from '../../route/AboutMe/AboutMe'
import ContactMe from '../../route/ContactMe/ContactMe'
import Project_1 from '../../route/projects/project_1'
import Project_2 from '../../route/projects/project_2'
import Project_3 from '../../route/projects/project_3'

function App() {
  return (
    <div className="App">
      <nav className='App__header'>
        <div className='logo'>
          David's Portfolio
        </div>
        <Header/>
      </nav>
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
          <Route
              path={'/project_1'}
              component={Project_1}
          ></Route>
          <Route 
              path={'/project_2'}
              component={Project_2}>
          </Route>      
          <Route 
              path={'/project_3'}
              component={Project_3}>
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
