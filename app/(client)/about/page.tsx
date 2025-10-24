import React from 'react'
import HeroPage from '@/components/Hero';
import Feedback from '@/components/Feedback'
import SmallLogin from '@/components/SmallLogin'
import Card from '@/components/Card';
import Subscribe from '@/components/Subscribe';
import { Faqs } from '@/components/Faqs';
import Instagram from '@/components/Instagram';
import Herod from '@/components/Trial'
import Main from '@/components/Main';

const AboutPage = () => {
  return (
    <div>    
      <Main />
    <Feedback />
    <Instagram />
    <Faqs />
    <Subscribe />
    </div>
  )
}

export default AboutPage