import React from 'react'
import Hero from './section/hero'
import YogaExercise from './section/yogaExercise'
import Fitness from './section/fitness'
import Testimonials from './section/testimonials'

import NewsLetter from './section/newsLetter'
import FAQ from "./section/faq"
import Pricing from "./section/pricing"

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