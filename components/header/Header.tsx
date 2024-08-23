import React from "react";
import styles from "./header.module.css";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import Image from "next/image";
const Header = ({
  title,
  image,
  isVisible,
  bgColor,
}: {
  title: string;
  image: string;
  isVisible: boolean;
  bgColor: string;
}) => {
  return (
    <div className={styles.header}>
      {isVisible && (
        <div className={styles.category}>
          <div
            className={styles.imageWrapper}
            style={{ backgroundColor: `#${bgColor}` }}
          >
            <Image src={image} alt="" width={20} height={20} />
          </div>
          <span className="heading-sm">{title}</span>
        </div>
      )}
      <ThemeSwitch />
    </div>
  );
};

export default Header;
