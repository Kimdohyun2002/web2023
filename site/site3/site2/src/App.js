import React from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Main from './components/layout/Main.jsx';
import SliderSection from './components/section/SliderSection.jsx';
import IntroSection from './components/section/IntroSection.jsx';
import MemberSection from './components/section/MemberSection.jsx';
import PortSection from './components/section/PortSection.jsx';
import YoutubeSection from './components/section/YoutubeSection.jsx';
import UnsplashSection from './components/section/UnsplashSection.jsx';
import MovieSection from './components/section/MovieSection.jsx';

function App() {
  return (
    <>
      <Header attr={['header__wrap', 'tmoney300', 'bg-blue']} />
      <Main>
        <SliderSection attr={'slider__wrap section tmoney300'} />
        <IntroSection attr={'intro__wrap section bg-blue tmoney300'} />
        <MemberSection attr={'member__wrap section center tmoney300'} />
        <PortSection attr={'port__wrap section center bg-blue tmoney300'} />
        <YoutubeSection attr={'youtube__wrap section tmoney300'} />
        <UnsplashSection attr={'unsplash__wrap tmoney300'} />
        <MovieSection attr={'movie__wrap section tmoney300'} />
      </Main>
      <Footer attr={'footer__wrap tmoney300'} />
    </>
  );
}

export default App;
