import { MouseEventHandler } from 'react';

type CitiesListPropsTYpe = {
  city: string;
  isActive: boolean;
  onCityClick: (city: string) => void;
}
type handleEventType = MouseEventHandler<HTMLElement>
function CitiesList({city, onCityClick, isActive}: CitiesListPropsTYpe) {

  const addActiveCity: handleEventType = (event) => {
    event.preventDefault();
    onCityClick(event.currentTarget.innerText);
  };


  return (
    <li key = {city} className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        href="#" onClick={addActiveCity}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CitiesList;
