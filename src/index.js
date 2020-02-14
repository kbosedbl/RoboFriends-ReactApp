import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import CardList from './CardList';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {robots} from './robots';

ReactDOM.render(<App /> , document.getElementById('root'));


serviceWorker.unregister();
