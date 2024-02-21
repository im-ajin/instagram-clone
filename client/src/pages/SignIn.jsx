import React from 'react'
import { TextInput, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-[400px]'>
        <div className='border mt-2'>
        <div className='mt-10 flex flex-col items-center'>
            <h1 className='text-3xl text-center'>Instagram</h1>
            <form className='mt-10 w-[300px] flex flex-col items-center border-b gap-3'>
              <TextInput placeholder='Phone number, username, or email' className='w-full'/>
              <TextInput placeholder='Password' type='password' className='w-full'/>
              <Button className='w-full bg-blue-500'>Log in</Button>
              <h3 className='relative -bottom-3 bg-white w-20 text-center'>OR</h3>
            </form>
        </div>
        <div className='mt-10 text-center'>
           <p className='text-blue-900 text-l'>Log in with Facebook</p>
           <p className='mt-5 mb-5'>Forget password?</p>
        </div>
        </div>
        <div className='border mt-3 text-center pt-5 pb-5'>
          <Link to='/signup'>Dont't have an account?<span className='text-blue-500'>Sign up</span></Link>
        </div>
    </div>
    </div>
  )
}

export default SignIn