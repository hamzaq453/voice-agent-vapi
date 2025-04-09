import React from 'react';
import Button from './Button';

const tiers = [
  {
    name: 'Starter',
    price: 49,
    description: 'Perfect for small plumbing businesses just getting started.',
    features: [
      '24/7 Call Handling',
      'Basic Appointment Scheduling',
      'Emergency Call Prioritization',
      'Email Notifications',
      'Basic Analytics',
    ],
    cta: 'Start Free Trial',
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing plumbing businesses with multiple technicians.',
    features: [
      'Everything in Starter',
      'Advanced Scheduling',
      'Customer Information Collection',
      'SMS Notifications',
      'Advanced Analytics',
      'Integration with Popular Software',
      'Priority Support',
    ],
    cta: 'Start Free Trial',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large plumbing companies with complex needs.',
    features: [
      'Everything in Professional',
      'Custom Integration',
      'Dedicated Account Manager',
      'Custom Workflows',
      'API Access',
      'White-label Solution',
      '24/7 Priority Support',
    ],
    cta: 'Contact Sales',
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose the right plan for your business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                tier.mostPopular ? 'border-2 border-blue-500' : ''
              }`}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <Button
                  variant={tier.mostPopular ? 'primary' : 'outline'}
                  className="mt-8 block w-full"
                >
                  {tier.cta}
                </Button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What&apos;s included
                </h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 