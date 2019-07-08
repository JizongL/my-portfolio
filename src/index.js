import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from '../src/components/App/App';
import {BrowserRouter} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'

library.add(fab,fas,far)

ReactDOM.render(
<BrowserRouter>  
    <App />
  </BrowserRouter>
, document.getElementById('root'));


