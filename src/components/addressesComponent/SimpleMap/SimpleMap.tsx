import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';

interface Props {
  text: string;
  lat: number;
  lng: number;
}

const GoogleMaps: FC<Props> = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 48.38208,
      lng: 34.99455,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '300px', width: '600px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <GoogleMaps lat={48.38208} lng={34.99455} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
