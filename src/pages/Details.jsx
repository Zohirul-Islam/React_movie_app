import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";


const Details = () => {
  const params = useParams();
  const {data} = useFetch(`/${params?.explore}/${params?.id}`)
  console.log('details data',data);
  return (
    <div>Details</div>
  )
}

export default Details