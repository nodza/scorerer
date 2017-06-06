import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const PLAYERS = [
    { id: 1, name: 'Bobby Brown', score: 22 },
    { id: 2, name: 'Ricky Bell', score: 34 },
    { id: 3, name: 'Michael Bivins', score: 28 },
    { id: 4, name: 'Ronnie DeVoe', score: 13 },
    { id: 5, name: 'Ralph Tresvant', score: 43 },
    { id: 6, name: 'Johnny Gill', score: 17 },
];

ReactDOM.render(<App initialPlayers={PLAYERS} />, document.getElementById('root'));
registerServiceWorker();
