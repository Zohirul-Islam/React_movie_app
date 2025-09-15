import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";

const Details = () => {
  const params = useParams();
  const imgUrl = useSelector((state) => state.movieData.imageUrl);
  console.log(params);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  console.log("data", data);
  console.log("star cast", castData);

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
      <div className="container px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-10">
        <div className=" relative mx-auto mt-15 lg:-mt-28 lg:mx-0 w-fit">
          <img
            className="h-full w-full sm:h-120 sm:w-80 object-cover rounded"
            src={imgUrl + data?.poster_path}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl text-white sm:text-3xl font-bold">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400 text-lg">{data?.tagline}</p>
          <div className="flex items-center my-3 gap-3">
            <p>Rating: {Number(data?.vote_average).toFixed(1)}</p>
            <p>View: {Number(data?.vote_count)}</p>
            <p></p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white my-1">Overview</h3>
            <p className="max-w-2xl">{data?.overview}</p>
            <div>
              <p className="font-bold capitalize text-2xl">status: <span className="text-xl">{data?.status}</span></p>
              <span>|</span>
              <p>Release Date: {data?.release_date}</p>
              <span>|</span>
              <p>Revenue: {data?.release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
