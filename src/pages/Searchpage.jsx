import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Searchpage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [totalPage, setTotalpage] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const fetchData = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams(location.search);
      const searchQuery = queryParams.get("q") || "";

      const response = await axios.get(`/search/multi`, {
        params: {
          query: searchQuery,
          page: 1,
        },
      });

      setData(response.data.results);
      setTotalpage(response.data.total_pages);
    } catch (error) {
      console.log("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location.search]);

  return (
    <div className="py-16">
      <div className="lg:hidden w-full my-3 px-3 sticky top-[70px] z-30">
        <input  className="bg-white text-neutral-800 border px-4 py-1 w-full text-lg rounded-full" type="text" placeholder="search here.." onChange={(e)=>navigate(`/search?q=${search}`)}  />
      </div>
      <div className="container">
        <h3 className="capitalize text-lg lg:text-2xl font-semibold my-3">
          Search results
        </h3>

        {loading ? (
          <p>Loading...</p>
        ) : data.length === 0 ? (
          <p>No results found</p>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
            {data.map((searchData, index) => (
              <Card
                data={searchData}
                key={`${searchData.id}-${index}`}
                media_type={searchData.media_type}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchpage;

