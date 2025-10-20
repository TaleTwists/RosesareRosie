import React from 'react'
import HeroPage from '@/components/Hero';
import Feedback from '@/components/Feedback'
import SmallLogin from '@/components/SmallLogin'
import Card from '@/components/Card';
import Subscribe from '@/components/Subscribe';
import { Faqs } from '@/components/Faqs';
import Instagram from '@/components/Instagram';

const AboutPage = () => {
  return (
    <div>    
      <SmallLogin />
      <Card />

    <Instagram />
    <Faqs />
    <Subscribe />
    </div>
  )
}

export default AboutPage