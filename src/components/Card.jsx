import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
const Card = ({data,index,trending}) => {
    const imgUrl = useSelector((state) => state.movieData.imageUrl);
  return (
    <Link to={'/'+data.media_type+data.id} className='w-full max-w-[230px] min-w-[235px] h-80 overflow-hidden block hover:scale-105 transition-all rounded-lg relative'>
        <img src={imgUrl + data?.poster_path} alt="" />
        <div className='absolute top-4'>
            {
                trending && (
                    <p className='py-1 px-4 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden'>
                        #{index} {trending} 
                    </p>
                )
            }
        </div>
        <div className="bottom-0 h-16 bg-black/60 p-2 backdrop-blur-3xl w-full absolute ">
            <h1 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h1>
            <div className='text-sm text-neutral-400 flex justify-between items-center'>
                <p >{data.release_date}</p>
                <p className='bg-black rounded-full p-1 text-xs text-white'>Rating: {Number(data.vote_average).toFixed(1)}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card