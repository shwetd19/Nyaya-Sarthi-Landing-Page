import React from 'react';
import Aos from 'aos';
// import "dist/"
import 'aos/dist/aos.css';
import { useState } from 'react';

export const Steps = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const handleStepHover = (step) => {
    setHoveredStep(step);
  };

  const DefaultImage =
    'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702861465/artificial-intelligence_a4saxn.gif';
  const Image1 = 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702866703/register_wusmpq.gif';
  const Image2 = 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702866703/priority_dlupiv.gif';
  const Image3 = 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702904775/list_mbo6xt.gif';
  const Image4 = 'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702866702/reorder_xtucqa.gif';

  const getImageForStep = () => {
    switch (hoveredStep) {
      case 1:
        return Image1;
      case 2:
        return Image2;
      case 3:
        return Image3;
      case 4:
        return Image4;
      default:
        return DefaultImage;
    }
  };

  return (
    <div className="flex flex-row justify-around m-4">
      <div className="flex flex-row justify-center items-center w-1/2">
        <div className="mb-5 w-11/12">
          <div className="flex flex-col justify-around max-h-full p-4">
            {/* <img src="https://res.cloudinary.com/dt3lzix8e/image/upload/v1702861465/artificial-intelligence_a4saxn.gif" /> */}
            {hoveredStep && (
              <img
                src={getImageForStep()}
                alt={hoveredStep ? `Step ${hoveredStep}` : 'DefaultImage'}
                className="max-w-full h-auto"
              />
            )}
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="flex flex-row justify-center items-center w-1/2">
        <div className="mb-5 w-11/12">
          <h2 className="mb-6 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            DCFM{' '}
            <span className="text-coral-red">
              Process <br />{' '}
            </span>
          </h2>

          {/* <p className="text-white-dark font-bold mb-5 text-base">Today</p> */}
          <div
            onMouseEnter={() => handleStepHover(1)}
            className={`  sm:flex rounded-3xl cursor-pointer transition duration-300 transform ${
              hoveredStep === 1 ? 'hover:scale-105 bg-indigo-50' : 'hover:scale-100 bg-white'
            }`}
          >
            <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
              <img
                src="https://res.cloudinary.com/dt3lzix8e/image/upload/v1702869719/one_qfeejp.gif"
                alt="img"
                className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]"
              />
            </div>
            <div className="flex-1 rounded-lg ">
              {/*<h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">
              Laurie Fox
            </h4>*/}
              {/* <p className="text-center ltr:sm:text-left rtl:sm:text-right">5 sec</p> */}
              <div className="mt-4 ml-8 sm:mt-7 mb-8">
                <h6 className="inline-block font-bold mb-2 text-lg">Case E-Filing using centralized dashboard</h6>
                <p className="ltr:pl-8 rtl:pr-8 text-white-dark font-semibold">
                  A centralized dashboard streamlines online case filing for lawyers and litigants. With an intuitive
                  interface, users can swiftly submit cases, manage documents, and track real-time progress.
                </p>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => handleStepHover(2)}
            className={`  sm:flex rounded-3xl cursor-pointer transition duration-300 transform ${
              hoveredStep === 2 ? 'hover:scale-105 bg-indigo-50' : 'hover:scale-100 bg-white'
            }`}
          >
            <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
              <img
                src="https://res.cloudinary.com/dt3lzix8e/image/upload/v1702869718/two_mz2vr5.gif"
                alt="img"
                className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]"
              />
            </div>
            <div className="flex-1">
              {/*<h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">
              Laurie Fox
            </h4>*/}
              {/* <p className="text-center ltr:sm:text-left rtl:sm:text-right">5 sec</p> */}
              <div className="mt-4 ml-8 sm:mt-7 mb-8">
                <h6 className="inline-block font-bold mb-2 text-lg">Priority is assigned to cases</h6>
                <p className="ltr:pl-8 rtl:pr-8 text-white-dark font-semibold">
                  Registered cases are assigned a priority based on parameters like complexity, duration urgency, nature
                  of case, party's age with the help of an AI based prioritization model
                </p>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => handleStepHover(3)}
            className={`  sm:flex rounded-3xl cursor-pointer transition duration-300 transform ${
              hoveredStep === 3 ? 'hover:scale-105 bg-indigo-50' : 'hover:scale-100 bg-white'
            }`}
          >
            <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
              <img
                src="https://res.cloudinary.com/dt3lzix8e/image/upload/v1702869749/three_kwffux.gif"
                alt="img"
                className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]"
              />
            </div>
            <div className="flex-1">
              {/* <h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">
              Justin Cross
            </h4> */}
              {/* <p className="text-center ltr:sm:text-left rtl:sm:text-right">45 min</p> */}
              <div className="mt-4 ml-8 sm:mt-7 mb-8">
                {/* <svg>...</svg> */}
                <h6 className="inline-block font-bold mb-2 text-lg">Cases are streamlined using MLQ Algorithm</h6>
                <p className="ltr:pl-8 rtl:pr-8 text-white-dark font-semibold">
                  For streamlining of cases, the Multi level Queue Algorithm is used which distributes cases into
                  multiple priority queues, handles time slices, dynamically adaptive priorities for responsive and
                  equitable case scheduling
                </p>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => handleStepHover(4)}
            className={`  sm:flex rounded-3xl cursor-pointer transition duration-300 transform ${
              hoveredStep === 4 ? 'hover:scale-105 bg-indigo-50' : 'hover:scale-100 bg-white'
            }`}
          >
            <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
              <img
                src={'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702870243/four_rnygyu.gif'}
                alt="img"
                className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]"
              />
            </div>
            <div className="flex-1">
              {/*<h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">
              Laurie Fox
            </h4>*/}
              {/* <p className="text-center ltr:sm:text-left rtl:sm:text-right">5 sec</p> */}
              <div className="mt-4 ml-8 sm:mt-7 mb-8">
                {/* <svg>...</svg> */}
                <h6 className="inline-block font-bold mb-2 text-lg">Rescheduling of Cases by the Judge</h6>
                <p className="ltr:pl-8 rtl:pr-8 text-white-dark font-semibold">
                  The judge can change the severity of cases, affecting the order in which streamlined proceedings are
                  handled. This authority allows the judge to adjust the order in which cases are addressed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
