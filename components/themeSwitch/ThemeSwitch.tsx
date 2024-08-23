"use client";
import Image from "next/image";
import styles from "./themeSwitch.module.css";
import { useState } from "react";
const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleChange = (e: any) => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };
  return (
    <div className={styles.wrapper}>
      {isDarkMode && (
        <Image
          src="/assets/images/icon-sun-dark.svg"
          alt=""
          width={20}
          height={20}
        />
      )}
      {!isDarkMode && (
        <Image
          src="/assets/images/icon-sun-light.svg"
          alt=""
          width={20}
          height={20}
        />
      )}
      <div className={styles.switch}>
        <input
          type="checkbox"
          id="themeChk"
          className={styles.themeChk}
          onChange={handleChange}
        />
        <label htmlFor="themeChk" className={styles.lblChk}>
          <div className={styles.ball}></div>
        </label>
      </div>
      {isDarkMode && (
        <Image
          src="/assets/images/icon-moon-dark.svg"
          alt=""
          width={20}
          height={20}
        />
      )}
      {!isDarkMode && (
        <Image
          src="/assets/images/icon-moon-light.svg"
          alt=""
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default ThemeSwitch;
