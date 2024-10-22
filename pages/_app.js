/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import LayoutApp from "@/components/layoutApp";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return (
    <LayoutApp>
      <Component {...pageProps} />;
    </LayoutApp>
  );
}
