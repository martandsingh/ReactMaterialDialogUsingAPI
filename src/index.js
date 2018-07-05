import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MyData from './MyData'

ReactDOM.render(<MyData />, document.getElementById('root'));
registerServiceWorker();
