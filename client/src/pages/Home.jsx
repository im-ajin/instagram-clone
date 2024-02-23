import React from 'react'
import StoryX from '../components/StoryX'
import Posts from '../components/Posts'

const Home = () => {
  return (
    <>
    <div className='mt-[80px]'>
      <StoryX />
    </div>
    <div className='mt-8'><Posts /></div>
    
    </>
  )
}

export default Home