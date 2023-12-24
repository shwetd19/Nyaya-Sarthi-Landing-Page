/** @format */

import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState, useEffect } from 'react';
import Business from '../components/Business';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import {vdo} from '../assets/images/'

const formatNumber = (number) => {
  if (number < 1000) {
    return number;
  } else {
    return Math.floor(number / 1000) + 'k';
  }
};

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [animatedStatistics, setAnimatedStatistics] = useState({
    brands: 0,
    shops: 0,
    customers: 0
  });
  useEffect(() => {
    const animationDuration = 2500;
    const targetStatistics = {
      brands: 1000,
      shops: 500,
      customers: 250000
    };

    Aos.init();

    const stepDuration = animationDuration / 100;

    const updateStatistics = (currentStep) => {
      if (currentStep >= 100) {
        setAnimatedStatistics(targetStatistics);
      } else {
        setTimeout(() => {
          const percentage = (currentStep + 1) / 100;
          setAnimatedStatistics({
            brands: Math.floor(percentage * targetStatistics.brands),
            shops: Math.floor(percentage * targetStatistics.shops),
            customers: Math.floor(percentage * targetStatistics.customers)
          });
          updateStatistics(currentStep + 1);
        }, stepDuration);
      }
    };

    updateStatistics(0);
  }, []);

  return (
    <>
      <div id="bg-video" className="-z-10 relative">
        <video
          className="h-900 w-full "
          id="background-video"
          autoPlay
          muted
          loop
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source
            src={'https://res.cloudinary.com/dt3lzix8e/video/upload/v1702903562/astra_jvhnaj.mp4'}
            type="video/mp4"
          />
          {/* https://youtu.be/yXaegVWBrK0?feature=shared */}
        </video>
      </div>
      {/* <Business /> */}
      <section className="xl:padding-l wide:padding-r padding-b">
        {/* <div className="z-160 absolute text-white ">
          <p>Abhishek</p>
        </div> */}

        <div
          id="home"
          className="w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container absolute z-50 content-center"
        >
          <div
            data-aos="fade-up-right"
            className="relative xl:w-2/5 flex flex-col content-center items-start w-full max-xl:padding-x pt-28 z-10"
          >
            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[110px] font-bold">
              <span className=" xl:whitespace-nowrap relative pr-10 xl: dark:xl:bg-slate-gray duration-400 rounded-lg">
                Revolutionizing
              </span>
              <br />
              <span className="text-coral-red inline-block mt-6">DCFM </span> System
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-gray-400">
              Harnessing AI capabilities to introduce Differentiated Case Flow Management (DCFM) empowered by the MLQ
              Algorithm, revolutionizes case handling.
            </p>
            <Button icon={arrowRight}>Explore</Button>
          </div>
        </div>
        <div className="w-full max-h-screen m-0 p-0">
          <img
            src={
              'https://www.mastercard.co.in/content/dam/public/mastercardcom/in/en/homepage/Home/homepage_banner2_1300x650.jpg'
            }
            alt="team"
            width=""
            // height="auto"
            className=" scale-125 max-h-screen max-w-screen-wide w-full object-cover relative -z-10"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
