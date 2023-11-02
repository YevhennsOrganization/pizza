import React, { FC } from 'react';

import { BiMap } from 'react-icons/bi';

import GoogleMapReact from 'google-map-react';

interface Props {
  lat: number;
  lng: number;
}

const Point: FC<Props> = () => (
  <div>
    <BiMap style={{ color: 'red', fontSize: '32px' }} />
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
    <div style={{ height: '300px', width: '600px' }}>
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
