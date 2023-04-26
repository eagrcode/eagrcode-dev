import "@/styles/globals.scss";
import "@/styles/variables.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import NavLayout from "@/components/layouts/NavLayout/NavLayout";
import { ContextProvider } from "@/context/ContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <NavLayout>
        <Component {...pageProps} />
      </NavLayout>
    </ContextProvider>
  );
}