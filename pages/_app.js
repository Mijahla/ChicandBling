import '../styles/globals.css'
import { GA_TRACKING_ID, pageview } from "../lib/gtag";
import Script from "next/script";
import {ProductsContextProvider} from "../components/ProductsContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    <ProductsContextProvider>
      <Component {...pageProps} />
    </ProductsContextProvider>
    </>

  );
}

export default MyApp
