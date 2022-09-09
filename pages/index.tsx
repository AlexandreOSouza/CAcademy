import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar />
    </>
  );
};

export default Home;
