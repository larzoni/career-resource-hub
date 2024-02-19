import React, { FC, useEffect, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Categories,
  CategoryAccordionProps,
  Story,
  categoryLabels,
} from "./types";

import styles from "./CategoryAccordion.module.scss";
import { AccordionTrigger } from "../AccordionTrigger/AccordionTrigger";
import { AccordionContent } from "../AccordionContent/AccordionContent";
import { ArticleLink } from "../ArticleLink/ArticleLink";
import { useActiveCategory } from "@/context/CategoryContext";

const CategoryAccordion: FC<CategoryAccordionProps> = ({ categories }) => {
  const { setActiveCategory } = useActiveCategory();

  const handleCategoryClick = (categoryLabel: string) => {
    const categorySlug = categoryLabel.replace(/\s+/g, "-").toLowerCase();
    setActiveCategory(categorySlug);
  };

  return (
    <div>
      <Accordion.Root
        className={styles.AccordionRoot}
        type="single"
        collapsible
      >
        {Object.entries(categories).map(([category, articles]) => (
          <Accordion.Item
            key={category}
            className={styles.AccordionItem}
            value={`item-${category}`}
            onClick={() => handleCategoryClick(categoryLabels[category])}
          >
            <Accordion.Trigger asChild>
              <AccordionTrigger className={styles.AccordionTrigger}>
                {categoryLabels[category]}
              </AccordionTrigger>
            </Accordion.Trigger>
            <AccordionContent className={styles.AccordionContent}>
              {articles.map((article, index) => {
                const categoryLabel = categoryLabels[category];
                const categorySlug = categoryLabel
                  .replace(/\s+/g, "-")
                  .toLowerCase();
                return (
                  <ArticleLink
                    key={index}
                    title={article.story.content.title}
                    description={article.story.content.description}
                    thumbnail={article.story.content.image}
                    slug={article.story.slug}
                    category={categorySlug}
                  />
                );
              })}
            </AccordionContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default CategoryAccordion;
