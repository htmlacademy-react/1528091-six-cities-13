import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../../pages/Main/Main';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
import Login from '../../pages/Login/Login';
import Favorites from '../../pages/Favorites/Favorites';
import Offer from '../../pages/Offer/Offer';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import favoritesList from '../../mockData/favorites';
import {OfferType} from '../../utils/types/OfferType';
import dataObjType from '../../utils/types/DataObjectType';
import cardsMockList from '../../mockData/cardData';


function App() {


  const cardsList = cardsMockList;
  const cardsListObject:dataObjType = {
    Paris: [],
    Cologne: [],
    Brussels:[],
    Amsterdam:[],
    Hamburg:[],
    Dusseldorf:[]
  };

  const favoritesObject: dataObjType = {
    Paris: [],
    Cologne: [],
    Brussels:[],
    Amsterdam:[],
    Hamburg:[],
    Dusseldorf:[]
  };

  // const [mainCardsListObject, setMainCardsListObject] = useState[cardsListObject];
  // const [favoritesListObject, setfavoritesListObject] = useState[favoritesObject];


  const createOfferDataObject = (array: OfferType[], object: dataObjType) => {
    for (const [key, value] of Object.entries(object)) {

      array.forEach((item) => {
        if((item.city.name) === key) {
          value.push(item);
        }
      });

    }
  };

  const createFavoritesDataObject = (array: OfferType[], object: dataObjType) => {
    for (const [key, value] of Object.entries(object)) {

      array.forEach((item) => {
        if((item.city.name) === key && item.isFavorite) {
          value.push(item);
        }
      });

    }
  };

  createOfferDataObject(cardsList, cardsListObject);
  createFavoritesDataObject(favoritesList, favoritesObject);


  return (
    <BrowserRouter>
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route index element={<Main/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/offer/:id' element={<Offer/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/favorites' element={
            <PrivateRoute>
              <Favorites list = {favoritesObject} />
            </PrivateRoute>
          }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
