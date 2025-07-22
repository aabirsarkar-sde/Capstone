"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What types of workouts are available?",
    answer: "We offer strength training, cardio, yoga, and more, all designed by Dada to be done at home with minimal equipment.",
  },
  {
    question: "Do I need any special equipment?",
    answer: "Most workouts require just your body weight. However, for advanced routines, dumbbells or resistance bands can help.",
  },
  {
    question: "Can beginners join the program?",
    answer: "Absolutely! Dada has made our programs for all levels, with guidance and modifications for beginners.",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, we are launching our mobile app soon! Stay tuned by subscribing to our newsletter.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-400 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
