"use client"
import { ArrowUpRight } from 'lucide-react';

export default function YogaExercise() {
  const yogaStyles = [
    {
      id: 1,
      name: 'Core',
      image: 'https://rishihood.edu.in/wp-content/uploads/2023/02/1676876151989.jpeg',
      gridArea: 'span 1 / span 1'
    },
    {
      id: 2,
      name: 'Full Body',
      image: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/workout/4-day-muscle-building-program-wide.jpg',
      gridArea: 'span 1 / span 1'
    },
    {
      id: 3,
      name: 'Vinyasa Yoga',
      image: 'https://rishihood.edu.in/wp-content/uploads/2024/06/IMG_8006-scaled.jpg',
      
      gridArea: 'span 1 / span 1'
    },
    {
      id: 4,
      name: 'Discover Other Types Of Yoga',
      image: 'https://static01.nyt.com/images/2015/06/13/world/13YOGA2/13YOGA2-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      gridArea: 'span 1 / span 2'
    },
    {
      id: 5,
      name: 'Ashtanga Yoga',
      image: 'https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gridArea: 'span 1 / span 1'
    }
  ];

  return (
    <div id='program' className="bg-gray-900 min-h-screen text-white px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
      
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find The Right Excercise 
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Excercise and yoga tutorials grouped by body part and type. Each arranged by levels of ease.
          </p>
        </div>

 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yogaStyles.map((style) => (
            <div 
              key={style.id}
              className={`relative overflow-hidden rounded-3xl group ${
                style.name === 'Discover Other Types Of Yoga' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="h-80 overflow-hidden">
                <img 
                  src={style.image} 
                  alt={`${style.name} pose`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
      
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
                  <h3 className="text-2xl font-semibold">{style.name}</h3>
                  <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
   
              <a href="#" className="absolute inset-0" aria-label={`Learn more about ${style.name}`}></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}