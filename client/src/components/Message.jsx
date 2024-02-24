import React from 'react'
import { CiCamera } from "react-icons/ci";

const Message = () => {
  return (
    <div className='flex items-center gap-4'>
        <div>
            <img src="https://pub-static.fotor.com/assets/projects/pages/7252c2b86395453a836cdd57b13b3d39/600w/fotor-7c742084acd7491aae9923279bdc3218.jpg" height={60} width={60} className='rounded-full min-h-[60px] min-w-[60px]'/>
        </div>
        <div>
            <p>AJIN</p>
            <p className='line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt error nobis deserunt doloremque voluptate vel doloribus necessitatibus cumque labore numquam iste illo deleniti quas hic officiis, mollitia quidem nisi aliquam.</p>
        </div>
        <div>
        <CiCamera size={30}/>
        </div>
    </div>
  )
}

export default Message