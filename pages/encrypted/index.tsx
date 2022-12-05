import React from 'react'
import Head from 'next/head'

const MyPostEncrypted = () => {
  return (
    <Head>
        <title>My post with encrypted API</title>
        <meta
            property="og:image"
            content='https://my-og-img.vercel.app/api/encrypted?id=a&token=634dd7e46ec814fb105074b73e26755b0d9966c031dca05d7e7cc65a1619058e'
        />
    </Head> 
  )
}

export default MyPostEncrypted