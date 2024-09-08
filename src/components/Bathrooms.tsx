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
  console.log(query.data);
  return (
    <>
      {query.isSuccess && query.data && (
        <>
          {query.data
            .filter((bathroom) => {
              console.log(filters);
              if (filters["reviewScore"]) {
                if (bathroom.overall_score < filters["reviewScore"]) {
                  return false;
                }
              }
              if (filters["isAccessible"]) {
                if (bathroom.is_accessible !== filters["isAccessible"]) {
                  return false;
                }
              }
              if (filters["hasFemale"]) {
                if (bathroom.has_women !== filters["hasFemale"]) {
                  return false;
                }
              }
              if (filters["hasMale"]) {
                if (bathroom.has_men != filters["hasMale"]) {
                  console.log(bathroom.has_men, filters["hasMale"]);
                  return false;
                }
              }
              if (filters["hasTP"]) {
                if (bathroom.has_tp !== filters["hasTP"]) {
                  return false;
                }
              }
              if (filters["isPrivate"]) {
                if (bathroom.is_private !== filters["isPrivate"]) {
                  return false;
                }
              }
              if (filters["cleanliness"]) {
                if (bathroom.cleanliness < filters["cleanliness"]) {
                  return false;
                }
              }
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
