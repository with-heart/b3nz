const styles = {
  container:
    "p-[20px] max-w-[1400px] w-full mx-auto space-x-4 flex justify-center",
  text: "text-[#1A021B] opacity-20 lg:text-[16px]",
};

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>© 2022 B3NZ</p>
    </footer>
  );
};

export default Footer;
