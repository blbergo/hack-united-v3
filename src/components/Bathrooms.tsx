import useBathrooms from "@/hooks/useBathrooms";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { useRouter } from "next/navigation";

export function Bathrooms({
  latitude,
  longitude,
  filters,
}: {
  latitude: number;
  longitude: number;
  filters: object;
}) {
  const query = useBathrooms(latitude, longitude);
  const router = useRouter();
  return (
    <>
      {query.isSuccess && query.data && (
        <>
          {query.data
            .filter((bathroom) => {
             return true; 
            })
            .map((bathroom) => (
              <AdvancedMarker
                key={bathroom.id}
                position={{
                  lat: bathroom.latitude,
                  lng: bathroom.longitude,
                }}
                onClick={() => {
                  router.push(`/bathroom/${bathroom.id}`);
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
