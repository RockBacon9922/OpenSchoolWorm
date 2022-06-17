import "../styles/globals.css";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
