import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen bg-black flex flex-col items-center justify-center">
        <div className="w-[375px] max-w-[375px]">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
