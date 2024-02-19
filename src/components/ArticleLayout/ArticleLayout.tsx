import { FC, PropsWithChildren } from "react";
import styles from "./ArticleLayout.module.scss";
import { useRouter } from "next/router";
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons";

const ArticleLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { category } = router.query;

  const categoryName = category
    ? (category as string).toUpperCase().replace(/-/g, " ")
    : "Unknown";

  const href = `/`;

  const handleClick = () => {
    router.push(href);
  };

  return (
    <div className={styles.wrapper}>
      <h1>
        <span className={styles.category}>{categoryName} </span>ARTICLE
      </h1>
      <button className={styles.button} onClick={handleClick}>
        <DoubleArrowLeftIcon width={25} height={25} />
        Back to Career hub
      </button>
      <div className={styles.articleWrapper}>{children}</div>
    </div>
  );
};
export default ArticleLayout;
