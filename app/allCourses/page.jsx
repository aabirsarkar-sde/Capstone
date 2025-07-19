"use client"
import React, { useState, useEffect } from 'react';

const fetchWorkouts = async () => {
    return [
        {
            id: 1,
            title: "Full Body HIIT",
            thumbnail: "/api/placeholder/640/360",
            duration: "30 min",
            difficulty: "intermediate",
            bodyPart: "full body",
            videoUrl: "pIMA4MAPgyc",
            instructor: "Alex Johnson"
        },
        {
            id: 2,
            title: "Upper Body Strength",
            thumbnail: "/api/placeholder/640/360",
            duration: "45 min",
            difficulty: "advanced",
            bodyPart: "upper body",
            videoUrl: "pIMA4MAPgyc",
            instructor: "Sarah Miller"
        },
        {
            id: 3,
            title: "Core Crusher",
            thumbnail: "/api/placeholder/640/360",
            duration: "20 min",
            difficulty: "beginner",
            bodyPart: "core",
            videoUrl: "pIMA4MAPgyc",
            instructor: "Mike Chen"
        },
        {
            id: 4,
            title: "Lower Body Blast",
            thumbnail: "/api/placeholder/640/360",
            duration: "40 min",
            difficulty: "intermediate",
            bodyPart: "lower body",
            videoUrl: "pIMA4MAPgyc",
            instructor: "Taylor Rodriguez"
        },
        {
            id: 5,
            title: "Yoga for Beginners",
            thumbnail: "/api/placeholder/640/360",
            duration: "35 min",
            difficulty: "beginner",
            bodyPart: "full body",
            videoUrl: "pIMA4MAPgyc",
            instructor: "Jamie Williams"
        },
        {
            id: 6,
            title: "Advanced Cardio",
            thumbnail: "/api/placeholder/640/360",
            duration: "50 min",
            difficulty: "advanced",
            bodyPart: "cardio",
            videoUrl: "pIMA4MAPgyc",
            instructor: "Chris Davis"
        },
        {
            id: 7,
            title: "Shoulder Sculpt",
            thumbnail: "/api/placeholder/640/360",
            duration: "25 min",
            difficulty: "intermediate",
            bodyPart: "upper body",
            videoUrl: "pIMA4MAPgyc",
            instructor: "Pat Kim"
        },
        {
            id: 8,
            title: "Beginner Leg Day",
            thumbnail: "/api/placeholder/640/360",
            duration: "30 min",
            difficulty: "beginner",
            bodyPart: "lower body",
            videoUrl: "pIMA4MAPgyc",
            instructor: "Jordan Smith"
        }
    ];
};

// Icons
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const PlayIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
);

const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const ActivityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
);

const DumbbellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm12 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0zM2 7v10M6 7v10M18 7v10M22 7v10M6 12h12"></path>
    </svg>
);

// YouTube Video Embed Component
const YouTubeEmbed = ({ videoId }) => {
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
};

