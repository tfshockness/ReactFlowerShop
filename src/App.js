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
console.log(Store.getState(), "App.js line 18");

export default App;
