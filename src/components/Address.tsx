import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function Address() {
  const geocoding = useMapsLibrary("geocoding");
  const params = useSearchParams();
  const lat = Number(params.get("latitude") || "");
  const lng = Number(params.get("longitude") || "");
  const [address, setAddress] = useState<string>("Loading...");

  useEffect(() => {
    if (!geocoding) return;

    const updatePlace = async () => {
      const place = new geocoding.Geocoder();
      await place.geocode(
        {
          location: {
            lat,
            lng,
          },
        },
        (results, status) => {
          if (status === "OK" && results) {
            setAddress(
              results[0].address_components[0].short_name +
                " " +
                results[0].address_components[1].short_name
            );
          }
        }
      );
    };
    updatePlace();
  }, [geocoding, lat, lng]);

  return (
    <div className="p-3 border-black border-2 rounded-lg text-grey font-bold text-center">
      {address}
    </div>
  );
}
