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

import { MantineProvider, createTheme } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";

import relativeTime from "dayjs/plugin/relativeTime";
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
  fontFamily: "PP Pangram Sans Rounded, sans-serif",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider theme={theme}>
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
          <Component {...pageProps} />
        </DatesProvider>
      </SessionProvider>

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
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
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
    </MantineProvider>
  );
};

export default App;
