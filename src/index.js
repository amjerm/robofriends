import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import 'tachyons'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, document.getElementById('root'));
registerServiceWorker();
