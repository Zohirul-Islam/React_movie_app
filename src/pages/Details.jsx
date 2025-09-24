import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import Divider from "../components/Divider";
import useFetch from "../hooks/useFetch";
import Horizontalcard from "../components/Horizontalcard";
import { useState } from "react";
import VideoPlay from "../components/VideoPlay";

const Details = () => {
  const params = useParams();
  const imgUrl = useSelector((state) => state.movieData.imageUrl);
  
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const {data:similarData} = useFetch(`/${params?.explore}/${params?.id}/similar`)
  const {data:recomendationData} = useFetch(`/${params?.explore}/${params?.id}/recommendations`)
  const [playVideo,setPlayVideo] = useState(false);
  const [playVideoId,setPlayVideoId] = useState('');
  const handlePlayVideo =(data)=>{
    setPlayVideoId(data);
    setPlayVideo(true)
  }

  return (
    <div>
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={imgUrl + data?.backdrop_path}
            alt=""
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>
      <div className="container px-3 py-0 sm:py-16 flex flex-col lg:flex-row gap-10">
        <div className=" relative mx-auto mt-15 lg:-mt-28 lg:mx-0 w-fit">
          <img
            className="h-full w-full sm:h-120 sm:w-80 object-cover rounded"
            src={imgUrl + data?.poster_path}
            alt=""
          />
          <button onClick={()=>handlePlayVideo(data)} className="px-4 py-2 w-full mt-3 text-center bg-white text-black rounded font-bold cursor-pointer text-lg hover:bg-amber-700">Play Now</button>
        </div>
        <div>
          <h2 className="text-2xl text-white sm:text-3xl font-bold">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400 text-lg">{data?.tagline}</p>
          <Divider/>
          <div className="flex items-center my-3 gap-3">
            <p>Rating: {Number(data?.vote_average).toFixed(1)}</p>
            <p>View: {Number(data?.vote_count)}</p>
            <p></p>
          </div>
          <Divider/>
          <div>
            <h3 className="text-xl font-bold text-white my-1">Overview</h3>
            <p className="max-w-2xl">{data?.overview}</p>
            <Divider/>
            <div className="flex items-center gap-4 my-4">
              <p className="">Status: <span className="text-xl">{data?.status}</span></p>
              <span>|</span>
              <p>Release Date: {data?.release_date}</p>
              <span>|</span>
              <p>Revenue: {data?.release_date}</p>
            </div>
            <Divider/>
          </div>
          <div>
            <p><span className="text-white">Director</span>: {castData?.crew[0]?.name}</p>
          </div>
          <Divider/>
          <h2 className="font-bold text-lg my-2">Cast: </h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
            {
              castData?.cast?.filter(el=>el?.profile_path).map((cast,index)=>{
                return (
                  <div key={index}>
                      <div>
                          <img className="w-24 h-24 object-cover rounded-full" src={imgUrl + cast?.profile_path} alt="" />
                      </div>
                      <p className="font-bold text-center text-sm text-neutral-400">{cast?.original_name}</p>
                  </div>
                )
              })
             
            }
          </div>
        </div>
        

      </div>
      <div>
        <Horizontalcard data={similarData} heading={"Similar " + params?.explore} media_type={params?.explore}/>
        <Horizontalcard data={recomendationData} heading={"recomendation " + params?.explore} media_type={params?.explore}/>
      </div>
      {
        playVideo && (
            <VideoPlay media_type ={params?.explore} data ={playVideoId} close ={()=>setPlayVideo(false)}/>
        )
      }
      
    </div>
  );
};

export default Details;
