"use client"
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
       setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto mb-8">
      <div className="bg-white p-6 r">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">Let's Get Moving</h1>
        
        <div className="bg-blue-300 p-6 rounded-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-2">Subscribe To Our Newsletter</h2>
          <p className="text-white text-center text-sm mb-6">Get 10% off your first workout plan when you sign up for our newsletter!</p>
          
          {isSubscribed ? (
            <div className="text-center py-3 px-4 bg-white bg-opacity-20 rounded-lg">
              <p className="text-white font-medium">Thank you for subscribing!</p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email here..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg border border-white focus:ring-2 focus:ring-blue-500 text-gray-700"
              />
              <button 
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}