import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function Fitness() {
  return (
    <div className="w-full bg-gray-900  text-black font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
         
          <div className="w-full md:w-3/5 relative">
            <div className="rounded-3xl overflow-hidden relative">
              <img 
                src="https://rishihood.edu.in/wp-content/uploads/2024/06/IMG_8035-scaled.jpg" 
                alt="Man doing mountain climber exercise on a yoga mat"
                className="w-full object-cover"
              />
              
 
              <div className="absolute bottom-6 right-6 w-32 h-32">
                <div className="relative w-full h-full">
              
                  <div className="absolute bg-black/80 rounded-full p-2 inset-0 w-full h-full animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path 
                        id="textPath" 
                        d="M 50 10 a 40 40 0 1 1 -0.1 0" 
                        fill="none" 
                        stroke="none"
                      />
                      <text className="text-xs fill-white">
                        <textPath href="#textPath" textLength="250">
                          Healthy ~ Strong ~ Energised ~ Spiritual ~ Relaxed ~
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="w-10 h-10">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <path d="M12 2L4 20L12 17L20 20L12 2Z" fill="black" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div id='training' className="w-full md:w-2/5 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Don't Just Excercise<br />
              Do yoga with it
            </h1>
            
             <p className="text-gray-200 text-lg mb-8">
              Dada says that yoga is not just a physical exercise, but a holistic approach to well-being. Combining physical postures with breath control and meditation, yoga helps to harmonize the body, mind, and spirit. 
            </p>
            
             <div className="flex flex-wrap gap-4">
              <Link href="/allCourses">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-black font-medium hover:bg-gray-100 transition-colors">
                <Play size={18} className="text-black" />
                Check it Out!
              </button>
              </Link>
              
              <button className="flex items-center gap-2 px-6 py-3 bg-yellow-400 rounded-full text-black font-medium hover:bg-yellow-500 transition-colors">
                Trial 14 Days
                <ArrowRight size={18} className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}