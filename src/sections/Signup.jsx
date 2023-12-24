/** @format */
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Menu from '../components/Menu';
const Signup = () => {
  return (
    <>
      {/* <Menu /> */}
      <section id="contact-us" className="bg-gray-50 dark:bg-[#1C1C1C] mt-40 lg:my-32">
        <div className="flex flex-row flex-wrap m-8 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <div data-aos="zoom-out" className=" flex flex-row justify-center  w-1/2 h-full  rounded-lg flex-wrap">
            <img
              src={'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702808965/contact_pdfoh6.jpg'}
              alt="team"
              width=""
              className="object-contain scale-[1.75]  overflow-hidden w-1/2 "
            />
          </div>
          <div
            data-aos="zoom-out"
            className=" w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-[#2d2c2c] dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Get in touch with us
              </h1>
              <form className="space-y-4 md:space-y-6" action="https://formspree.io/f/meqyjaln" method="POST">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#2d2c2c] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Charles Coventry"
                    required="true"
                  />
                </div>
                <div>
                  <label htmlFor="compname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="compname"
                    id="compname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#2d2c2c] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+91 1234567890"
                    required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#2d2c2c] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contact No.
                  </label>
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#2d2c2c] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ABC Pvt Ltd"
                    required="true"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </label>
                  <textarea
                    // type=""
                    rows={2}
                    name="address"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#2d2c2c] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Pune"
                    required="true"
                  />
                </div>
                <div className="flex items-start">
                  {/* <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div> */}
                  {/* <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                      I accept the
                      <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
                        Terms and Conditions
                      </a>
                    </label>
                  </div> */}
                </div>
                <Button type="submit" className="" fullWidth={true}>
                  Get Started
                </Button>
                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    &nbsp;Login here
                  </Link>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
