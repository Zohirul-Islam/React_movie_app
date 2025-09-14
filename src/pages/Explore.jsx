import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


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
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>Explore</div>
  )
}

export default Explore