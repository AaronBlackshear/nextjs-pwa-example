import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import Page from "../components/Page";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="apple-touch-icon" href="/icons/icon-72x72.png" />
        <link rel="apple-touch-icon" href="/icons/icon-96x96.png" />
        <link rel="apple-touch-icon" href="/icons/icon-128x128.png" />
        <link rel="apple-touch-icon" href="/icons/icon-144x144.png" />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-384x384.png" />
        <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#db4938" />
        <meta name="theme-color" content="#db4938" />

        <link rel="manifest" href="/manifest.json" />

        {/* <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/static/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PWA App" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="PWA App" />
        {/* <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/static/icons/apple-touch-icon.png"
        /> */}

        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/static/icons/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Page>
          <ToastContainer />
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
