'use client';

import { useState } from 'react';
import { startCall, endCall } from '../utils/vapi';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Demo() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCall = async () => {
    try {
      setError(null);
      if (!isCallActive) {
        // Start a new call
        await startCall();
        setIsCallActive(true);
      } else {
        // End the existing call
        await endCall();
        setIsCallActive(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsCallActive(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">PlumbAssist Demo</h1>
          <p className="text-xl mb-8 text-gray-600">
            Experience how our virtual receptionist handles customer calls for your plumbing business.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <button
              onClick={handleCall}
              className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                isCallActive
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isCallActive ? 'End Call' : 'Start Call'}
            </button>
            <p className="mt-4 text-gray-600">
              {isCallActive ? 'Call in progress...' : 'Click to start a call with your assistant'}
            </p>
            {error && (
              <p className="mt-4 text-red-500">
                Error: {error}
              </p>
            )}
          </div>
          <div className="mt-8 text-left">
            <h2 className="text-2xl font-semibold mb-4">What to expect:</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>24/7 call handling for your plumbing business</li>
              <li>Appointment scheduling based on your availability</li>
              <li>Emergency call prioritization</li>
              <li>Customer information collection</li>
              <li>Seamless integration with your existing systems</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 