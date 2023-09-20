import { StateProvider } from "@/context/StateContext";
import { initialState, reducer } from "@/context/StateReducers";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0].includes('Image is missing required "src" property')) {
    // Suppress the specific error message
    return;
  }
  originalConsoleError.apply(console, args);
};
  return (
  <StateProvider initialState={initialState} reducer={reducer}>
    <Head>
      <title>
        Whatsapp - clone
      </title>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </Head>

    <Component {...pageProps} />
  </StateProvider>
  )
}
