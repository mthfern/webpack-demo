//const _ = require('lodash');
//const mod = require('./module.js');

import _ from 'lodash';
import mod from './module.js';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['This is called from module =>', mod()], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());