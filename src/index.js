import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/normalize.css/normalize.css';
import 'index.css';

import ReactPlayground from 'main/ReactPlayground';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactPlayground />, document.getElementById('root'));

registerServiceWorker();
