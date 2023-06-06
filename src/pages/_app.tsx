// styles
import "@/styles/globals.scss";
import "@/styles/variables.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// next types
import type { AppProps } from "next/app";

// components
import Layout from "@/components/Layout/Layout";

// context
import { ContextProvider } from "@/context/ContextProvider";
import { ThemeProvider } from "@/context/ThemeProvider";

// fonts
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

// vercel analytics
import { Analytics } from "@vercel/analytics/react";

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
});

const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ContextProvider>
        <Layout>
          <style jsx global>{`
            html {
              font-family: ${ibmSans}, ${ibm.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ContextProvider>
    </ThemeProvider>
  );
}
