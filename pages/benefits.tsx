import type { NextPage } from "next";
import useStore from "../stores/useStore";
import Head from "next/head";
import { SuggestConnectModal } from "../components/SuggestConnectModal";

const styles = {
  container: "p-5 flex flex-col space-y-5",
  title: "text-3xl font-bold",
  categoriesContainer: "space-y-3",
  categoriesList: "space-x-3 flex",
  categoryContainer:
    "py-[5px] px-[10px] bg-zinc-300 rounded-md border-[1px] shadow-sm hover:cursor-pointer",
  itemsContainer:
    "space-y-5 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-6 md:space-y-0 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8",
  item: "p-5 border-[1px] shadow-sm  rounded-lg space-y-5",
  itemImage: "object-cover",
  itemTitle: "text-lg leading-6 font-medium space-y-1",
  itemInfo: "text-lg text-gray-500",
  button:
    "px-6 py-3 w-full h-[60px] inline-flex justify-center items-center rounded-md border border-transparent bg-black text-base text-white font-medium shadow-sm hover:border-2 hover:border-black hover:bg-white hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2",
};

const categories = ["All", "Education", "Developer", "Beginner"];

const items = [
  {
    id: 0,
    image:
      "https://perks.surgewomen.io/wp-content/uploads/brizy/imgs/consensys-353x241x0x22x353x197x1649542842.jpg",
    title: "consensys",
    info: "",
    benefits:
      "25 holders will get access to consensys’ flagship blockchain developer bootcamp. raffle based.",
    categories: ["Education", "Developer"],
  },
  {
    id: 1,
    image:
      "https://perks.surgewomen.io/wp-content/uploads/brizy/imgs/crypto-tax-353x241x0x22x353x197x1649542866.jpg",
    title: "Crypto Tax Calculator",
    about: "",
    benefits:
      "5000 holders will receive 40% OFF discount for their first year’s subscription.",
    categories: ["education", "developer"],
  },
  {
    id: 2,
    image:
      "https://perks.surgewomen.io/wp-content/uploads/brizy/imgs/unstoppable-domains-354x241x0x22x354x198x1649542975.jpg",
    title: "Unstoppable Domains",
    about: "",
    benefits:
      "5000 holders will receive a $100 voucher for credits to purchase NFT domains.",
    categories: ["education", "developer"],
  },
  {
    id: 3,
    image:
      "https://perks.surgewomen.io/wp-content/uploads/brizy/imgs/c4-346x236x0x21x346x194x1649542828.jpg",
    title: "C4",
    about: "",
    benefits:
      "5000 holders will get a 70% off discount to the Bitcoin Prep Course and exam materials.",
    categories: ["education", "developer"],
  },
  {
    id: 4,
    image:
      "https://perks.surgewomen.io/wp-content/uploads/brizy/imgs/decentology-346x236x0x21x346x194x1649542941.jpg",
    title: "Decentology",
    about: "",
    benefits:
      "All developer holders will have free access to a 5-day camp to learn how to build dApps on the Hyperverse.",
    categories: ["education", "developer"],
  },
  {
    id: 5,
    image:
      "https://perks.surgewomen.io/wp-content/uploads/brizy/imgs/kernel-347x237x0x21x347x194x1649542958.jpg",
    title: "Kernel",
    about: "",
    benefits:
      "8+ womxn holders will have a scholarship to every cohort forever. Application based.",
    categories: ["education", "developer"],
  },
  {
    id: 6,
    image:
      "https://perks.surgewomen.io/wp-content/uploads/brizy/imgs/your-juno-346x236x0x21x346x194x1649543184.jpg",
    title: "Crypto Mujeres",
    about: "",
    benefits:
      "10 scholarships for an Introduction to Web3 Course in Spanish. Raffle based.",
    categories: ["education", "developer"],
  },
];

const Benefits: NextPage = () => {
  const { connected } = useStore((state) => state.user);

  return (
    <>
      <Head>
        <title>Benefits - B3NZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.categoriesContainer}>
          <h2 className={styles.title}>All offers</h2>
          <ul className={styles.categoriesList}>
            {categories.map((item, index) => (
              <div key={index} className={styles.categoryContainer}>
                {item}
              </div>
            ))}
          </ul>
        </div>
        <ul role="list" className={styles.itemsContainer}>
          {items.map((item, index) => (
            <li className={styles.item} key={index}>
              <img className={styles.itemImage} src={item.image} alt="" />
              <div>
                <h3 className={styles.itemTitle}>
                  {`About ${item.title}`.toUpperCase()}
                </h3>
                <p className={styles.itemInfo}>
                  Lucas ipsum dolor sit amet wicket cathar kel gavyn zannah nien
                  qu mirialan falleen saleucami.
                </p>
              </div>
              <div>
                <h3 className={styles.itemTitle}>Benefit</h3>
                <p className={styles.itemInfo}>{item.benefits}</p>
              </div>
              <ul role="list" className={styles.categoriesList}>
                {item.categories.map((item, index) => {
                  return (
                    <div key={index} className={styles.categoryContainer}>
                      {item}
                    </div>
                  );
                })}
              </ul>
              {connected && <button className={styles.button}>Redeem</button>}
            </li>
          ))}
        </ul>
      </main>
      <SuggestConnectModal />
    </>
  );
};

export default Benefits;
