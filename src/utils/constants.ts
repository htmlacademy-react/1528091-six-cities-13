export const ratingMap = [
  {score: 5, title: 'perfect'},
  {score: 4, title: 'good'},
  {score: 3, title: 'not bad'},
  {score: 2, title: 'badly'},
  {score: 1, title: 'terribly'},
];

export const COMMENT_MAX_LENGTH = 50;

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const DEFAULT_CITY_LOCATION = {
  'name': 'Paris',
  'location': {
    'latitude': 48.85661,
    'longitude': 2.351499,
    'zoom': 13
  }
};

export enum Cityname {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}


export enum NameSpace {
  Offers = 'Offers',
  Offer = 'Offer',
  Favorites = 'Favorites',
  NearPlaces = 'NearPlaces',
  Reviews = 'Reviews',
  User = 'User',
  City = 'City'
}


