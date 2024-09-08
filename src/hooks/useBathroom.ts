import { BathroomsResponse } from "@/types/pocketbase";
import { useQuery } from "@tanstack/react-query";

export default function useBathroom(id: string) {
  return useQuery({
    queryKey: ["bathroom", id],
    queryFn: async () => {
      const response = await fetch(`/api/bathrooms/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return (await response.json()) as unknown as BathroomsResponse<
        unknown,
        unknown,
        unknown
      >;
    },
  });
}
