"use client"
import React, { useState, useEffect } from 'react';


const getWorkoutList = async () => {
    return [
        {
            id: 1,
            title: "Full Body Workout",
            thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&h=360&fit=crop",
            duration: "40 min",
            difficulty: "intermediate",
            bodyPart: "full body",
            videoUrl: "https://www.youtube.com/watch?v=MOrRRvSGIQc",
            instructor: "Rowan Row",
            description: "A complete full-body workout targeting all major muscle groups for strength and endurance."
        },
        {
            id: 2,
            title: "Upper Body Strength",
            thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=640&h=360&fit=crop",
            duration: "15 min",
            difficulty: "advanced",
            bodyPart: "upper body",
            videoUrl: "https://www.youtube.com/watch?v=Mx9RrNZv2TI&pp=ygUSdXBwZXIgYm9keSB3b3Jrb3V0",
            instructor: "Caroline Green",
            description: "Build powerful upper body strength with this intense workout focusing on arms, chest, and shoulders."
        },
        {
            id: 3,
            title: "Core Crusher",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSciRZWv_adC3qjmt-Mcj3wq_5ZzkPmhQpXBQ&s",
            duration: "20 min",
            difficulty: "beginner",
            bodyPart: "core",
            videoUrl: "https://www.youtube.com/watch?v=1HegMTiTIDQ&pp=ygUTY29yZSB3b3Jrb3V0IGluZGlhbg%3D%3D",
            instructor: "Saurabh Bothra",
            description: "Strengthen your core with this beginner-friendly routine that builds stability and balance."
        },
        {
            id: 4,
            title: "Lower Body Blast",
            thumbnail: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=640&h=360&fit=crop",
            duration: "40 min",
            difficulty: "intermediate",
            bodyPart: "lower body",
            videoUrl: "https://www.youtube.com/watch?v=9iyU0YTHxKY&pp=ygUSbG93ZXIgYm9keSB3b3Jrb3V0",
            instructor: "Aabir Sarkar",
            description: "Power up your legs and glutes with this dynamic lower body workout for strength and tone."
        },
        {
            id: 5,
            title: "Yoga for Beginners",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7-DC6PE1K5ok8gzbg_Zy1zaejBlGRoHjEA&s",
            duration: "10 min",
            difficulty: "beginner",
            bodyPart: "full body",
            videoUrl: "pIMA4MAPgyc",
            instructor: "Paroksh Dada",
            description: "Start your yoga journey with gentle poses that improve flexibility and bring inner peace."
        },
        {
            id: 6,
            title: "Advanced Cardio",
            thumbnail:"https://rishihood.edu.in/wp-content/uploads/2024/03/IMG_0880-scaled.jpg" ,
            duration: "30 min",
            difficulty: "advanced",
            bodyPart: "cardio",
            videoUrl: "https://www.youtube.com/watch?v=TPLqIi4OMfU&pp=ygUVY2FyZGlvIHdvcmtvdXQgaW5kaWFu",
            instructor: "Bipasha Basu",
            description: "High-intensity cardio session to boost your heart rate and burn calories effectively."
        },
        {
            id: 7,
            title: "Shoulder Sculpt",
            thumbnail: "https://assets.gqindia.com/photos/5cdc5f13e994c8c947b68e0c/16:9/w_1920,h_1080,c_limit/Shoulder-exercises-3.jpg",
            duration: "10 min",
            difficulty: "intermediate",
            bodyPart: "upper body",
            videoUrl: "https://www.youtube.com/watch?v=QVaijMZ2mp8&pp=ygUQc2hvdWxkZXIgd29ya291dA%3D%3D",
            instructor: "Vishal Sharma",
            description: "Sculpt strong, defined shoulders with targeted exercises for better posture and strength."
        },
        {
            id: 8,
            title: "Beginner Leg Day",
            thumbnail: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=640&h=360&fit=crop",
            duration: "20 min",
            difficulty: "beginner",
            bodyPart: "lower body",
            videoUrl: "https://www.youtube.com/watch?v=H6mRkx1x77k&pp=ygUPbGVnIGRheSB3b3Jrb3V0",
            instructor: "Jordan Smith",
            description: "Perfect introduction to leg training with safe, effective exercises for building lower body strength."
        }
    ];
};


function difficultyColor(difficulty) {
    switch (difficulty.toLowerCase()) {
        case 'beginner':
            return 'text-green-600';
        case 'intermediate':
            return 'text-yellow-600';
        case 'advanced':
            return 'text-red-600';
        default:
            return 'text-gray-600';
    }
}


function extractYouTubeId(url) {
    if (!url) return null;
    
    if (url.length < 20 && !url.includes('/')) {
        return url;
    }
    // Ye youtube ke regex type ki links ke liye hai
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}


