"use client";

import { Bathrooms } from "@/components/Bathrooms";
import { Button, BUTTON_VARIANTS } from "@/components/Button";
import { Directions } from "@/components/Directions";
import { Heatmap } from "@/components/Heatmap";
import { LocationMarker } from "@/components/LocationMarker";
import { Map } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Filter from "@/components/Filter";

export default function Page() {
  const [location, setLocation] = useState<null | {
    lat: number;
    lng: number;
  }>(null);

  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({});
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [showDirections, setShowDirections] = useState(false);

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
    <div className="h-screen w-full flex flex-col items-center">
      {location ? (
        <>
          <Image
            onClick={() => setShowFilter(!showFilter)}
            src={"/icons/list.png"}
            alt="list"
            width={40}
            height={40}
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              zIndex: 3,
            }}
          />
          {showFilter && (
            <Filter setShowFilter={setShowFilter} setFilters={setFilters} />
          )}
          <Map
            defaultCenter={location}
            defaultZoom={19}
            disableDefaultUI
            mapId={"4e4faea7d916d470"}
          >
            {showHeatmap && (
              <Heatmap
                latitude={location.lat}
                longitude={location.lng}
                radius={40}
                opacity={0.6}
              />
            )}
            <LocationMarker latitude={location.lat} longitude={location.lng} />
            <Bathrooms
              latitude={location.lat}
              longitude={location.lng}
              filters={filters}
            />
            {showDirections && (
              <Directions latitude={location.lat} longitude={location.lng} />
            )}
          </Map>
          {/* TODO: add a click-to-create at position feature */}
          <span className="fixed bottom-8 flex flex-row gap-x-3">
            <Button
              variant={BUTTON_VARIANTS.OUTLINE}
              className="z-50 p-[10px]"
              onclick={() => setShowDirections(!showDirections)}
            >
              Toggle Directions
            </Button>
            <Link
              href={`/bathroom/create?latitude=${location.lat}&longitude=${location.lng}`}
            >
              <Button
                variant={BUTTON_VARIANTS.OUTLINE}
                className="z-50 p-[10px] shadow-lg"
              >
                <Image
                  src="/icons/plus.png"
                  alt="add a bathroom"
                  width={26}
                  height={26}
                />
              </Button>
            </Link>
            <Button
              variant={BUTTON_VARIANTS.OUTLINE}
              className="z-50 shadow-lg p-[10px]"
              onclick={() => setShowHeatmap(!showHeatmap)}
            >
              Toggle Heatmap
            </Button>
          </span>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
