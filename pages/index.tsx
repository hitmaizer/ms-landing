import type { NextPage } from 'next';
import Button from 'src/components/Button';
import Heading from 'src/components/Heading';
import Hero from 'src/components/Hero';
import Text from 'src/components/Text';

const Home: NextPage = () => {
  return (
    <Hero>
      <Heading size="2xl" color="#fff">
        MÁRIO SANTOS GROUP
      </Heading>
      <Text fontWeight="bold" color="#fff">
        From the traditional jazz quartet with the guitar as a harmonic
        instrument, QMS looks for their own groundbreaking new sound. The main
        focus in this project is still giving free pass to the musicians to
        express themselves over the themes they&apos;re playing. The quartet was
        brought together under the musical empathy they achieve in their regular
        jams.
      </Text>
      <Button outline>BUY HERE</Button>
    </Hero>
  );
};

export default Home;
