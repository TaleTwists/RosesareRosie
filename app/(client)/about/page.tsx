import React from 'react'
import Feedback from '@/components/Feedback'
import Subscribe from '@/components/Subscribe';
import { Faqs } from '@/components/Faqs';
import Instagram from '@/components/Instagram';
import { Main } from '@/components/Main'; 
import About from '@/components/About';

const AboutPage = () => {
  return (
    <div>    
      <About />
      {/* <Main /> */}
    <Feedback />
    <Instagram />
    <Faqs />
    <Subscribe />
    </div>
  )
}

export default AboutPage