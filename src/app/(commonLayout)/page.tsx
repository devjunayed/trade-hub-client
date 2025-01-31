import React from 'react'
import Banner from './components/Banner/Banner'
import BannerBottomCategory from './components/BannerBottomCategory/BannerBottomCategory'
import NewArrival from './components/NewArrival/NewArrival'
import { getProducts } from '@/actions/getProducts'
import { TProduct } from '@/types'
import BestSelling from './components/BestSelling/BestSelling'
import BrowseByCategory from './components/FeaturedProducts/FeaturedProducts'

const HomePage = async() => {
  const { data: products }: { data: TProduct[] } = await getProducts();

  return (
    <div>
      <Banner />
      <BannerBottomCategory />
      <NewArrival products={products}/>
      <BestSelling products={products}/>
      <BrowseByCategory products={products}/>
    </div>
  )
}

export default HomePage
