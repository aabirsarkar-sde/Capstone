"use client"
import { Check } from "lucide-react";
import { useState } from "react";

export default function FitnessPricingComponent() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  
  const plans = [
    {
      id: "basic",
      name: "BASIC PLAN",
      price: "₹2,999",
      features: [
        "Single personalized plan",
        "Tailored to fitness goals",
        "Basic workouts",
        "Meal suggestions",
        "Email support"
      ],
      highlight: false
    },
    {
      id: "pro",
      name: "PRO PLAN",
      price: "₹3,999",
      features: [
        "Personal training & meal plans",
        "Weight tracking",
        "Progress monitoring",
        "Exclusive content",
        "Customizable routines",
        "Email & chat support"
      ],
      highlight: true
    },
    {
      id: "elite",
      name: "ELITE PLAN",
      price: "₹6,999",
      features: [
        "All pro plan features",
        "One-on-one with Dada",
        "Weekly check-ins",
        "Priority support",
        "Expert guidance"
      ],
      highlight: false
    }
  ];

  return (
    <div id="pricing" className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">NST's Plans for</h1>
        <h1 className="text-4xl md:text-5xl font-bold">Your Fitness Goals</h1>
      </div>
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 justify-center">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`flex-1 rounded-lg p-6 transition-all duration-200 ${
              plan.highlight 
                ? "bg-blue-500 text-white" 
                : "bg-black border border-gray-700"
            } ${
              hoveredPlan === plan.id ? "transform scale-105" : ""
            }`}
            onMouseEnter={() => setHoveredPlan(plan.id)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-4">{plan.name}</h2>
              <div className="flex justify-center items-baseline">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span className="text-sm ml-1">/month</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className={`rounded-full p-1 mr-3 ${plan.highlight ? "bg-gray-900" : "bg-blue-300"}`}>
                    <Check size={16} className={plan.highlight ? "text-white" : "text-black"} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <button 
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                plan.highlight 
                  ? "bg-black text-white hover:bg-gray-800" 
                  : "bg-blue-500 text-black hover:bg-yellow-400"
              }`}
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}