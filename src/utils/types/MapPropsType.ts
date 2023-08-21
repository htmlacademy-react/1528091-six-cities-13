import { OfferCity, OfferType } from './OfferType';


type Point = {
  id: string;
  lat: number;
  lng: number;
};

type MapProps = {
  city: OfferCity;
  points: OfferType[];
  selectedPoint: OfferType | undefined;
};


export type {MapProps, Point};
