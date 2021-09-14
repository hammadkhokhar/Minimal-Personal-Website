import Head from "next/head";
import About from "./components/about";
import Technologies from "./components/technologies";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <>
          <About />
          <div className="grid justify-items-center">
            <FaRegArrowAltCircleDown
              color="white"
              title="AWS icon"
              size="20px"
              className="h-48 animate-pulse"
            />
          </div>
          <Technologies />
        </>
      </main>
    </div>
  );
}
