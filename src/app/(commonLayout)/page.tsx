import React from 'react'
import Banner from './components/Banner/Banner'
import BannerBottomCategory from './components/BannerBottomCategory/BannerBottomCategory'
import NewArrival from './components/NewArrival/NewArrival'

const HomePage = () => {
  return (
    <div>
      <Banner />
      <BannerBottomCategory />
      <NewArrival />
    </div>
  )
}

export default HomePage
