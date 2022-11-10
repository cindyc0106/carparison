// import axios from 'axios';
// import { useEffect, useState } from "react";
// // import { SelectedCarContext } from "../Context/SelectedCarContext";
// import { Container } from '@chakra-ui/react';
import './Video.css';


function Video() {

  return (
    <>
      <div className='video-component'>
        <h1 className='video-header'><strong>Hear about the latest car news from our experts!</strong>  </h1>
        <br></br>
        <div className='video-container'>
          <iframe id="video-main" src="https://www.youtube.com/embed/6iIvuip6ccE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className='video-second'>
            <iframe id="video" src="https://www.youtube.com/embed/INRncaJ6Dxc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe id="video" src="https://www.youtube.com/embed/ENuhxcbIh-k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='video-third'>
            <iframe id="video" src="https://www.youtube.com/embed/feD4svrFbWo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe id="video" src="https://www.youtube.com/embed/kpvfa6YFkgM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;