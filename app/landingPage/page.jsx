import React from 'react'
import Hero from './section/hero'
import YogaExercise from './section/yogaExercise'
import Fitness from './section/fitness'
import Testimonials from './section/testimonials'

import Contact from './section/contact'
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
        <Contact/>
        <FAQ/>
    </div>
  )
}

export default page