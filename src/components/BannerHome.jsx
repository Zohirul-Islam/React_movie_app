
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { useEffect, useState } from "react";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imgUrl = useSelector((state) => state.movieData.imageUrl);
  const [currentImage,setCurrentImage] = useState(0)
  const handleNext =()=>{
    if(currentImage < bannerData.length - 1){
      setCurrentImage(prev=>prev +1)
    }
  }
    const handlePrevious =()=>{
        if(currentImage > 0){
      setCurrentImage(prev=>prev -1)
    }
  }
  useEffect(()=>{
      const interval = setInterval(()=>{
        if(currentImage < bannerData.length - 1){
          handleNext()
        }else{
          setCurrentImage(0)
        }
            
      },4000)
      return ()=>{
        clearInterval(interval)
      }
  },[bannerData,imgUrl])
  
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[90vh] overflow-hidden">
        {bannerData.map((data, index) => {
          
          return (
            <div className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all" style={{transform:`translateX(-${currentImage * 100}%)`}}>
              <div className="w-full h-full">
                <img
                  className=" h-full w-full object-cover"
                  src={imgUrl + data.backdrop_path}
                  alt=""
                />
              </div>
              {/* next button and previous btn */}
                <div className="absolute top-0 w-full h-full hidden items-center justify-between px-[3%] group-hover:lg:flex">
                  <button onClick={handlePrevious} className="bg-white p-2 rounded-full text-2xl z-10 text-black cursor-pointer">
                    <ChevronLeft/>
                  </button>
                    <button onClick={handleNext} className="bg-white p-2 rounded-full text-2xl z-10 text-black cursor-pointer">
                    <ChevronRight/>
                  </button>
                </div>
              <div className="absolute top-0 h-full w-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container">
                <div className="absolute bottom-0 max-w-md px-4">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">{data?.title || data?.name }</h2>
                  <p className="my-2 text-ellipsis line-clamp-3">{data.overview}</p>
                  <div className="flex items-center gap-4">
                    <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>View: {Number(data.popularity).toFixed(0)}</p>
                  </div>
                  <button className="px-4 py-2 bg-white text-black font-bold rounded mt-3">Play Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
