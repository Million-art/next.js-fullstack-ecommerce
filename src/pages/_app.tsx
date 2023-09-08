import RootLayout from "@/pages/component/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { persistor, store } from '@/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>  
      <PersistGate  persistor={ persistor } loading={null}>
        <div className="font-bodyFont bg-gray-300">
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </div>
      </PersistGate> 
    </Provider>
  );
}
