import HotDogList from '@/components/goodsList/HotDogList';
import Heading from '@/components/heading/Heading';
import hotDog from '../data/hotDog.json';

const HotDog = () => {
  return (
    <>
      <main>
        <Heading title={'Хот-доги'} />
        <HotDogList hotDog={hotDog} />
      </main>
    </>
  );
};

export default HotDog;
