import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/style.css';
import './css/route.css'
import './css/index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('body'));
registerServiceWorker();
