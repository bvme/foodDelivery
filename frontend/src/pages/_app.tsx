// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { MyGlobalContextProvider } from "@/components/context";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <MyGlobalContextProvider>
//       <Component {...pageProps} />
//     </MyGlobalContextProvider>
//   );
// }
// import type { ReactElement, ReactNode } from "react";
// import type { NextPage } from "next";
// import type { AppProps } from "next/app";
// import { MyGlobalContextProvider } from "@/components/context";

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };
// export default function App(
//   { Component, pageProps }: AppPropsWithLayout,
//   AppProps
// ) {
//   const getLayout = Component.getLayout ?? ((page) => page);

//   return getLayout(
//     <>
//       <Component {...pageProps} />
//       <MyGlobalContextProvider>
//         <Component {...pageProps} />
//       </MyGlobalContextProvider>
//     </>
//   );
// }
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { MyGlobalContextProvider } from "@/components/context";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <MyGlobalContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </MyGlobalContextProvider>
  );
}
