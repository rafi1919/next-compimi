import { NextPage } from "next";
import Head from "next/head";
import HomeView from "./landingPage/index";
const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>next-compimi</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>
      <HomeView />
    </>
  );
};

export default Index;
