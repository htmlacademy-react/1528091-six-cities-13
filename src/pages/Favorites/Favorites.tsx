import React from 'react';
import Footer from '../../components/Footer/Footer';
import FavoriteOfferType from '../../utils/types/FavoritesType';
import { v4 as uuidv4 } from 'uuid';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';

type List = {
  list: FavoriteOfferType[];
}

type dataObj = {
  'Paris': FavoriteOfferType[];
  'Cologne': FavoriteOfferType[];
  'Brussels':FavoriteOfferType[];
  'Amsterdam':FavoriteOfferType[];
  'Hamburg':FavoriteOfferType[];
}

function Favorites(props: List) {
  const favoritesList = props.list;
  const dataObject:dataObj = {
    Paris: [],
    Cologne: [],
    Brussels:[],
    Amsterdam:[],
    Hamburg:[]
  };

  const createDataObject = (array: FavoriteOfferType[]) => {
    for (const [key, value] of Object.entries(dataObject)) {

      array.forEach((item) => {
        if((item.city.name) === key && item.isFavorite) {
          value.push(item);
        }
      });

    }
  };

  createDataObject(favoritesList);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(dataObject).map((entry) =>
              entry[1].length > 0 ?
                <li key = {uuidv4()} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{entry[0]}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">

                    {entry[1].map((favoriteItem) => favoriteItem.isFavorite && favoriteItem.city.name === entry[0] ?
                      <FavoriteCard key={favoriteItem.id} {...favoriteItem}/> :
                      null)}
                  </div>
                </li>
                :
                null
            )}
          </ul>
        </section>
      </div>
      <Footer/>
    </main>
  );
}

export default Favorites;
