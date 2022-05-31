import type { NextPage } from 'next';
import { Router } from 'next/router';
import { useState } from 'react';
import Hero from 'src/components/Hero';
import Navbar from 'src/components/Navbar';

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar display="flex" />
          <Hero />
        </>
      )}
    </>
  );
};

export default Home;
