/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:image"
          content="https://i.ibb.co/7nVwGPH/image-thumbnail.png"
        />
        <meta
          property="og:description"
          content="From the traditional jazz quartet with the guitar as a harmonic instrument, QMS looks for their own groundbreaking new sound."
          key="ogdesc"
        />
      </Head>
      <section>
        <main>{children}</main>
      </section>
    </>
  );
}
