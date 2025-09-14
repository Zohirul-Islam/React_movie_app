import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Card from "../components/Card";


const Explore = () => {
  const [pageNo,setPageNo] = useState(1);
  const [data,setData] = useState([])
  const [totalPage,setTotalpage] = useState(0)
  const params = useParams();
  const fetchData =async()=>{
    try {
      const response = await axios.get(`/discover/${params.explore}`,{
        params:{
          page:pageNo
        }
      })
      setData((prev)=>{
        return [...prev,...response.data.results]
      })
      setTotalpage(response.data.total_pages)
      
    } catch (error) {
      console.log("error",error.message)
    }
  }
  const handleScroll =()=>{
    if((window.innerHeight + window.scrollY)>=document.body.offsetHeight){
      setPageNo((prev)=>prev+1)
    }
  }
  useEffect(()=>{
    fetchData()
  },[pageNo])
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])
  return (
    <div className="pt-16">
      <div className="container">
        <h3 className="capitalize text-lg lg:text-2xl font-semibold my-3">Popular {params.explore} Shows</h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6">
          {
            data.map((exploreData,index)=>(
              <Card data={exploreData} key={exploreData.id +"explore"}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Explore