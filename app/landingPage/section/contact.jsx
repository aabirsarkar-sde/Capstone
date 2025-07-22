"use client"
import React, { useState } from 'react';

export default function ContactUs() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    
    formData.append("access_key", "baa2b3c8-30d5-40af-9b60-6403abb97d17");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error submitting form", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div id='contact' className="max-w-6xl mx-auto mb-8">
      <div className="bg-white p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
        
        <div className="bg-blue-400 p-6 rounded-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-2">Get in Touch</h2>
          <p className="text-black text-center text-sm mb-6">All of NST's fittest faculty are ready to help you now!</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-white focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-white focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-white focus:ring-2 focus:ring-blue-500 text-gray-700"
            ></textarea>
            
            <button
              type="submit"
              className="bg-black hover:bg-emerald-900 text-white font-medium px-6 py-3 rounded-lg transition duration-300 w-full">
              Submit
            </button>
          </form>

          
          {result && (
            <div className="text-center mt-4 py-3 px-4 bg-white bg-opacity-20 rounded-lg">
              
              <p className="font-medium text-blue-800">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}