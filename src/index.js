import React from 'react';
import ReactDOM from 'react-dom'; // tylko tutaj importujemy ReactDOM
import App from './components/App';

ReactDOM.render(
    <App />, // główny komponent aplikacji
    document.querySelector('#root') // wskazujemy kontener, w jakim chcemy osadzić aplikację
);