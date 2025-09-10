import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import Horizontalcard from "../components/Horizontalcard";
import { useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";
const Home = () => {
  const trendingdData = useSelector((state) => state.movieData.bannerData);
  const {data:nowPlayingData} = useFetch('/movie/now_playing')
  const {data:topRated} = useFetch('/movie/top_rated')
  const {data:popular} = useFetch('/tv/popular')
  const {data:onAirData} = useFetch('/tv/on_the_air')
  return (
    <div>
      <BannerHome />
      <Horizontalcard data={trendingdData} heading={"Trending Show"} />
      <Horizontalcard data={nowPlayingData} heading={"Playing Now"} />
      <Horizontalcard data={topRated} heading={"Top Rated"} />
      <Horizontalcard data={popular} heading={"Popular Tv Series"} />
      <Horizontalcard data={onAirData} heading={"On The Air"} />
    </div>
  );
};

export default Home;
