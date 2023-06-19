import Head from 'next/head';
import { handleClientScriptLoad } from 'next/script';
import React, { useState } from 'react';
import Image from 'next/image';

import Script from 'next/script'


const About = () => {
  const [message, setMessage] = useState();

  const getData = async ()=> {
    const res = await fetch("/api/user")

    const data = await res.json();
    console.log("data",data)
    setMessage(JSON.stringify(data, {}, 3))
  }

  const handleClick = async () => {
     await getData()
  }

  return (
    <>
      <Head>
          <title>About App</title>
      </Head>
      <div>
        <h1>About</h1>
        <button onClick={(e)=> handleClick(e)}>
          get data
        </button>
        <h2>{message}</h2>
        <img src="/images/profile.jpg" alt="profile" />
        <Image
          src="/images/profile.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </div>
    </>
  );
}

export default About