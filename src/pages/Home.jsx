import React, { useContext } from 'react';
import { LoadingContext } from '../App';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Solutions from '../components/Solutions';
import Process from '../components/Process';
import CaseStudies from '../components/CaseStudies';
import Integrations from '../components/Integrations';
import CTA from '../components/CTA';

const Home = () => {
  const { initialLoading } = useContext(LoadingContext);

  return (
    <>
      {/* Components are always rendered but their internal animations will wait for initialLoading to be false */}
      {/* Components are always rendered; internal GSAP animations handle entrance coordination */}
      <div className="home-content" style={{ opacity: initialLoading ? 0 : 1 }}>
        <Hero />
        <TrustBar />
        <Solutions />
        <Process />
        <CaseStudies />
        <Integrations />
        <CTA />
      </div>
    </>
  );
};

export default Home;
