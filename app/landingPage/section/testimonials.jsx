"use client"
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [slide, setSlide] = useState(1);

  const people = [
    {
      name: 'Virat Kohli',
      role: 'Cricketer',
      avatar: 'https://images.firstpost.com/uploads/2022/08/Virat-Kohli-gym-Twitter-@imVkohli-640.jpg?im=FitAndFill=(596,336)',
      rating: 4.5,
      text: 'Easily the best workout tutorial website I have used, I was struggling to score centuries before, but then with the routine of yoga from dada and the excercise tutorial, I am now bashing hundreds like before'
    },
    {
      name: 'Gladden Rumao',
      role: 'DSA Instructor',
      avatar: 'https://rishihood.edu.in/wp-content/uploads/2024/05/Gladden.png',
      rating: 5,
      text: 'As someone exceptionally tall, this fitness website has been a game-changer for me. The yoga routines are tailored to my height, and the workout tutorials are easy to follow. I feel stronger and more flexible than ever!'
    },
    {
      name: 'Narendra Modi',
      role: 'Politician',
      avatar: 'https://yt3.googleusercontent.com/QHbBaeC1MeAM8flc-N4cZXt9FtQBWN94ryZ9VXezIEWgUUIS9_vlPxnbmCc0oRXelFKv77Il=s900-c-k-c0x00ffffff-no-rj',
      rating: 4.5,
      text: 'As a prime minister, I have a busy schedule, but this fitness website has made it easy for me to stay fit. The yoga routines are quick and effective, and the workout tutorials are perfect for my limited time. I highly recommend it!'
    },
    {
      name: 'Sandeep Sharmah',
      role: 'Event Manager',
      avatar: 'https://rishihood.edu.in/wp-content/uploads/2024/07/sandeep-sarmah.png',
      rating: 5,
      text: 'I needed to get fit for my job, and this fitness website has been a lifesaver. The yoga routines are easy to follow, and the workout tutorials are perfect for my busy schedule. I feel more energized and focused when organizing fests!'
    }
  ];

  function prevSlide() {
    setSlide(slide === 0 ? people.length - 1 : slide - 1);
  }

  function nextSlide() {
    setSlide(slide === people.length - 1 ? 0 : slide + 1);
  }

  function showStars(rating) {
    let out = [];
    let full = Math.floor(rating);
    let half = rating % 1 !== 0;
    for (let i = 0; i < full; i++) {
      out.push(
        <svg key={"full-"+i} className="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    if (half) {
      out.push(
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
    let empty = 5 - Math.ceil(rating);
    for (let i = 0; i < empty; i++) {
      out.push(
        <svg key={"empty-"+i} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return out;
  }

  function getSlides() {
    let prev = slide === 0 ? people.length - 1 : slide - 1;
    let next = slide === people.length - 1 ? 0 : slide + 1;
    return { prev, current: slide, next };
  }

  const { prev, current, next } = getSlides();

  return (
    <div id='testimonials' className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold text-center mx-auto">
            What Our Happy<br />Clients Says
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="h-12 w-12 rounded-full border border-blue-100 flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 text-blue-600" />
            </button>
            <button
              onClick={nextSlide}
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
                    src={people[prev].avatar}
                    alt={people[prev].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{people[prev].name}</h3>
                    <p className="text-sm text-blue-600">{people[prev].role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {showStars(people[prev].rating)}
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{people[prev].text}</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 px-4">
              <div className="bg-white shadow-lg rounded-lg p-8 h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={people[current].avatar}
                    alt={people[current].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{people[current].name}</h3>
                    <p className="text-blue-600">{people[current].role}</p>
                  </div>
                </div>
                <div className="flex mb-6">
                  {showStars(people[current].rating)}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{people[current].text}</p>
              </div>
            </div>
            <div className="hidden md:block w-1/6 opacity-20 pl-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={people[next].avatar}
                    alt={people[next].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{people[next].name}</h3>
                    <p className="text-sm text-blue-600">{people[next].role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {showStars(people[next].rating)}
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{people[next].text}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {people.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === slide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}