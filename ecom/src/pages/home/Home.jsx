import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import Layout from '../../components/layout/Layout'
import Category from '../../components/category/Category'
import HomepageCart from '../../components/homePagecart/HomepageCart'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'

export default function Home() {
  return (
    <Layout>
        <HeroSection />
        <Category />
        <HomepageCart />
        <Track />
        <Testimonial />
    </Layout>
  )
}
