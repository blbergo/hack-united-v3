import { useEffect, useMemo } from "react";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import useBathrooms from "@/hooks/useBathrooms";

type HeatmapProps = {
  radius: number;
  opacity: number;
  latitude: number;
  longitude: number;
};
export function Heatmap({
  radius,
  opacity,
  latitude,
  longitude,
}: HeatmapProps) {
  const map = useMap();
  const visualization = useMapsLibrary("visualization");
  const query = useBathrooms(latitude, longitude);

  const bathrooms = query.isSuccess ? query.data : [];

  const heatmap = useMemo(() => {
    if (!visualization) return null;

    return new google.maps.visualization.HeatmapLayer({
      radius: radius,
      opacity: opacity,
    });
  }, [visualization, radius, opacity]);

  useEffect(() => {
    if (!heatmap) return;

    heatmap.setData(
      bathrooms.map((bathroom) => {
        const { latitude, longitude, visitor_count } = bathroom;

        return {
          location: new google.maps.LatLng(latitude, longitude),
          weight: visitor_count,
        };
      })
    );
  }, [heatmap, bathrooms, radius, opacity]);

  useEffect(() => {
    if (!heatmap) return;

    heatmap.setMap(map);

    return () => {
      heatmap.setMap(null);
    };
  }, [heatmap, map]);

  return null;
}
