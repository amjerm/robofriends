import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import { searchRobots } from './reducers';
import './index.css';
import 'tachyons'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(searchRobots);

ReactDOM.render(
    <Provider store={store}>
        <App store={store} />    
    </Provider>
,document.getElementById('root'));
registerServiceWorker();