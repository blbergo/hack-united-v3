import useBathrooms from "@/hooks/useBathrooms";
import { AdvancedMarker, Marker, Pin } from "@vis.gl/react-google-maps";

export function Bathrooms({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const query = useBathrooms(latitude, longitude);

  return (
    <>
      {query.isSuccess && query.data && (
        <>
          {query.data.map((bathroom) => (
            <AdvancedMarker
              key={bathroom.id}
              position={{
                lat: bathroom.latitude,
                lng: bathroom.longitude,
              }}
            >
              <Pin
                background={"#22ccff"}
                borderColor={"#1e89a1"}
                glyphColor={"#0f677a"}
              />
            </AdvancedMarker>
          ))}
        </>
      )}
    </>
  );
}
