import { useEffect, useState } from 'react';
import Image from 'next/image';
import { showDniproWeather } from '@/api/weather';
import css from './Weather.module.scss';

export const Weather = () => {
  const [weather, setWeather] = useState<[] | Forecast>([]);

  useEffect(() => {
    showDniproWeather().then((data: FilteredApiResponse) => {
      const newArray = data.map(item => {
        return {
          date: item.date.split('-').reverse().join('.'),
          avgtemp: item.day.avgtemp_c,
          conditionText: item.day.condition.text,
          icon: 'https:' + item.day.condition.icon,
        };
      });
      setWeather(newArray);
    });
  }, []);

  return (
    <div className={css.wrapper}>
      <h2 className={css.heading}>Погода в Дніпрі</h2>
      <div className={css.weatherList}>
        {weather.map(item => {
          return (
            <div key={item.date} className={css.weatherListitem}>
              <p className={css.text}>{item.avgtemp} C°</p>
              <p className={css.text}>{item.date}</p>
              <p className={css.text}>{item.conditionText}</p>
              <Image
                src={item.icon}
                alt="weather icon"
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
