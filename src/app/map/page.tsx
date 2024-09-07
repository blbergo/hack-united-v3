"use client";

import { Bathrooms } from "@/components/Bathrooms";
import { LocationMarker } from "@/components/LocationMarker";
import { Map } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

export default function Page() {
  const [location, setLocation] = useState<null | {
    lat: number;
    lng: number;
  }>(null);

  useEffect(() => {
    if ("geolocation" in navigator && !location) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: Infinity,
        }
      );
    }
  }, [location]);

  return (
    <div className="h-screen w-full">
      {location ? (
        <Map
          defaultCenter={location}
          defaultZoom={18}
          mapId={"4e4faea7d916d470"}
        >
          <LocationMarker latitude={location.lat} longitude={location.lng} />
          <Bathrooms latitude={location.lat} longitude={location.lng} />
        </Map>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
