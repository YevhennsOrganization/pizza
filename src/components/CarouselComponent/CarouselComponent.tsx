import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import css from './CarouselComponent.module.scss';

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={true}
      showThumbs={true}
      showStatus={false}
    >
      <div className={css.item}>
        <Image
          src="https://res.cloudinary.com/dyka4vajb/image/upload/f_auto,q_auto/v1/hatamagnata/carousel/g6kopv5fswwrxi0vys6a"
          alt="Action 1"
          width={1062}
          height={401}
        />
      </div>
      <div className={css.item}>
        <Image
          src="https://res.cloudinary.com/dyka4vajb/image/upload/f_auto,q_auto/v1/hatamagnata/carousel/swejyzvcyuwcpeqip4sy"
          alt="Action 2"
          width={1062}
          height={401}
        />
      </div>
      <div className={css.item}>
        <Image
          src="https://res.cloudinary.com/dyka4vajb/image/upload/f_auto,q_auto/v1/hatamagnata/carousel/ti0wittkvf5su8nhfbdy"
          alt="Action 3"
          width={1062}
          height={401}
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
