import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import cardsList from './mockData/cardData';
import favoritesList from './mockData/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersNumber={600} cardsList = {cardsList} favoritesList = {favoritesList}/>
  </React.StrictMode>
);
