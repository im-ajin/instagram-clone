import { TextInput } from 'flowbite-react'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import Message from '../components/Message';

const Messages = () => {
  return (
    <div className='mt-[80px] pb-[70px]'>
      <div className='p-3'>
        <TextInput id="textsmg" type="email" icon={AiOutlineSearch} placeholder="Search" required />
      </div>
      <div>
        <div className='p-3 flex justify-between'>
          <p className='text-lg cursor-pointer'>Messages</p>
          <p className='text-lg text-blue-700 cursor-pointer'>Requests</p>
        </div>
      </div>
      <div className='p-3 flex flex-col gap-3'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  )
}

export default Messages