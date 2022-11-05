import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Crescendo Music Fest - Elements</title>
        <meta
          name="description"
          content="Join us for the best music festival in the world, Hosted by the best bands in the world"
        />
      </Head>
      <body className="bg-gray-50 screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
