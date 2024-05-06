import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offer from '../Components/Offer/Offer'
import Mentorship from './Mentorship'
import Courses from '../Components/Courses/Courses'
import Testimonials from '../Components/Testimonials/Testimonials'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Offer/>
      <Mentorship/>
      <Courses/>
      {/* <Testimonials/> */}
      <NewsLetter/>
    </div>
  )
}

export default Home