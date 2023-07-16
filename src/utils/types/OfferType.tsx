type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type OfferCity = {
  name: string;
  location: OfferLocation;
}

type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}


export default Offer;
