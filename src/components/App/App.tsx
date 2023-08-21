import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../../pages/Main/Main';
import MainProps from '../../utils/types/MainType';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
import Login from '../../pages/Login/Login';
import Favorites from '../../pages/Favorites/Favorites';
import Offer from '../../pages/Offer/Offer';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import {OfferType} from '../../utils/types/OfferType';
import dataObjType from '../../utils/types/DataObjectType';


function App(props: MainProps) {


  const {cardsList, favoritesList} = props;

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
          <Route index element={<Main cardsList = {cardsListObject}/>} />
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
