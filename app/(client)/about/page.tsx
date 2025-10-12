import React from 'react'
import HeroPage from '@/components/Hero';
import SmallCategoryPage from '@/components/SmallCategory';
import MobileTestimonial from '@/components/MobileTestimonial';
import Feedback from '@/components/Feedback'
const AboutPage = () => {
  return (
    <>
    RosieWig: The one stop shop for all things wig essentials
    <SmallCategoryPage />
    {/* <MobileTestimonial /> */}
    <Feedback />
    </>
   

  )
}

export default AboutPage