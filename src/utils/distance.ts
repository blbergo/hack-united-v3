import { BathroomsResponse } from "@/types/pocketbase-types";

export const calculateEuclidianDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  return Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(lon1 - lon2, 2));
};

export const sortByDistance = (
  entries: BathroomsResponse<unknown, unknown, unknown>[],
  lat: number,
  lon: number
) => {
  return entries.sort((a, b) => {
    return (
      calculateEuclidianDistance(lat, lon, a.latitude, a.longitude) -
      calculateEuclidianDistance(lat, lon, b.latitude, b.longitude)
    );
  });
};
