import FavoriteOfferType from './FavoritesType';
import { OfferType } from './OfferType';

type MainProps = {
  offersNumber: number;
  cardsList: OfferType[];
  favoritesList: FavoriteOfferType[];
}

export default MainProps;
