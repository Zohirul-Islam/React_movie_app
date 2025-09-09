import React from 'react'
import { useSelector } from 'react-redux';

const Card = ({data,index,trending}) => {
    const imgUrl = useSelector((state) => state.movieData.imageUrl);
  return (
    <div className='w-full sm:max-w-[230px] h-80 overflow-hidden rounded-lg relative'>
        <img src={imgUrl + data?.poster_path} alt="" />
        <div className='absolute top-4'>
            {
                trending && (
                    <p className='py-1 px-4 bg-black backdrop-blur-3xl rounded-r-full'>
                        #{index} Trending
                    </p>
                )
            }
        </div>
    </div>
  )
}

export default Card