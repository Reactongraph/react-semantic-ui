import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import ProjectRouter from './routes';

ReactDOM.render(<ProjectRouter />, document.getElementById('root'));
serviceWorker.unregister();
