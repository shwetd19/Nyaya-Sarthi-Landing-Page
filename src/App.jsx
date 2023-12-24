/** @format */
import {
  Cart,
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
  ScrollToTopButton
} from './sections';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import { useState } from 'react';
import Signin from './sections/Signin';
import Signup from './sections/Signup';
import ProductsPage from './sections/ProductsPage';
import SingleProduct from './components/SingleProduct';
import { SnackbarProvider } from 'notistack';
import { AboutUs } from './sections/AboutUs';
// import { FAQ } from './sections/FAQ';
import { Steps } from './components/Steps';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from 'react';
// import { Route } from 'react-router-dom';
// Import all the pages here
// import Home from './pages/Home';
// import About from './pages/AboutUs';
// import Contact from './pages/Contact';
// import Courses from './pages/Courses';
// import Results from './pages/Results';
// import Login from './pages/components/login/Login';
// import Signuppage from './pages/signuppage';

// function App() {
//   return (
//     <>

//     </>
//   );
// }

// export default App;

// import { Steps } from './components/Steps';
const App = () => {
  const [showCart, setShowCart] = useState(false);
  function handleShowCart() {
    setShowCart(true);
  }
  function handleHideCart() {
    setShowCart(false);
  }
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div id="home">
        <SnackbarProvider autoHideDuration={1500} />
        <Router>
          <main className={'scroll-smooth z-40 h-fit overflow-hidden relative'}>
            <Navbar handleClick2={handleHideCart} handleClick={handleShowCart} />
            <Routes>
              <Route
                path={'/'}
                element={
                  <>
                    <Menu />
                    {showCart ? (
                      <Cart />
                    ) : (
                      <section>
                        <div className={`padding-x py-6 lg:py-8 z-10 w-full`} />{' '}
                        {/* This is a hack to prevent the navbar from jumping when the user scrolls to the top of the page */}
                        <Hero />
                        {/* <PopularProducts /> */}
                        <ScrollToTopButton />
                        <Services />
                        <Steps />
                        <SuperQuality />
                        {/* <SpecialOffers /> */}
                        <CustomerReviews />
                        <Subscribe />
                        {/* <AboutUs /> */}
                        {/* <FAQ /> */}
                        {/* <Signup /> */}
                      </section>
                    )}
                  </>
                }
              />
              <Route path={'/single_product/:id'} element={<SingleProduct />} />
              <Route path={'/login'} element={<Signin />} />

              <Route path={'/products'} element={<ProductsPage />} />
              <Route path={'/AboutUs'} element={<AboutUs />} />
              <Route path={'/Signup'} element={<Signup />} />
            </Routes>
            <Footer />
          </main>
        </Router>
      </div>
    </>
  );
};

export default App;
