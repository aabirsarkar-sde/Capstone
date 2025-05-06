"use client"
import { useState } from 'react';
import { Play } from 'lucide-react';
import heroimg from "../../../public/assets/hero.png"
import Link from 'next/link';

export default function FitnessUI() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div id='home' className="bg-gray-900 h-screen text-white p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">

            <div className="z-10 md:w-1/2 mb-8 md:mb-0 px-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    Rishihood's Complete
                    <span className="block text-blue-400">Workout & Yoga guide</span>
                    At Home
                </h1>

                <p className="text-gray-400 mb-8 text-sm md:text-base">
                    From Dada Acharyamitra's yoga tips to Aabir Sarkar's fitness tips, we have everything you need to stay fit and healthy. Our expert curatored resources will guide you through every step of your fitness journey, ensuring you achieve your goals with ease.
                </p>

                <div className="flex flex-wrap gap-4">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Book Now
                    </button>

                    <Link href="/allCourses">
                    <button className="flex items-center gap-2 bg-transparent border border-gray-600 px-5 py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
                        <Play size={16} className="text-white" />
                        <span>Watch Our Story</span>
                    </button>
                </Link>
                </div>
            </div>


            <div className="md:w-1/2 relative">
                <div className="w-full h-full flex items-center justify-center">

                    <div className="relative">
                        <img
                            src="/assets/hero.png"
                            alt="Fitness person in workout pose"
                            className="relative right-32 z-10 "
                        />

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-md"></div>
                    </div>
                </div>
            </div>


            <div className="absolute top-12 right-12 flex gap-2">
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
            </div>

            <div className="absolute bottom-24 right-24 flex gap-2">
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
                <span className="block w-1 h-1 bg-blue-400 rounded-full"></span>
            </div>

            <div className="absolute top-20 right-20 w-64 h-64 border-4 border-blue-400 rounded-full border-t-transparent border-l-transparent border-r-transparent transform rotate-45"></div>

            <div className="absolute top-32 right-40">
                <div className="flex gap-1 items-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="w-6 h-2 bg-blue-400 rounded"></div>
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
            </div>

            <div className="absolute bottom-40 right-80">
                <div className="flex gap-1 items-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <div className="w-6 h-2 bg-blue-400 rounded"></div>
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}