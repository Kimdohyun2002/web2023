import React from 'react';
import Contents from '../layout/Contents';
import YoutubeCont from '../youtube/YoutubeCont';
import YoutubeSlider from '../youtube/YoutubeSlider';

function Youtube() {
  return (
    <>
      <Contents>
        <YoutubeSlider />
        <YoutubeCont />
      </Contents>
    </>
  );
}

export default Youtube;
