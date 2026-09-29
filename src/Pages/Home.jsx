import React from 'react';
import Hero from '../Components/Hero/Hero';
import Offer from '../Components/Offer/offer';
import Mentorship from './Mentorship';
import Courses from '../Components/Courses/Courses';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Home = () => (
  <>
    <Hero />
    <Offer />
    <Mentorship />
    <Courses />
    <NewsLetter />
  </>
);

export default Home;
