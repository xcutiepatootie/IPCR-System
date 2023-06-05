import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";



function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Define an array of page paths where the Navbar should not be shown
  const excludeNavbarPaths = ["/pdf"];


  // Check if the current page path is included in the excludeNavbarPaths array
  const shouldRenderNavbar = !excludeNavbarPaths.includes(router.pathname);
  return (
    <SessionProvider session={pageProps.session}>
      {shouldRenderNavbar && <Navbar />}

      <Component {...pageProps} />
    </SessionProvider>


  );
}

export default MyApp;