function WorkoutTutorials() {
    const [workouts, setWorkouts] = useState([]);
    const [filteredWorkouts, setFilteredWorkouts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [difficulty, setDifficulty] = useState('All');
    const [bodyPart, setBodyPart] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const difficultyOptions = ["All", "Beginner", "Intermediate", "Advanced"];
    const bodyPartOptions = ["All", "Full Body", "Upper Body", "Lower Body", "Core", "Cardio"];

    useEffect(() => {
        const getWorkouts = async () => {
            try {
                const data = await fetchWorkouts();
                setWorkouts(data);
                setFilteredWorkouts(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch workouts:", error);
                setIsLoading(false);
            }
        };

        getWorkouts();
    }, []);

    useEffect(() => {
        let results = workouts;

        if (searchTerm) {
            results = results.filter(workout =>
                workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                workout.instructor.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (difficulty !== 'All') {
            results = results.filter(workout =>
                workout.difficulty.toLowerCase() === difficulty.toLowerCase()
            );
        }

        if (bodyPart !== 'All') {
            results = results.filter(workout =>
                workout.bodyPart.toLowerCase() === bodyPart.toLowerCase()
            );
        }

        setFilteredWorkouts(results);
    }, [searchTerm, difficulty, bodyPart, workouts]);

    const handleWorkoutSelect = (workout) => {
        setSelectedWorkout(workout);
    };

    const getDifficultyClasses = (difficulty) => {
        switch (difficulty.toLowerCase()) {
            case 'beginner':
                return 'bg-green-100 text-green-800';
            case 'intermediate':
                return 'bg-yellow-100 text-yellow-800';
            case 'advanced':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getYouTubeId = (url) => {
        if (!url) return null;

        if (url.length < 20 && !url.includes('/')) {
            return url;
        }

        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

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
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <SearchIcon />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative min-w-[180px]">
                                <select
                                    className="appearance-none bg-gray-50 border border-gray-300 py-3 pl-10 pr-10 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={difficulty}
                                    onChange={(e) => setDifficulty(e.target.value)}
                                >
                                    {difficultyOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                    <ActivityIcon />
                                </div>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                    <ChevronDownIcon />
                                </div>
                            </div>

                            <div className="relative min-w-[180px]">
                                <select
                                    className="appearance-none bg-gray-50 border border-gray-300 py-3 pl-10 pr-10 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={bodyPart}
                                    onChange={(e) => setBodyPart(e.target.value)}
                                >
                                    {bodyPartOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                    <DumbbellIcon />
                                </div>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                    <ChevronDownIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-gray-600">
                        Showing {filteredWorkouts.length} workouts
                        {difficulty !== 'All' && ` with ${difficulty.toLowerCase()} difficulty`}
                        {bodyPart !== 'All' && ` for ${bodyPart.toLowerCase()}`}
                        {searchTerm && ` matching "${searchTerm}"`}
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
                    </div>
                ) : (
                    <>
                        {filteredWorkouts.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="mb-4 text-gray-400">
                                    <FilterIcon />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">No workouts found</h3>
                                <p className="text-gray-500">Try adjusting your filters or search term</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredWorkouts.map(workout => (
                                    <div
                                        key={workout.id}
                                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                        onClick={() => handleWorkoutSelect(workout)}
                                    >
                                        <div className="relative">
                                            <img
                                                src={workout.thumbnail}
                                                alt={workout.title}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                <button className="bg-indigo-600 text-white p-3 rounded-full">
                                                    <PlayIcon />
                                                </button>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                                                <span className="text-white text-sm font-medium">{workout.duration}</span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg mb-1">{workout.title}</h3>
                                            <p className="text-gray-600 text-sm mb-2">with {workout.instructor}</p>
                                            <div className="flex items-center justify-between mt-2">
                                                <span className={`text-xs font-medium px-2 py-1 rounded ${getDifficultyClasses(workout.difficulty)}`}>
                                                    {workout.difficulty.charAt(0).toUpperCase() + workout.difficulty.slice(1)}
                                                </span>
                                                <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                                    {workout.bodyPart.charAt(0).toUpperCase() + workout.bodyPart.slice(1)}
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

            {selectedWorkout && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden">
                        <div className="relative pt-0">
                            {getYouTubeId(selectedWorkout.videoUrl) ? (
                                <YouTubeEmbed videoId={getYouTubeId(selectedWorkout.videoUrl)} />
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
                                    <h2 className="text-2xl font-bold">{selectedWorkout.title}</h2>
                                    <p className="text-gray-600">with {selectedWorkout.instructor}</p>
                                </div>
                                <button
                                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition"
                                    onClick={() => setSelectedWorkout(null)}
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                            <div className="flex gap-3 mb-4">
                                <span className={`text-sm font-medium px-2 py-1 rounded ${getDifficultyClasses(selectedWorkout.difficulty)}`}>
                                    {selectedWorkout.difficulty.charAt(0).toUpperCase() + selectedWorkout.difficulty.slice(1)}
                                </span>
                                <span className="text-sm font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                    {selectedWorkout.bodyPart.charAt(0).toUpperCase() + selectedWorkout.bodyPart.slice(1)}
                                </span>
                                <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                    {selectedWorkout.duration}
                                </span>
                            </div>
                            <p className="text-gray-700 mb-6">
                                This is where a detailed description of the workout would go. In a real implementation,
                                this would include information about the exercises, benefits, equipment needed, etc.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition">
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

export default WorkoutTutorials;
