
import { IoCloseSharp } from "react-icons/io5";
import useFetchDetails from "../hooks/useFetchDetails";
const VideoPlay = ({data,close,media_type}) => {
    const {data:videoData} = useFetchDetails(`/${media_type}/${data.id}/videos`)
    console.log("data",videoData)
  return (
    <section className="fixed bg-neutral-700 top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center">
        <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded  relative ">
            <button className="absolute -right-1 -top-6 text-3xl z-5 cursor-pointer text-white" onClick={close}><IoCloseSharp /></button>
            <iframe
              src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
              className="w-full h-full"
            />
        </div>
    </section>
  )
}

export default VideoPlay