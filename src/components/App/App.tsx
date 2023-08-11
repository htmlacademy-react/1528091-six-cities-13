import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../../pages/Main/Main';
import MainProps from '../../utils/types/MainType';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
import Login from '../../pages/Login/Login';
import Favorites from '../../pages/Favorites/Favorites';
import Offer from '../../pages/Offer/Offer';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import PrivateRoute from '../Private-route/Private-route';


function App(props: MainProps) {
  return (
    <BrowserRouter>
      <>
        <Header/>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route index element={<Main offersNumber={props.offersNumber}/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/offer/:id' element={<Offer/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/favorites' element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;