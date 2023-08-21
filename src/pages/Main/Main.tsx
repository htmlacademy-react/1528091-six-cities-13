import Map from '../../components/Map/Map';
import OffersList from '../../components/Card/CardsList';
import { useEffect, useState } from 'react';
import { OfferCity, OfferType } from '../../utils/types/OfferType';
import dataObjType from '../../utils/types/DataObjectType';
import { DEFAULT_CITY_LOCATION } from '../../utils/constants';

type MainPropsType = {
  cardsList: dataObjType;
}

function Main(props: MainPropsType) {

  const {cardsList} = props;
  const [selectedPoint, setSelectedPoint] = useState<OfferType | undefined>(
    undefined
  );
  const [activeCityName, setActiveCityName] = useState('Paris');
  const [activeCityOffers, setActiveCityOffers] = useState<OfferType[]>(
    []
  );
  const [activeCityLocation, setActiveCityLocation] = useState<OfferCity>(
    DEFAULT_CITY_LOCATION
  );

  const handleListItemHover = (cardId: string) => {

    let currentPoint: OfferType;
    for (const value of Object.values(cardsList)) {

      currentPoint = value.find((card) => card.id === cardId);
      if(currentPoint) {
        setSelectedPoint(currentPoint);
      }

    }
  };


  const handleCityChoice = (city: string) => {
    const offersArray = Object.entries(cardsList);
    offersArray.forEach(([key, value]) => {
      setActiveCityName(city);
      if (key === activeCityName) {
        setActiveCityOffers(value);
        setActiveCityLocation(value[0]['city']);
      }
    });
  };

  useEffect(() => {
    handleCityChoice(activeCityName);
  }, [activeCityName, activeCityLocation]);


  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.keys(cardsList).map((city) =>
                (
                  <li key = {city} className="locations__item">
                    <a className={`locations__item-link tabs__item ${city === activeCityName ? 'tabs__item--active' : ''}`}
                      href="#" onClick={() => handleCityChoice(city)}
                    >
                      <span>{city}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeCityOffers.length} places to stay in {activeCityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList cardsList = {activeCityOffers} onCardHover={handleListItemHover}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city = {activeCityLocation} points={activeCityOffers} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
