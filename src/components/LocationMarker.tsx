import { AdvancedMarker } from "@vis.gl/react-google-maps";

interface LocationMarkerProps {
  latitude: number;
  longitude: number;
}

export function LocationMarker({ latitude, longitude }: LocationMarkerProps) {
  return (
    <AdvancedMarker
      position={{
        lat: latitude,
        lng: longitude,
      }}
    />
  );
}
