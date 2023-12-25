import React from 'react'

import '../../App.css'

import LeftSidebar from '../../components/LeftSidebar/leftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

const Home = () => {
  return (
    
    <div>
    <div className='home-container-1'>
     <LeftSidebar />
    
     
      <div className='home-container-2'>


        <HomeMainbar />
        <RightSidebar />

      </div>
        </div>
    </div>
    
  )
}

export default Home