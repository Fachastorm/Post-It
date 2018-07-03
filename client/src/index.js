import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index';

const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
      );

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
