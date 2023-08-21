import { OfferType } from '../../utils/types/OfferType';
import Card from './Card';


type CardsList = {
  cardsList: OfferType[];
  onCardHover: (cardId?: string) => void;
}

function OffersList(props:CardsList) {
  const {cardsList, onCardHover} = props;


  return (
    <div className="cities__places-list places__list tabs__content" >
      {cardsList.map((card) => (
        <Card key = {card.id} card = {card} onHover={onCardHover}/>
      ))}
    </div>
  );
}

export default OffersList;
