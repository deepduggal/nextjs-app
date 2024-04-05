import React from 'react'
import UserProfile from '../components/UserProfile'
import Header from '../components/Header';

const userData = {name: 'Michael Faraday', biography: 'English scientist who contributed to the study of electromagnetism and electrochemistry.', hobbies: ['chemistry', 'physics', 'biology']};

export default function Page() {
  return (
    <>
      <Header/>
      <main className='flex min-h-screen flex-col justify-between p-24'>
        <UserProfile name={userData.name} biography={userData.biography} hobbies={userData.hobbies} />
      </main>
    </>
  )
}
