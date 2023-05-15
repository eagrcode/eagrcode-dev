import "@/styles/globals.scss";
import "@/styles/variables.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { ContextProvider } from "@/context/ContextProvider";
import { ThemeProvider } from "@/context/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </ThemeProvider>
  );
}
