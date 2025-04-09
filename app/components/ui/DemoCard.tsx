import React from 'react';
import Link from 'next/link';
import Button from './Button';

const DemoCard = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Try PlumbAssist Today
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Experience how our virtual receptionist can transform your plumbing business. 
                Schedule appointments, handle emergency calls, and never miss a customer again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button variant="primary" size="lg">
                    Try Demo
                  </Button>
                </Link>
                <Link href="/join">
                  <Button variant="outline" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-blue-50 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <svg 
                  className="h-16 w-16 text-blue-500 mx-auto mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Live Demo Available
                </h3>
                <p className="text-gray-600">
                  See PlumbAssist in action with our interactive demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard; 