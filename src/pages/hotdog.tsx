import HotDogList from "@/components/goodsList/HotDogList";
import hotDog from "../data/hotDog.json";

const HotDog = () => {
  return (
    <>
      <main>
        <div>HotDog</div>
        <HotDogList hotDog={hotDog} />
      </main>
    </>
  );
};

export default HotDog;
