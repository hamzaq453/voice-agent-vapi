'use client';

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Features from '../components/ui/Features';
import Button from '../components/ui/Button';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section for Features Page */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Powerful Features for Your Plumbing Business
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                PlumbAssist provides everything you need to manage customer calls, schedule appointments, and grow your business.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Link href="/demo">
                  <Button variant="white" size="lg">
                    Try Demo
                  </Button>
                </Link>
                <Link href="/join">
                  <Button variant="outline-white" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Component */}
        <Features />

        {/* Additional Feature Details */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">
                How PlumbAssist Works
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Our virtual receptionist seamlessly integrates with your existing systems and workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Connect Your Phone System</h3>
                <p className="text-gray-500">
                  PlumbAssist integrates with your existing phone system, so there&apos;s no need to change your phone number or hardware.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Configure Your Preferences</h3>
                <p className="text-gray-500">
                  Set your business hours, technician availability, and how you want calls to be handled when you&apos;re unavailable.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Start Receiving Calls</h3>
                <p className="text-gray-500">
                  PlumbAssist will answer calls, schedule appointments, and collect customer information according to your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to transform your plumbing business?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Join thousands of plumbing businesses that trust PlumbAssist to handle their calls.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/join">
                <Button variant="white" size="lg">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline-white" size="lg">
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 