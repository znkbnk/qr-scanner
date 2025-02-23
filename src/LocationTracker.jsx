import React from "react";
import { useGeolocated } from "react-geolocated";

const LocationTracker = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  if (!isGeolocationAvailable) {
    return <p>Your browser does not support Geolocation.</p>;
  }

  if (!isGeolocationEnabled) {
    return <p>Geolocation is not enabled.</p>;
  }

  if (!coords) {
    return <p>Getting location...</p>;
  }

  return (
    <div>
      <p>Latitude: {coords.latitude}</p>
      <p>Longitude: {coords.longitude}</p>
    </div>
  );
};

export default LocationTracker;