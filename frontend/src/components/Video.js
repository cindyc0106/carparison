import axios from 'axios';
import { useEffect, useState } from "react";
// import { SelectedCarContext } from "../Context/SelectedCarContext";
import { Container } from '@chakra-ui/react';


function Video() {
  // const {
  //   make,
  //   models,
  //   setMake,
  //   setModels,
  //   year,
  //   setYear,
  //   // car,
  //   setCar
  // } = useContext(SelectedCarContext);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=toyota%20corolla&key=`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        let results = [];
        let videosArr = data.items;
        console.log(videosArr[0].id.videoId);
        for (let i = 0; i < 5; i++) {
          results.push(videosArr[i].id.videoId.replace(/"/g, ''));
        }
        setVideos(results);
      });
  }, []);

  console.log(videos)
  return (
    <>
      <h1> video </h1>
      <div className="youtube-container">
        {videos && (
          < Container>
            <iframe id="first-video" width="250" height="150" src={`https://www.youtube.com/embed/${videos[0]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe id="first-video" width="250" height="150" src={`https://www.youtube.com/embed/${videos[1]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe id="first-video" width="250" height="150" src={`https://www.youtube.com/embed/${videos[2]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe id="first-video" width="250" height="150" src={`https://www.youtube.com/embed/${videos[3]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe id="first-video" width="250" height="150" src={`https://www.youtube.com/embed/${videos[4]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Container>
        )}
        {!videos && (
          < Container>
            <iframe id="first-video" width="250" height="150" src="https://www.youtube.com/embed/6iIvuip6ccE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe id="first-video" width="250" height="150" src="https://www.youtube.com/embed/INRncaJ6Dxc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe id="first-video" width="250" height="150" src="https://www.youtube.com/embed/INRncaJ6Dxc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe id="first-video" width="250" height="150" src="https://www.youtube.com/embed/INRncaJ6Dxc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe id="first-video" width="250" height="150" src="https://www.youtube.com/embed/INRncaJ6Dxc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Container>
        )}
          <Container>
            <iframe id="first-video" width="200" height="125" src="https://www.youtube.com/embed/6iIvuip6ccE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Container>
      </div>
    </>
  );
}

export default Video;