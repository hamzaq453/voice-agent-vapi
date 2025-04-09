import React from 'react';

const faqs = [
  {
    question: "What is PlumbAssist?",
    answer: "PlumbAssist is an AI-powered virtual receptionist specifically designed for plumbing businesses. It handles incoming calls, schedules appointments, and manages customer inquiries 24/7."
  },
  {
    question: "How does it work?",
    answer: "PlumbAssist uses advanced AI to understand and respond to customer calls naturally. It can handle appointment scheduling, emergency call prioritization, and basic customer inquiries. The system integrates with your existing business software to keep everything synchronized."
  },
  {
    question: "Can it handle emergency calls?",
    answer: "Yes, PlumbAssist is trained to identify emergency situations and prioritize them accordingly. It can immediately connect emergency calls to your on-call plumbers or escalate them based on your business rules."
  },
  {
    question: "What happens if the AI can&apos;t handle a call?",
    answer: "If PlumbAssist encounters a situation it can&apos;t handle, it will seamlessly transfer the call to a human operator or take a message for your team to follow up. You can customize the escalation rules based on your needs."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply sign up for a plan, provide your business details and preferences, and we&apos;ll help you set up PlumbAssist to handle your calls. Our team will guide you through the entire process."
  }
];

const FAQ = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    aria-controls={`faq-answer-${index}`}
                    aria-expanded="false"
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 