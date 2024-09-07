"use client";

import { GOOGLE_MAPS_API_KEY } from "@/config/constants";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>{children}</APIProvider>
    </>
  );
}
