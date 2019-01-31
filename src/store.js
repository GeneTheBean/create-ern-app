import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers/';

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : replacement => replacement
  )
);

export default store;
