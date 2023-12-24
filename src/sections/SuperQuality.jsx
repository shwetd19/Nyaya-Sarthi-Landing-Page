import { shoe8 } from '../assets/images';
import Button from '../components/Button';
import ReactPlayer from 'react-player';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SuperQuality = () => {
  return (
    <section className="padding">
      <div
        // id="about-us"
        className="max-container items-center max-sm:mt-12 flex justify-between  max-lg:flex-col gap-10 w-full"
      >
        <div data-aos="zoom-out-right" className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            Easily{' '}
            <span className="text-coral-red">
              Register Cases <br />{' '}
            </span>
            Online
          </h2>
          <p className="mt-4  lg:max-w-lg info-text dark:text-gray-400">
            Watch our video demonstration showcasing the effortless case registration procedure, including the automated
            generation of an electronic case file (e-file).
          </p>
          {/* <p className="mt-6 lg:max-w-lg info-text dark:text-gray-400">
            Our dedication to detail and excellence ensures your satisfaction
          </p> */}
          <div className="mt-11">
            <Button>File Case</Button>
          </div>
        </div>
        <div data-aos="zoom-out-left" className="flex-1 flex justify-center items-center ">
          {/* <img
            src={shoe8}
            alt="shoe"
            width={570}
            height={522}
            className="object-contain drop-shadow-xl hover:skew-y-3 duration-500 ease-in-out"
          /> */}
          {/* <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="w-[100%] h-[100%] relative z-[5]"
            rounded-xl
          /> */}
          <iframe
            className="rounded-xl"
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=Rh3tobg7hEo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
