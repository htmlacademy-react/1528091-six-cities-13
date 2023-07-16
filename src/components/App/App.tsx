import React from 'react';
import Main from '../../pages/Main/Main';
import MainProps from '../../utils/types/MainType';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function App(props: MainProps) {
  return (
    <>
      <Header/>
      <Main offersNumber={props.offersNumber}/>
      <Footer/>
    </>
  );
}

export default App;
