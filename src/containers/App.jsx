import React from 'react';
import Header from '../components/Header.jsx';
import Search from '../components/Search.jsx';
import Categories from '../components/Categories.jsx';
import CarouselItem from '../components/CarouselItem.jsx';
import Carousel from '../components/Carousel.jsx';
import Footer from '../components/Footer.jsx';
import useInitialState from '../hooks/useInitialState.js';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initIalState';

const App = () => {
  const initialState = useInitialState(API);
  console.log(initialState);

  return (
    <div className='App'>
      <Header />
      <Search />

      {
        initialState.mylist.length > 0 &&
        (
          <Categories title='Mi lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))
          }
        </Carousel>
      </Categories>

      <Categories title='Videos originales'>
        <Carousel>
          {
            initialState.originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))
          }z
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
