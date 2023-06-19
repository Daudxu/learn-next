import Head from 'next/head';
import { handleClientScriptLoad } from 'next/script';
import React, { useState } from 'react';



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
      </div>
    </>
  );
}

export default About