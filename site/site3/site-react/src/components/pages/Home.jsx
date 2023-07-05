import React from 'react';
import Main from '../layout/Main';
import SliderSection from '../section/SliderSection';
import IntroSection from '../section/IntroSection';
import MemberSection from '../section/MemberSection';
import PortSection from '../section/PortSection';
import YoutubeSection from '../section/YoutubeSection';
import UnsplashSection from '../section/UnsplashSection';
import MovieSection from '../section/MovieSection';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={'slider__wrap section tmoney300'} />
        <IntroSection attr={'intro__wrap section bg-blue tmoney300'} />
        <MemberSection attr={'member__wrap section center tmoney300'} />
        <PortSection attr={'port__wrap section center bg-blue tmoney300'} />
        <YoutubeSection attr={'youtube__wrap section tmoney300'} />
        <UnsplashSection attr={'unsplash__wrap tmoney300'} />
        <MovieSection attr={'movie__wrap section tmoney300'} />
      </Main>
    </>
  );
}

export default Home;
