import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import css from './CarouselComponent.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className={css.item}>
        <Image
          src="/carousel/action_1.png"
          alt="Action 1"
          width={1062}
          height={401}
        />
      </div>
      <div className={css.item}>
        <Image
          src="/carousel/action_2.png"
          alt="Action 2"
          width={1062}
          height={401}
        />
      </div>
      <div className={css.item}>
        <Image
          src="/carousel/action_3.png"
          alt="Action 3"
          width={1062}
          height={401}
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
