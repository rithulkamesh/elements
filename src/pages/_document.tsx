import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A place to find a great film to watch"
        />
      </Head>
      <body className="bg-gray-50 screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
