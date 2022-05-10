import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

const styles = {
  container: "relative px-[30px] pt-[30px] grow w-screen",
  contentContainer:
    "h-full flex flex-col justify-end space-y-[40px] lg:py-0 lg:w-[958px] lg:mx-auto lg:justify-center lg:text-center lg:space-y-[40px]",
  mobilePercentageIconsContainer: "relative flex justify-between lg:hidden",
  mobilePercentageIconOneContainer: "flex justify-center lg:hidden",
  mobilePercentageIconOne: "relative -left-3",
  mobilePercentageIconThree: "absolute right-0 -top-5",
  title:
    "text-[32px] text-[#1A021B] leading-[38px] font-medium sm:text-[36px] sm:leading-[42px] md:text-[62px] md:leading-[68px] lg:text-[100px] lg:leading-[106px]",
  slogan:
    "text-[20px] text-[#908C91] leading-[30px] sm:text-[24px] sm:leading-[34px] md:text-[30px] md:leading-[50px] lg:w-[616px] lg:mx-auto lg:text-[28px] lg:leading-[48px]",
  buttonsContainer:
    "flex flex-col space-y-[16px] lg:flex-row lg:space-y-0 lg:space-x-[20px] lg:mx-auto",
  blackButton:
    "text-center text-white text-[15px] font-medium rounded-full bg-[#1A021B] py-[18px] px-[48px] cursor-pointer sm:text-[16px] lg:text-[18px] lg:py-[21px] lg:px-[52px] hover:shadow-[0_0_35px_rgba(0,0,0,0.25)]",
  outlineButton:
    "text-center text-[#1A021B] text-[15px] font-medium rounded-full border-[1px] border-[#1a021b]/15 py-[18px] px-[48px] cursor-pointer sm:text-[16px] lg:text-[18px] lg:py-[21px] px-[52px] hover:shadow-[0_0_35px_rgba(0,0,0,0.07)]",
  desktopPercentageIconOne: "hidden lg:flex absolute bottom-20 left-32",
  desktopPercentageIconTwo: "hidden lg:flex absolute top-96 right-14",
  desktopPercentageIconThree: "hidden lg:flex absolute bottom-0 right-36",
  desktopPercentageIconFour: "hidden lg:flex absolute top-44 left-80",
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>B3NZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.container}>
          <div className={styles.contentContainer}>
            <div className={styles.mobilePercentageIconOneContainer}>
              <div className={styles.mobilePercentageIconOne}>
                <Image
                  width="30"
                  height="41"
                  src="/percentage-icon-four.png"
                  alt="Mobile percentage icon one"
                />
              </div>
            </div>
            <div className={styles.mobilePercentageIconsContainer}>
              <Image
                width="70"
                height="55"
                src="/percentage-icon-two.png"
                alt="Mobile percentage icon two"
              />
              <div className={styles.mobilePercentageIconThree}>
                <Image
                  width="67"
                  height="67"
                  src="/percentage-icon-one.png"
                  alt="Mobile percentage icon three"
                />
              </div>
            </div>
            <h1 className={styles.title}>
              Benefits for <br /> DAO contributors
            </h1>
            <p className={styles.slogan}>
              Heavy discounts to products you’ll love, just for being a part of
              your DAO.
            </p>
            <div className={styles.buttonsContainer}>
              <Link href="/benefits">
                <a className={styles.blackButton}>View benefits</a>
              </Link>
              <a className={styles.outlineButton}>Offer benefits</a>
            </div>
          </div>
        </main>
        <div className={styles.desktopPercentageIconOne}>
          <Image
            width="201"
            height="203"
            src="/percentage-icon-one.png"
            alt="Desktop percentage icon one"
          />
        </div>
        <div className={styles.desktopPercentageIconTwo}>
          <Image
            width="129"
            height="101"
            src="/percentage-icon-two.png"
            alt="Desktop percentage icon two"
          />
        </div>
        <div className={styles.desktopPercentageIconThree}>
          <Image
            width="247"
            height="247"
            src="/percentage-icon-three.png"
            alt="Desktop percentage icon three"
          />
        </div>
        <div className={styles.desktopPercentageIconFour}>
          <Image
            width="64"
            height="86"
            src="/percentage-icon-four.png"
            alt="Desktop percentage icon four"
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
