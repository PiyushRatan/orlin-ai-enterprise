import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';
import Preloader from './components/Preloader';
import DivisionPage from './pages/DivisionPage';
import SubdivisionPage from './pages/SubdivisionPage';
import OnboardingPage from './pages/OnboardingPage';
import ScrollToTop from './components/ScrollToTop';

// Register GSAP plugins globally
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const LoadingContext = React.createContext();

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ initialLoading, setInitialLoading }}>
      <BrowserRouter>
        <ScrollToTop />
        {initialLoading && <Preloader onComplete={() => setInitialLoading(false)} />}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="solutions" element={<SolutionsPage />} />
            <Route path="case-studies" element={<CaseStudiesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="division/:id" element={<DivisionPage />} />
            <Route path="division/:divId/service/:serviceId" element={<SubdivisionPage />} />
            <Route path="onboarding" element={<OnboardingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingContext.Provider>
  );
}

export default App;
