import React from "react";
//import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
//import { history } from "./routers/AppRouter";
import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/es/integration/react";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'antd/dist/antd.css'; 


const store = configureStore();

function App() {
  return (
  <Provider store={store}>
    <AppRouter />
  </Provider>
  )
}

export default App;
