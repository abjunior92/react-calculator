import React from "react";
import Calculator from "./components/Calculator"
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  document.getElementById("root")
);
