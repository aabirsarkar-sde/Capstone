import React from 'react'
import Hero from './sections/hero'
import YogaExercise from './sections/yogaExercise'
import Fitness from './sections/fitness'
import Testimonials from './sections/testimonials'

import NewsLetter from './sections/newsLetter'
import FAQ from "./sections/faq"
import Pricing from "./sections/pricing"

const page = () => {
  return (
    <div>
        <Hero/>
        <YogaExercise/>
        <Fitness/>
        <Testimonials/>
        
        <Pricing/>
        <NewsLetter/>
        <FAQ/>
    </div>
  )
}

export default page