import RootLayout from "@/pages/component/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
 

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className="font-bodyFont bg-gray-300">
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </div>
  );
}
