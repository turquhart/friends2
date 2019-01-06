/*React library allows JSX*/
import React from 'react';
//ReactDom allows rendering to a browser
import ReactDOM from 'react-dom';

/*import CSS file*/
import './index.css';
//import App parent app
import App from './App';
//tachyons is a library I need to install and import - it allows for shortcuts in element formatting - I use it in the Card.js file.
import 'tachyons';

import * as serviceWorker from './serviceWorker';

//rendering App
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
