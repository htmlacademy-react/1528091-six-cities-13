import FavoriteOfferType from './FavoritesType';
import Offer from './OfferType';

type MainProps = {
  offersNumber: number;
  cardsList: Offer[];
  favoritesList: FavoriteOfferType[];
}

export default MainProps;
