import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes  from './router';
import Store from './redux/store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
          <Routes />
        </Provider>
      </div>
      
    );
  }
}
let state = Store.getState();
console.log(state);
export default App;
