import React from 'react'
import Contents from '../layout/Contents';

import Slider from '../section/Slider';
import Intro from '../section/Intro';
import Member from '../section/Member';
import Port from '../section/Port';
import Youtube from '../section/Youtube';
import Unsplash from '../section/Unsplash';
import Movie from '../section/Movie';


const Home = () => {
  return (
    <>
      <Contents>
          <Slider />
          <Intro />
          <Member />
          <Port  />
          <Youtube  />
          <Unsplash  />
          <Movie  />
      </Contents>
    </>
  )
}

export default Home;