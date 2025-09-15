import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Explore = () => {
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPage, setTotalpage] = useState(0);
  const params = useParams();

  const fetchData = async (page = 1) => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: { page },
      });

      setData((prev) =>
        page === 1
          ? response.data.results
          : [...prev, ...response.data.results]
      );

      setTotalpage(response.data.total_pages);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  // Fetch when pageNo changes
  useEffect(() => {
    fetchData(pageNo);
  }, [pageNo, params.explore]);

  // Reset when explore type changes
  useEffect(() => {
    setPageNo(1);
    setData([]);
  }, [params.explore]);

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100 &&
        pageNo < totalPage
      ) {
        setPageNo((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageNo, totalPage]);

  return (
    <div className="py-16">
      <div className="container">
        <h3 className="capitalize text-lg lg:text-2xl font-semibold my-3">
          Popular {params.explore} Shows
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((exploreData) => (
            <Card
              data={exploreData}
              key={exploreData.id}
              media_type={params.explore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;

