import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { NavLinkButton } from "../stories/Components/Atoms/NavLinkButton";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl">Home</h1>
      <NavLinkButton href="aaaaa" label="ffff" />;
    </>
  );
};

export default Home;
