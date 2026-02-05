'use client';
import React, { useState } from 'react';

const FAQAccordion = ({ faqs, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openItems.has(index);
        const question = faq.q || faq.question;
        const answer = faq.a || faq.answer;
        
        return (
          <div
            key={index}
            className="bg-dark-card border border-white/5 rounded-xl overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-base sm:text-lg font-semibold text-white pr-4">
                {question}
              </span>
              <span 
                className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary/20 rotate-180' : ''}`}
                aria-hidden="true"
              >
                <svg 
                  className="w-4 h-4 text-primary-light" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              aria-hidden={!isOpen}
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                <p className="text-gray-300 leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
