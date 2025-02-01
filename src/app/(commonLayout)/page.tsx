import React from 'react'
import Banner from './components/Banner/Banner'
import BannerBottomCategory from './components/BannerBottomCategory/BannerBottomCategory'
import NewArrival from './components/NewArrival/NewArrival'
import { getProducts } from '@/actions/getProducts'
import { TProduct } from '@/types'
import BestSelling from './components/BestSelling/BestSelling'
import BrowseByCategory from './components/FeaturedProducts/FeaturedProducts'

const HomePage = async () => {
  const { data: products }: { data: TProduct[] } = await getProducts();

  return (
    <div>
      <Banner />
      <BannerBottomCategory />
      {products.length > 0 &&
        <NewArrival products={products} />
      }
      {products.length > 0 &&
        <BestSelling products={products} />
      }
      {
        products.length > 0 &&
        <BrowseByCategory products={products} />
      }
    </div>
  )
}

export default HomePage
