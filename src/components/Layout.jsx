import React, { useState, useEffect, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LoadingContext } from '../App';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import PageTransition from './PageTransition';

const Layout = () => {
  const { initialLoading } = useContext(LoadingContext);
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Only trigger transition if not on the home page initial load
    // The home page has its own Preloader for the initial load.
    if (location.pathname !== '/') {
      setIsTransitioning(true);
    }
  }, [location.pathname]);

  return (
    <div style={{ opacity: initialLoading ? 0 : 1 }}>
      <ScrollToTop />
      <Header />
      {isTransitioning && <PageTransition onComplete={() => setIsTransitioning(false)} />}
      <main style={{ paddingTop: '80px' }} key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
