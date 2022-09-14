import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Rent from './Rent'
import Invite from './Invite'
import Shild from './Shild'

const Main = () => {
  return (
    <div class='flex flex-col overflow-hidden'>
        <Navbar />
        <div class='w-screen h-screen flex flex-col justify-center items-center bg-green-500 text-white text-2xl'>
          <h1 class=''>Sala Bankietowa</h1>
          <h1 class='pb-60'>Hacjenda</h1>
        </div>
        <Hero />
        <Rent />
        <Invite />
        <Shild />
    </div>
  )
}

export default Main