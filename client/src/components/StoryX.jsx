import React from 'react'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'

const StoryX = () => {
    const slideleft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideright = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
  return (
    <div className='relative flex items-center'>
         <MdChevronLeft size={40} onClick={slideleft} className='absolute cursor-pointer top-7'/>
       <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex'>
         <div className='min-w-[100px]'>
         <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" className='w-[90px] h-[90px] inline-block p-2 cursor-pointer rounded-full'/>
         <p className='text-center'>im_ajin</p>
         </div>
         <div className='min-w-[100px]'>
         <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" className='w-[90px] h-[90px] inline-block p-2 cursor-pointer rounded-full'/>
         <p className='text-center'>im_ajin</p>
         </div>
         <div className='min-w-[100px]'>
         <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" className='w-[90px] h-[90px] inline-block p-2 cursor-pointer rounded-full'/>
         <p className='text-center'>im_ajin</p>
         </div>


         <div className='min-w-[100px]'>
         <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" className='w-[90px] h-[90px] inline-block p-2 cursor-pointer rounded-full'/>
         <p className='text-center'>im_ajin</p>
         </div>
         <div className='min-w-[100px]'>
         <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" className='w-[90px] h-[90px] inline-block p-2 cursor-pointer rounded-full'/>
         <p className='text-center'>im_ajin</p>
         </div>
         <div className='min-w-[100px]'>
         <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" className='w-[90px] h-[90px] inline-block p-2 cursor-pointer rounded-full'/>
         <p className='text-center'>im_ajin</p>
         </div>
         <div className='min-w-[100px]'>
         <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="" className='w-[90px] h-[90px] inline-block p-2 cursor-pointer rounded-full'/>
         <p className='text-center'>im_ajin</p>
         </div>
       </div>
       <MdChevronRight size={40} onClick={slideright} className='absolute right-0 cursor-pointer top-7'/>
    </div>
    
  )
}

export default StoryX