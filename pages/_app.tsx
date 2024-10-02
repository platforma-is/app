/* eslint-disable react/no-unknown-property */
import dayjs from "dayjs";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
// core styles are required for all packages
import "@/app/core.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...
import { createTheme, MantineProvider, Tabs } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";

import relativeTime from "dayjs/plugin/relativeTime";
import React, { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

dayjs.extend(relativeTime);

const theme = createTheme({
  colors: {
    platforma: [
      "#F7F5FF",
      "#D3CCFF",
      "#B9ADFF",
      "#9F90FF",
      "#8C7AFF",
      "#7D69FF",
      "#7661FF",
      "#6850FF",
      "#5E44FA",
      "#5033FF",
    ],
  },
  primaryColor: "platforma",
  primaryShade: 9,
  fontFamily: "Circe Rounded Medium, sans-serif",
  components: {
    Tabs: Tabs.extend({
      styles: {
        tab: {
          fontSize: "20px",
        },
      },
    }),
  },
});

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    },
  });

  return (
    <MantineProvider stylesTransform={emotionTransform} theme={theme}>
      <MantineEmotionProvider>
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary
            queryClient={queryClient}
            state={pageProps.dehydratedState}
          >
            <SessionProvider session={pageProps.session}>
              <DatesProvider
                settings={
                  {
                    // locale: "en-US",
                    // firstDayOfWeek: 0,
                    // weekendDays: [0],
                    // timezone: "UTC",
                  }
                }
              >
                {getLayout(<Component {...pageProps} />)}
              </DatesProvider>
            </SessionProvider>
          </HydrationBoundary>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

        <style jsx global>{`
          html {
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            background-color: #fff;
          }

          input,
          textarea {
            font-size: 16px;
          }

          button {
            cursor: pointer;
          }

          a {
            color: var(--mantine-primary-color-filled);
            text-decoration: none;
          }
        `}</style>
      </MantineEmotionProvider>
    </MantineProvider>
  );
};

export default App;
