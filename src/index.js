import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import allReducers from './Redux/Reducers/IndexReducers'
// Css (Template)
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './scss/react.scss';
// Css
import './Css/index.css';

// Extension reduxdevtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//Store redux
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>,
  </BrowserRouter>,
  document.getElementById('root')
);