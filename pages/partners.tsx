import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const Partners: NextPage = () => {
  const styles = {
    container:
      "p-5 space-y-5 flex flex-col justify-center lg:items-center lg:flex-row lg:space-x-5",
    column: "space-y-5 text-center md:min-w-[50%] lg:text-left",
    titleContainer: "space-y-1",
    subtitle: "font-bold text-gray-500",
    title: "text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl",
    info: "text-base text-gray-500 sm:text-xl lg:text-lg xl:text-xl",
    buttonContainer: "space-y-2",
    button:
      "px-6 py-3 w-full inline-flex justify-center font-medium text-white bg-black rounded-md shadow-sm hover:border-2 hover:border-black hover:bg-white hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 lg:w-fit",
    imageContainer: "md:w-[50%]",
    image: "rounded-md",
  };

  return (
    <>
      <Head>
        <title>Partners - B3NZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.column}>
          <div className={styles.titleContainer}>
            <h1 className={styles.subtitle}>DROPPING SOON 👀</h1>
            <h1 className={styles.title}>
              Product distribution directly to people building the future
            </h1>
          </div>
          <p className={styles.info}>
            Get your product, tool or service directly into the hands of
            thousands of DAO contributors building the future.
          </p>
          <div className={styles.buttonContainer}>
            <p>Drop us your details and we will be in touch!</p>
            <Link href="https://airtable.com/shrZZn6ZKZfvrUqDX">
              <a className={styles.button}>Become a Partner Fren</a>
            </Link>
          </div>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.b3nz.xyz/images/partners-hero.jpeg"
            alt="cyber world"
          />
        </div>
      </main>
    </>
  );
};

export default Partners;
