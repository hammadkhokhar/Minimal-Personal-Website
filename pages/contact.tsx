import Head from "next/head";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Hire Hammad Khokhar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="follow, index" />
        <meta
          content="Hire Hammad Khokhar, he develops robust and scalable cloud-based web applications and REST APIs."
          name="description"
        />
        <meta property="og:url" content={`https://hammadkhokhar.com`} />
        <link rel="canonical" href={`https://hammadkhokhar.com`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hammad Khokhar" />
        <meta
          property="og:description"
          content="Hire Hammad Khokhar, he develops robust and scalable cloud-based web applications and REST APIs."
        />
        <meta property="og:title" content="Hire Hammad Khokhar" />
        <meta property="og:image" content="/hammad-khokhar-avatar.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hammadkhokhar" />
        <meta name="twitter:title" content="Hire Hammad Khokhar" />
        <meta
          name="twitter:description"
          content="Hire Hammad Khokhar, he develops robust and scalable cloud-based web applications and REST APIs."
        />
        <meta name="twitter:image" content="/hammad-khokhar-avatar.png" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <>
          <Contact />
        </>
      </main>
    </div>
  );
}
