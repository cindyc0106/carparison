import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { SelectedCarContext } from "../Context/SelectedCarContext";


function Video() {
  const {
    // make,
    // models,
    // setMake,
    // setModels,
    // year,
    // setYear,
    // // car,
    // setCar
  } = useContext(SelectedCarContext);


  useEffect(() => {
    axios
      .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=toyota%20corolla&key=`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        let videos = data.items
        console.log(videos)
      })
  });


  return (
    <>
      <h1> video </h1>
    </>
  );
}

export default Video;