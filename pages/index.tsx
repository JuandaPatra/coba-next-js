import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
    <div className={styles.container}>
      <h1 style={{ textAlign: "center" }}>Rahmad Juanda Patra</h1>
    </div>
    </Layout>
  );
};

export default Home;
