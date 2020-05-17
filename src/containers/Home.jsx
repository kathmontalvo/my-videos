import React from 'react';
import Search from '../components/Search.jsx';
import Categories from '../components/Categories.jsx';
import CarouselItem from '../components/CarouselItem.jsx';
import Carousel from '../components/Carousel.jsx';
import useInitialState from '../hooks/useInitialState.js';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initIalState';

const Home = () => {
  const initialState = useInitialState(API);
  console.log(initialState);

  return (
    <>
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

    </>
  );
};

export default Home;
