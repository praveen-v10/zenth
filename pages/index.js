
import Head from "next/head";
import Home from "./Home";


export default function Index() {
  return (
    <div>
      <Head>
        <title>Zenth Tech</title>
        <link rel="icon" href="/assets/logo.png"/>
      </Head>
      <Home/>
      
    </div>
  );
}
