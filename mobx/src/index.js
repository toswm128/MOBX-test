import React from 'react';
import ReactDOM from 'react-dom';
import App from './Screen/App';
import {StoreProvider} from "./state/context"
import {RootStore} from "./state/RootStore"

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={rootStore} >
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

