import PizzaList from '@/components/goodsList/PizzaList';
import pizza from '../data/pizza.json';
import Heading from '@/components/heading/Heading';

const Pizza = () => {
  return (
    <>
      <main>
        <Heading title={'Піци'} />
        <PizzaList pizza={pizza} />
      </main>
    </>
  );
};

export default Pizza;