function YouTubePlayer({ videoId }) {
    return (
        <div className="relative w-full overflow-hidden pt-0" style={{ paddingBottom: '56.25%' }}>
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}


function AllWorkoutCourses() {
    const [allWorkouts, setAllWorkouts] = useState([]);
    const [visibleWorkouts, setVisibleWorkouts] = useState([]);
    const [search, setSearch] = useState('');
    const [level, setLevel] = useState('All');
    const [area, setArea] = useState('All');
    const [loading, setLoading] = useState(true);
    const [activeWorkout, setActiveWorkout] = useState(null);

    
    const levelChoices = ["All", "Beginner", "Intermediate", "Advanced"];
    const areaChoices = ["All", "Full Body", "Upper Body", "Lower Body", "Core", "Cardio"];

   
    useEffect(() => {
        let ignore = false;
        async function load() {
            try {
                const data = await getWorkoutList();
                if (!ignore) {
                    setAllWorkouts(data);
                    setVisibleWorkouts(data);
                    setLoading(false);
                }
            } catch (err) {
                
                setLoading(false);
            }
        }
        load();
        return () => { ignore = true; };
    }, []);

    
    useEffect(() => {
        let filtered = allWorkouts;
        if (search) {
            filtered = filtered.filter(w =>
                w.title.toLowerCase().includes(search.toLowerCase()) ||
                w.instructor.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (level !== 'All') {
            filtered = filtered.filter(w =>
                w.difficulty.toLowerCase() === level.toLowerCase()
            );
        }
        if (area !== 'All') {
            filtered = filtered.filter(w =>
                w.bodyPart.toLowerCase() === area.toLowerCase()
            );
        }
        setVisibleWorkouts(filtered);
    }, [search, level, area, allWorkouts]);

  
    function openWorkoutDetails(workout) {
        setActiveWorkout(workout);
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <header className="text-white py-8 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold mb-2">Workout Tutorials</h1>
                    <p className="text-lg text-indigo-100">Browse, filter, and watch workout videos to reach your fitness goals</p>
                </div>
            </header>

            <main className="container mx-auto max-w-6xl py-8 px-4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                placeholder="Search workouts or instructors..."
                                className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <SearchIcon />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative min-w-[180px]">
                                <select
                                    className="appearance-none bg-gray-50 border border-gray-300 py-3 pl-4 pr-10 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                    value={level}
                                    onChange={e => setLevel(e.target.value)}
                                >
                                    {levelChoices.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                    <ChevronDownIcon />
                                </div>
                            </div>
                            <div className="relative min-w-[180px]">
                                <select
                                    className="appearance-none bg-gray-50 border border-gray-300 py-3 pl-4 pr-10 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                    value={area}
                                    onChange={e => setArea(e.target.value)}
                                >
                                    {areaChoices.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                    <ChevronDownIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600">
                        Showing {visibleWorkouts.length} workouts
                        {level !== 'All' && ` with ${level.toLowerCase()} difficulty`}
                        {area !== 'All' && ` for ${area.toLowerCase()}`}
                        {search && ` matching "${search}"`}
                    </div>
                </div>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
                    </div>
                ) : (
                    <>
                        {visibleWorkouts.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="mb-4 text-gray-400">
                                    <FilterIcon />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">No workouts found</h3>
                                <p className="text-gray-500">Try adjusting your filters or search term</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {visibleWorkouts.map(w => (
                                    <div
                                        key={w.id}
                                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                        onClick={() => openWorkoutDetails(w)}
                                    >
                                        <div className="relative">
                                            <img
                                                src={w.thumbnail}
                                                alt={w.title}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                <button className="bg-red-600 text-white p-3 rounded-full">
                                                    <PlayIcon />
                                                </button>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                                                <span className="text-white text-sm font-medium">{w.duration}</span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg mb-1">{w.title}</h3>
                                            <p className="text-gray-600 text-sm mb-2">with {w.instructor}</p>
                                            <div className="flex items-baseline justify-between mt-2">
                                                <span className={`text-xs font-medium ${difficultyColor(w.difficulty)}`}>
                                                    {w.difficulty.charAt(0).toUpperCase() + w.difficulty.slice(1)}
                                                </span>
                                                <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                                    {w.bodyPart.charAt(0).toUpperCase() + w.bodyPart.slice(1)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </main>
            {activeWorkout && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden">
                        <div className="relative pt-0">
                            {extractYouTubeId(activeWorkout.videoUrl) ? (
                                <YouTubePlayer videoId={extractYouTubeId(activeWorkout.videoUrl)} />
                            ) : (
                                <div className="bg-gray-900 w-full h-64 md:h-96 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <PlayIcon size={48} className="mx-auto mb-4 text-gray-400" />
                                        <p className="text-gray-300">
                                            Video unavailable - Invalid YouTube URL
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold">{activeWorkout.title}</h2>
                                    <p className="text-gray-600">with {activeWorkout.instructor}</p>
                                </div>
                                <button
                                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition"
                                    onClick={() => setActiveWorkout(null)}
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                            <div className="flex gap-3 mb-4">
                                <span className={`text-sm font-medium ${difficultyColor(activeWorkout.difficulty)}`}>
                                    {activeWorkout.difficulty.charAt(0).toUpperCase() + activeWorkout.difficulty.slice(1)}
                                </span>
                                <span className="text-sm font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                    {activeWorkout.bodyPart.charAt(0).toUpperCase() + activeWorkout.bodyPart.slice(1)}
                                </span>
                                <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                    {activeWorkout.duration}
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Click on the play button to look at the tutorial and begin getting fit.
                            </p>
                            <p className="text-gray-600 mb-4">
                                {activeWorkout.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition">
                                    Start Workout
                                </button>
                                <button className="border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-lg font-medium transition">
                                    Save for Later
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    );
}
function PlayIcon({ size = 24 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
    );
}
function FilterIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
    );
}
function CloseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
}
function ChevronDownIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
}

function ActivityIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
    );
}
function DumbbellIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm12 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0zM2 7v10M6 7v10M18 7v10M22 7v10M6 12h12"></path>
        </svg>
    );
}

export default AllWorkoutCourses;
