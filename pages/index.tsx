import type { NextPage } from 'next';
import Heading from 'src/components/Heading';
import Text from 'src/components/Text';

const Home: NextPage = () => {
  return (
    <div>
      <Heading size="2xl">MÁRIO SANTOS GROUP</Heading>
      <Text fontWeight="bold">This is the Homepage</Text>
    </div>
  );
};

export default Home;
