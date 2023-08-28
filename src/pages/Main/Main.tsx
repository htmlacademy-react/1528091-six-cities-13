import Map from '../../components/Map/Map';
import OffersList from '../../components/Card/CardsList';
import { useEffect, useState } from 'react';
import { OfferCity, OfferType } from '../../utils/types/OfferType';
import { DEFAULT_CITY_LOCATION } from '../../utils/constants';
import CitiesList from '../../components/CitiesList/CitiesList';
import { fetchCity} from '../../redux/actions/offerActions';
import { useAppDispatch } from '../../utils/hooks';
import { StateType } from '../../utils/types/State';
import { useSelector } from 'react-redux';


function Main() {

  const dispatch = useAppDispatch();

  const {offers} = useSelector((state: StateType) => state.offers);

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

  const citiesFullArray = offers.map((item) => item.city.name);

  const citiesArray = Array.from(new Set(citiesFullArray));
  const activeCityOffersList = offers.filter((item) => item.city.name === activeCityName);

  const handleListItemHover = (cardId?: string) => {
    const currentPoint = activeCityOffersList.find((card) => card.id === cardId);
    if(currentPoint) {
      setSelectedPoint(currentPoint);
    }
  };

  const handleCityChoice = (city: string) => {
    setActiveCityName(city);
    dispatch(fetchCity(city));
  };

  const handleActiveCityOffers = () => {
    setActiveCityOffers(activeCityOffersList);
  };

  const handleActiveCityLocation = () => {
    const location = offers.filter((item) => item.city.name === activeCityName)[0].city;
    setActiveCityLocation(location);
  };


  useEffect(() => {
    handleCityChoice(activeCityName);
    handleActiveCityOffers();
    handleActiveCityLocation();
  }, [activeCityName, activeCityLocation]);


  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {citiesArray.map((city) =>
                (
                  <CitiesList
                    key={city}
                    city={city}
                    isActive = {city === activeCityName}
                    onCityClick = {handleCityChoice}
                  />
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
