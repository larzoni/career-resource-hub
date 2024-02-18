import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styles from "./ArticleLink.module.scss";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { ArticleLinkProps } from "./types";

const ArticleLink: FC<ArticleLinkProps> = ({
  title,
  description,
  thumbnail,
  slug,
  category,
}) => {
  const router = useRouter();
  const href = `/${category}/${slug}`;

  const handleClick = () => {
    router.push(href);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Link className={styles.title} href={href}>
          {title}
        </Link>
        <p className={styles.description}>{description}</p>

        <button className={styles.button} onClick={handleClick}>
          Read more
          <DoubleArrowRightIcon width={25} height={25} />
        </button>
      </div>
      <Image
        className={styles.thumbnail}
        alt="image"
        src={thumbnail}
        width={600}
        height={420}
      />
    </div>
  );
};

export { ArticleLink };
