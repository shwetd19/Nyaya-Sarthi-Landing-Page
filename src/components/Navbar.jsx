/** @format */
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import ThemeSwitch from './ThemeSwitch';
import { useMenuUpdateContext } from '../contexts/MenuContext';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/20/solid';
import useScroll from '../../helpers/useScroll';

const Navbar = ({ handleClick, handleClick2 }) => {
  const toggleShowMenu = useMenuUpdateContext();

  const [isScrollingUp, isScrollingDown] = useScroll();

  return (
    <header
      className={`dark:bg-[#1C1C1C] bg-white padding-x py-6 lg:py-6  w-full shadow-2xl absolute z-20  transition-transform duration-700 transform ${
        isScrollingDown ? '-translate-y-full' : ''
      }${isScrollingUp ? 'translate-y-0' : ''}`}
    >
      <nav className="flex flex-row justify-between items-center max-container">
        <a href="/">
          <img
            src={'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702918742/nyayasarathi_xyaeyc.jpg'}
            className="hidden scale-125 lg:block"
            alt="logo"
            width="200"
            height="29"
          />
          <img
            src={'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702918742/nyayasarathi_xyaeyc.jpg'}
            className="lg:hidden h-[50px]"
            alt="logo"
          />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden pr-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <button onClick={handleClick2}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-100 hoverUnderline dark:mix-blend-difference"
                >
                  {item.label}
                </a>
              </button>
            </li>
          ))}
        </ul>
        {/* <div className="flex items-center justify-center gap-x-2"> */}
        {/* <div className="flex items-center justify-center sm:bg-transparent sm:p-2 rounded-3xl overflow-hidden sm:border dark:border-gray-500">
            <MagnifyingGlassIcon className="mr-3 h-6 w-6 transition duration-300 cursor-pointer text-slate-gray dark:text-coral-red" />
            <input
              placeholder="Search"
              type="text"
              className="bg-transparent hidden sm:block text-slate-gray outline-0 focus:outline-0 placeholder:font-semibold dark:placeholder-slate-400"
            />
          </div> */}
        {/* <ThemeSwitch handleClick={handleClick} /> */}
        {/* <div className="lg:hidden dark:invert cursor-pointer" onClick={toggleShowMenu}>
            <Bars3Icon height={25} width={25} className="dark:text-coral-red" />
          </div> */}
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
