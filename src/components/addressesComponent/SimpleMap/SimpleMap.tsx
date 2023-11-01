import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';
import { BiMap } from 'react-icons/bi';

interface Props {
  lat: number;
  lng: number;
}

const GoogleMaps: FC<Props> = () => (
  <div>
    <BiMap style={{ color: 'red', fontSize: '32px' }} />
  </div>
);

export default function SimpleMap() {
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
        <GoogleMaps lat={48.407641691999906} lng={35.00017456670064} />
        <GoogleMaps lat={48.42555310026097} lng={35.022020774202005} />
        <GoogleMaps lat={48.43342155185263} lng={35.00226293664556} />
      </GoogleMapReact>
    </div>
  );
}
