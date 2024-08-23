"use client";
import Header from "@/components/header/Header";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const ResultPage = () => {
  const searchParams = useSearchParams();
  const quiz = searchParams.get("quiz");
  const score = searchParams.get("score");
  const bg = searchParams.get("bg");

  console.log(bg);
  return (
    <>
      <Suspense>
        <Header
          title={quiz || ""}
          image={`/assets/images/icon-${quiz?.toLowerCase()}.svg`}
          isVisible={true}
          bgColor={`${bg}`}
        />
      </Suspense>
      <Suspense>
        <main className="main">
          <div className="left-side">
            <h1 className="headingTwoLines">
              <span className="heading-lg">Quiz completed</span>
              <span className="heading-lg-bold">You scored...</span>
            </h1>
            <p className="body-s"></p>
          </div>
          <div className={styles.rightSide}>
            <div className="result">
              <div className={styles.header}>
                <div
                  style={{ backgroundColor: `#${bg}` }}
                  className={styles.imageWrapper}
                >
                  <Image
                    src={`/assets/images/icon-${quiz?.toLowerCase()}.svg`}
                    height={40}
                    width={40}
                    alt=""
                  />
                </div>
                <p className="heading-sm">{quiz}</p>
              </div>

              <p
                className="heading-lg-bold"
                style={{ color: "var(--dark-navy)" }}
              >
                {score}
              </p>
              <p className="body-m" style={{ color: "var(--grey-navy)" }}>
                out of 10
              </p>
            </div>
            <button className={`${styles.btnSubmit} heading-sm`}>
              <Link href={"/"}>Play Again</Link>
            </button>
          </div>
        </main>
      </Suspense>
    </>
  );
};

export default ResultPage;
