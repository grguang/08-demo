import React from 'react';
import {render} from 'react-dom';

import './main.css'
import './post.css'
import Routers from './Routers.js'
import 'highlight.js/styles/arta.css'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Routers />
  ,document.getElementById('root'));
