import Link from "next/link";
import styles from "./page.module.css";
import CategoryTitle from "@/components/categoryTitle/CategoryTitle";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header title="" image="" isVisible={false} bgColor="" />
      <main className="main">
        <div className="left-side">
          <h1 className="headingTwoLines">
            <span className="heading-lg">Welcome to the</span>
            <span className="heading-lg-bold">Frontend Quiz!</span>
          </h1>
          <p className="body-s" style={{ color: "var(--grey-navy)" }}>
            Pick a subject to get started.
          </p>
        </div>
        <div className="right-side">
          <Link href={"/quiz?q=html"} className={styles.link}>
            <CategoryTitle
              title="HTML"
              image="./assets/images/icon-html.svg"
              isVisible={true}
              bgColor="#FFF1E9"
            />
          </Link>
          <Link href={"/quiz?q=css"} className={styles.link}>
            <CategoryTitle
              title="CSS"
              image="./assets/images/icon-css.svg"
              isVisible={true}
              bgColor="#E0FDEF"
            />
          </Link>
          <Link href={"/quiz?q=javascript"} className={styles.link}>
            <CategoryTitle
              title="JavaScript"
              image="./assets/images/icon-javascript.svg"
              isVisible={true}
              bgColor={"#EBF0FF"}
            />
          </Link>
          <Link href={"/quiz/?q=accessibility"} className={styles.link}>
            <CategoryTitle
              title="Accessibility"
              image="./assets/images/icon-accessibility.svg"
              isVisible={true}
              bgColor="#F6E7FF"
            />
          </Link>
        </div>
      </main>
    </>
  );
}
