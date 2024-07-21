import { SignIn } from '@clerk/nextjs'
import React from 'react'

const LoginPage = () => {
  return (
    // <div className='flex py-10 md:py-0 flex-col flex-1 justify-center items-center bg-[#64B5F5] min-h-screen'>
    <div className='flex py-10 md:py-0 flex-col flex-1 justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col items-center justify-center space-y-5 text-white'>
                {/* <div className='rounded-full bg-gray-500 p-5'>
                    
                </div> */}

                <div className='text-center'>
                    <h1 className='text-5xl '>Welcome</h1>
                    <h2 className='text-base font-light'>To the world&apos;s best Book Store</h2>
                    <h2 className='text-base font-light'>We are here for you.</h2>
                    <h3 className='my-5 font-bold'>Sign in to get started <span className='font-bold hidden md:inline'>{"->"}</span></h3>
                </div>
            </div>
            <SignIn routing='hash' fallbackRedirectUrl={'/'}/>
        </div>
    </div>
  )
}

export default LoginPage