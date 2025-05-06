"use client"
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialCarousel() {
  const [activeSlide, setActiveSlide] = useState(1);
  
  const testimonials = [
    {
      id: 0,
      name: 'Virat Kohli',
      role: 'Cricketer',
      avatar: 'https://images.firstpost.com/uploads/2022/08/Virat-Kohli-gym-Twitter-@imVkohli-640.jpg?im=FitAndFill=(596,336)',
      rating: 4.5,
      text: 'Easily the best workout tutorial website I have used, I was struggling to score centuries before, but then with the routine of yoga from dada and the excercise tutorial, I am now bashing hundreds like before'
    },
    {
      id: 1,
      name: 'Gladden Rumao',
      role: 'DSA Instructor',
      avatar: 'https://rishihood.edu.in/wp-content/uploads/2024/05/Gladden.png',
      rating: 5,
      text: 'As someone exceptionally tall, this fitness website has been a game-changer for me. The yoga routines are tailored to my height, and the workout tutorials are easy to follow. I feel stronger and more flexible than ever!'
    },
    {
      id: 2,
      name: 'Narendra Modi',
      role: 'Politician',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.5,
      text: 'As a prime minister, I have a busy schedule, but this fitness website has made it easy for me to stay fit. The yoga routines are quick and effective, and the workout tutorials are perfect for my limited time. I highly recommend it!'
    },
    {
      id: 4,
      name: 'Sandeep Sharmah',
      role: 'Event Manager',
      avatar: 'https://rishihood.edu.in/wp-content/uploads/2024/07/sandeep-sarmah.png',
      rating: 5,
      text: 'I needed to get fit for my job, and this fitness website has been a lifesaver. The yoga routines are easy to follow, and the workout tutorials are perfect for my busy schedule. I feel more energized and focused when organizing fests!'
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

 
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
 
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    
 
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="url(#half-star)" />
          <defs>
            <linearGradient id="half-star" x1="0" x2="1" y1="0" y2="0">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
        </svg>
      );
    }
    
   
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    
    return stars;
  };

   const visibleTestimonials = () => {
    const prev = activeSlide === 0 ? testimonials.length - 1 : activeSlide - 1;
    const next = activeSlide === testimonials.length - 1 ? 0 : activeSlide + 1;
    return { prev, current: activeSlide, next };
  };

  const { prev, current, next } = visibleTestimonials();

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
         <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl text-white md:text-4xl lg:text-5xl  font-bold text-center mx-auto">
            What Our Happy<br />Clients Says
          </h2>
          
           <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              className="h-12 w-12 rounded-full border border-blue-100 flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 text-blue-600" />
            </button>
            <button 
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
        
         <div className="relative overflow-hidden">
          <div className="flex items-stretch">
             <div className="hidden md:block w-1/6 opacity-20 pr-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonials[prev].avatar} 
                    alt={testimonials[prev].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{testimonials[prev].name}</h3>
                    <p className="text-sm text-blue-600">{testimonials[prev].role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonials[prev].rating)}
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{testimonials[prev].text}</p>
              </div>
            </div>
            
             <div className="w-full md:w-2/3 px-4">
              <div className="bg-white shadow-lg rounded-lg p-8 h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonials[current].avatar} 
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{testimonials[current].name}</h3>
                    <p className="text-blue-600">{testimonials[current].role}</p>
                  </div>
                </div>
                <div className="flex mb-6">
                  {renderStars(testimonials[current].rating)}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{testimonials[current].text}</p>
              </div>
            </div>
            
             <div className="hidden md:block w-1/6 opacity-20 pl-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonials[next].avatar} 
                    alt={testimonials[next].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{testimonials[next].name}</h3>
                    <p className="text-sm text-blue-600">{testimonials[next].role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonials[next].rating)}
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{testimonials[next].text}</p>
              </div>
            </div>
          </div>
          
       
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}