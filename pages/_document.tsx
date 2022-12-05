import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>My post in multiple languages</title>
        <meta property="og:image" content="https://my-og-img.vercel.app/api/og" />
        <meta
    property="og:image"
    content="https://my-og-img.vercel.app/api/encrypted?id=a&token=634dd7e46ec814fb105074b73e26755b0d9966c031dca05d7e7cc65a1619058eg"
  />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}