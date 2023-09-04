import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>Profile</h1>
        <hr />
        <p className='mt-2'>Profile page <span className='p-2 rounded bg-blue-500 text-white ml-2'>{params.id}</span></p>
    </div>
  )
}

export default UserProfile