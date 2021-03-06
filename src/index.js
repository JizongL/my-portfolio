import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from '../src/components/App/App';
import {BrowserRouter} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

ReactDOM.render(
<BrowserRouter>  
    <App />
  </BrowserRouter>
, document.getElementById('root'));


