import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const styles = {
    container: "flex flex-col sm:flex-row sm:items-center border-4",
    column: "p-[20px] sm:w-[50%]",
    title:
      "text-4xl font-extrabold sm:w-1/2 sm:text-5xl sm:tracking-tight lg:text-6xl",
    info: "mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl",
    image: "sm:w-[40%]",
  };

  return (
    <>
      <Head>
        <title>B3NZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.column}>
          <h1 className={styles.title}>Benefits for DAO Contributors</h1>
          <p className={styles.info}>
            Self-service benefits for all the heros and DEGENS out there
            building the future with frens 🤝
          </p>
        </div>
        <div className={styles.image}>
          <img
            src="https://www.b3nz.xyz/images/home-page-hero-2.jpg"
            alt="cyber world"
          />
        </div>
      </main>
    </>
  );
};

export default Home;