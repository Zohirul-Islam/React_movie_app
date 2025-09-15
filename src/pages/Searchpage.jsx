import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const Searchpage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/collection`, {
        params: {
          query: location?.search?.slice(3),
          page: 1,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
      setTotalpage(response.data.total_pages);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  console.log(location);
  useEffect(() => {
    fetchData();
  }, [location?.search]);
  return (
    <div className="pt-16">
      <div className="container">
        <h3 className="capitalize text-lg lg:text-2xl font-semibold my-3">
          Search results
        </h3>
        {/* card search data */}
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((searchData, index) => (
            <Card
              data={searchData}
              key={searchData.id + "-" + index}
              media_type={searchData.media_type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
