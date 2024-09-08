import { BathroomsResponse } from "@/types/pocketbase";
import { useQuery } from "@tanstack/react-query";

export default function useBathrooms(latitude: number, longitude: number) {
  return useQuery({
    queryKey: ["bathrooms"],
    queryFn: async () => {
      const response = await fetch("/api/bathrooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude,
          longitude,
        }),
      });
      return (await response.json()) as unknown as BathroomsResponse<
        unknown,
        unknown,
        unknown
      >[];
    },
  });
}
