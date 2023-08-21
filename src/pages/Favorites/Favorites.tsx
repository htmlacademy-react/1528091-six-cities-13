import Footer from '../../components/Footer/Footer';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import dataObjType from '../../utils/types/DataObjectType';

type List = {
  list: dataObjType;
}

function Favorites(props: List) {
  const favoritesList = props.list;

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(favoritesList).map(([city, favoriteOffersList]) =>
              favoriteOffersList.length > 0 &&
                <li key = {city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">

                    {favoriteOffersList.length > 0 && favoriteOffersList.map((favoriteItem) =>
                      <FavoriteCard key = {Date.now()} {...favoriteItem}/>)}
                  </div>
                </li>
            )}
          </ul>
        </section>
      </div>
      <Footer/>
    </main>
  );
}

export default Favorites;
