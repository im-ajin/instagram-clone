import React from 'react'
import { SlOptions } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { BsSave } from "react-icons/bs";
import { TextInput } from 'flowbite-react';
import { CiFaceSmile } from "react-icons/ci";

const Post = () => {
  return (
    <div className='mt-6'>
            <div className='flex items-center justify-between px-3'>
                <div className='flex items-center gap-3'>
                <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" className='h-[40px] w-[40px] rounded-full'/>
                <p>im_ajin</p>
                </div>
                <SlOptions />
            </div>
            <div className='p-3'>
                <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" className='rounded-md'/>
            </div>
            <div className='flex justify-between px-3'>
                <div className='flex gap-4'>
                <CiHeart size={34}/>
                <FaRegComment size={30}/>
                <PiShareFatLight size={30}/>
                </div>
                <BsSave size={27}/>
            </div>
            <div className='p-3'>
                <p>50 likes</p>
                <p className='line-clamp-2'><span className='text-gray-500'>im_ajin</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptatum molestiae harum cupiditate saepe odit, nostrum, consequatur in maxime corporis animi nesciunt laborum commodi! Nobis consequatur labore non impedit ducimus!</p>
            </div>
            <div className='p-3'>
            <TextInput id="comment" type="text" rightIcon={CiFaceSmile} placeholder="Add a Comment..." required />
            </div>
        </div>
  )
}

export default Post