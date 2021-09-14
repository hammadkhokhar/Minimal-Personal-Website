import Head from "next/head";
import About from "./components/about";
import Technologies from "./components/technologies";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Hammad Khokhar</title>
        <link rel="icon" href="/favicon.ico" />
        <title>Hammad Khokhar</title>
        <meta name="robots" content="follow, index" />
        <meta
          content="Hammad Khokhar develops robust and scalable cloud-based web applications and REST APIs."
          name="description"
        />
        <meta property="og:url" content={`https://hammadkhokhar.com`} />
        <link rel="canonical" href={`https://hammadkhokhar.com`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hammad Khokhar" />
        <meta
          property="og:description"
          content="Hammad Khokhar develops robust and scalable cloud-based web applications and REST APIs."
        />
        <meta property="og:title" content="Hammad Khokhar" />
        <meta property="og:image" content="/hammad-khokhar-avatar.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hammadkhokhar" />
        <meta name="twitter:title" content="Hammad Khokhar" />
        <meta
          name="twitter:description"
          content="Hammad Khokhar develops robust and scalable cloud-based web applications and REST APIs."
        />
        <meta name="twitter:image" content="/hammad-khokhar-avatar.png" />
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
