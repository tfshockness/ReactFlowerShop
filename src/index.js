import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './redux/store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

console.log(Store.getState());