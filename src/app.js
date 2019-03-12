document.querySelector('title').innerHTML = 'DEVELOPMENT MODE';
let container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

import React from 'react';
import ReactDOM from 'react-dom';
import {CounterParent} from './components/CounterParent.jsx';

ReactDOM.render(
  <div>
    <CounterParent/>
  </div>,
  document.querySelector('#container')
)
