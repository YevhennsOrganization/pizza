import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';
import css from './GoogleMap.module.scss';
import Icon from '@/components/basic/Icon/Icon';

interface Props {
  lat: number;
  lng: number;
}

const Point: FC<Props> = () => (
  <div>
    <Icon svg="point" iconWidth={31} iconHeight={41} />
  </div>
);

export default function GoogleMaps() {
  const defaultProps = {
    center: {
      lat: 48.4211840588917,
      lng: 35.00988524052585,
    },
    zoom: 12,
  };

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className={css.wrapper}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <Point lat={48.407641691999906} lng={35.00017456670064} />
        <Point lat={48.42555310026097} lng={35.022020774202005} />
        <Point lat={48.43342155185263} lng={35.00226293664556} />
      </GoogleMapReact>
    </div>
  );
}
