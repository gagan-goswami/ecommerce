import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import Layout from '../../components/layout/Layout'
import Category from '../../components/category/Category'
import HomepageCart from '../../components/homePagecart/HomepageCart'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useContext } from 'react'
import myContext from '../../context/myContext'

export default function Home() {
  const context = useContext(myContext);
  const name = context;
  return (
    <Layout>
        <HeroSection />
        <Category />
        <HomepageCart />
        <Track />
        <Testimonial />
        <h1>{name}</h1>
    </Layout>
  )
}
