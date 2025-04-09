'use client';

import { useState } from 'react';
import { startCall, endCall } from './utils/vapi';

export default function Home() {
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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Vapi Voice Assistant Demo</h1>
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
    </main>
  );
}
