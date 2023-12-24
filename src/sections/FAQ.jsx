import React, { useState } from 'react';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: 'What type of cases can be filed on this platform?',
      answer: 'Cases types, including civil, criminal, or specific legal matters can be filed.'
    },
    {
      question: 'How can I directly file a case on this platform?',
      answer:
        'This platform assists you to file a case directly. You must first register as a litigant and then enter all relevant information about your case. An e-filed produced for your case will be maintained as a record.'
    },
    {
      question: 'Do I need to know the sections under IPC for the same?',
      answer:
        'Yes. You need to submit Fact details, Case details, Act details specifying the particular sections under IPC that have been violated.'
    },
    {
      question: 'Do I have to pay in order to file my case?',
      answer: 'No. You have to pay absolutely nothing for filing your case on this platform.'
    },
    {
      question: 'Is there any limit on number of cases to be filed?',
      answer: 'No, there is no limit. You can file multiple cases on this platform.'
    }
  ];

  return (
    <div className="flex flex-row justify-around max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="w-1/2 m-0 p-0 max-h- overflow-hidden object-contain relative">
        <img
          className=""
          src={'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702810445/Questions-pana_qfhfbf.svg'}
        />
      </div>
      <div className="w-2/3 md:w-2/3 lg:w-2/3 flex flex-col ">
        {/* Grid */}
        <div className="w-full">
          <h2 className=" text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Frequently asked questions <span className="text-coral-red ">(FAQS)</span>
          </h2>
          <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
            Answers to the most frequently asked questions.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-3 gap-10">
          {/* End Col */}

          <div className="md:col-span-3">
            {/* Accordion */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-4">
              {faqItems.map((item, index) => (
                <div key={index} className={`hs-accordion pt-3 pb-3 ${activeAccordion === index ? 'active' : ''}`}>
                  <button
                    className="hs-accordion-toggle group pt-3 pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                    onClick={() => handleAccordionToggle(index)}
                  >
                    {item.question}
                    <svg
                      className={`flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                    className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                      activeAccordion === index ? '' : 'hidden'
                    }`}
                    aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                  >
                    <p className="mt-4 text-gray-700 dark:text-gray-300">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* End Accordion */}
          </div>
          {/* End Col */}
        </div>
      </div>
      {/* End Grid */}
    </div>
  );
};

export default FAQ;
