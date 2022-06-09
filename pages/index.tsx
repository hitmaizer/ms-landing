import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Footer from 'src/components/Footer';
import Hero from 'src/components/Hero';
import Navbar from 'src/components/Navbar';
import Spinner from 'src/components/Spinner';

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar display="flex" />
          <Hero />
          <Footer display="flex" />
        </>
      )}
    </>
  );
};

export default Home;
