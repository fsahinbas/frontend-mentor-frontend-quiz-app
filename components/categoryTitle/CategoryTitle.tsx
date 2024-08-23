import styles from "./categoryTitle.module.css";
import Image from "next/image";

type CategoryTitleProps = {
  title: string;
  image: string;
  isVisible: boolean;
  bgColor: string;
};

const CategoryTitle = ({
  title,
  image,
  isVisible,
  bgColor,
}: CategoryTitleProps) => {
  return (
    <div
      className={styles.category}
      style={{ display: isVisible ? "" : "none" }}
    >
      <div className={styles.imageWrapper} style={{ backgroundColor: bgColor }}>
        <Image src={image} alt="" width={20} height={20} />
      </div>
      <span className="heading-sm">{title}</span>
    </div>
  );
};

export default CategoryTitle;
