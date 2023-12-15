import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <><h2 className='center p-2'>Welcome to my Portfolio</h2>
    <div className='flex flex-center p-2'>
      <h3 className='main-links'>
        <Link to="/Projects">Projects</Link>
      </h3>
      <h3 className='main-links'>
        <Link to="/Contact">Contact</Link>
      </h3>
    </div>
    </>
  )
}

export default Home