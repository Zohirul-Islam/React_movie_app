import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";

const Home = () => {
  const trendingdData = useSelector((state) => state.movieData.bannerData);
  
  return (
    <div>
      <BannerHome />
      <div className="container  my-40">
        <h2 className="text-xl sm:text-2xl font-bold my-4">Trending Now</h2>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6">
          {trendingdData.map((data,index) => {
          return <Card key={data.id} data={data} index ={index+1} trending={true}/>;
        })}
        </div>

      </div>
    </div>
  );
};

export default Home;
