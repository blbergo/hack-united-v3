"use client";

import { GOOGLE_MAPS_API_KEY } from "@/config/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function Providers({ children }: { children: React.ReactNode }) {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>{children}</APIProvider>
      </QueryClientProvider>
    </>
  );
}
