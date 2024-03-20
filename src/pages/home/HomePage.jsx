// import React from 'react'
import { useContext } from 'react'
import Category from '../../components/category/Category'
import Footer from '../../components/footer/Footer'
import HeroSection from '../../components/herosection/HeroSection'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Layout from '../../components/layout/Layout'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'
import myContext from '../../context/MyContext'
import Loader from '../../components/loader/Loader'

function HomePage() {
  // const name = useContext(myContext);
  // const context = useContext(myContext)
  // const name = context
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
      <Loader/>
      {/* <h1>
        {name}
      </h1> */}
    </Layout>
  )
}

export default HomePage
