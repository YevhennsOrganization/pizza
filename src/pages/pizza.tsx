// import GoodsList from "@/components/goodsList/GoodsList";
import PizzaList from "@/components/goodsList/PizzaList";
import pizza from "../data/pizza.json";

const Pizza = () => {
  return (
    <>
      <main>
        <div>Pizza</div>
        <PizzaList pizza={pizza} />
        {/* <GoodsList pizza={pizza} /> */}
      </main>
    </>
  );
};

export default Pizza;
