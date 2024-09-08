import useBathrooms from "@/hooks/useBathrooms";
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { useRouter } from "next/navigation";

const CLEANLINESS_LEVELS = {
  Dangerous: 0,
  Smelly: 1,
  Clean: 2,
  Bougie: 3,
};

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
              // @ts-expect-error no types
              if (filters["hasMale"] && !bathroom.has_men) {
                return false;
              }
              // @ts-expect-error no types
              if (filters["hasFemale"] && !bathroom.has_women) {
                return false;
              }
              if (
              /* @ts-expect-error no types */
                filters["reviewScore"] &&
              /* @ts-expect-error no types */
                bathroom.overall_score < filters["reviewScore"]
              ) {
                return false;
              }
              if (
              /* @ts-expect-error no types */
                filters["cleanliness"] &&
              /* @ts-expect-error no types */
                CLEANLINESS_LEVELS[bathroom.cleanliness] < filters["cleanliness"]
              ) {
                return false;
              }
              // @ts-expect-error no types
              if (filters["isAccessible"] && !bathroom.is_accessible) {
                return false;
              }
              // @ts-expect-error no types
              console.log(filters["cleanliness"]);
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
