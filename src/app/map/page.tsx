"use client";

import { Bathrooms } from "@/components/Bathrooms";
import { Directions } from "@/components/Directions";
import { Heatmap } from "@/components/Heatmap";
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
          enableHighAccuracy: true,
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
          defaultZoom={19}
          mapId={"4e4faea7d916d470"}
        >
          <Heatmap
            latitude={location.lat}
            longitude={location.lng}
            radius={40}
            opacity={0.6}
          />
          <LocationMarker latitude={location.lat} longitude={location.lng} />
          <Bathrooms latitude={location.lat} longitude={location.lng} />
          <Directions latitude={location.lat} longitude={location.lng} />
        </Map>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
