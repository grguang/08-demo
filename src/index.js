import React from 'react';
import {render} from 'react-dom';

import './main.css'
import Routers from './Routers.js'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Routers />
  ,document.getElementById('root'));
