'use client';

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Pricing from '../components/ui/Pricing';
import Button from '../components/ui/Button';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section for Pricing Page */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">
                Choose the plan that&apos;s right for your plumbing business. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Component */}
        <Pricing />

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Everything you need to know about PlumbAssist pricing and plans.
              </p>
            </div>

            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              {/* FAQ Item 1 */}
              <div className="pt-6 pb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Can I change my plan later?
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="pt-6 pb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  What happens after my free trial?
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  After your 14-day free trial, you&apos;ll be automatically charged for the plan you selected. You can cancel anytime before the trial ends to avoid being charged.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="pt-6 pb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Do you offer refunds?
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We offer a 30-day money-back guarantee. If you&apos;re not satisfied with our service, contact our support team for a full refund.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="pt-6 pb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  What payment methods do you accept?
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We accept all major credit cards, PayPal, and bank transfers for annual plans.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="pt-6 pb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Do you offer discounts for annual plans?
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Yes, we offer a 20% discount when you pay annually instead of monthly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Still have questions?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Our team is here to help you choose the right plan for your business.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/join">
                <Button variant="white" size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline-white" size="lg">
                  Contact Sales
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