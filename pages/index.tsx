import type { NextPage } from 'next';
import Hero from 'src/components/Hero';
import Navbar from 'src/components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar display="flex" />
      <Hero />
    </>
  );
};

export default Home;
