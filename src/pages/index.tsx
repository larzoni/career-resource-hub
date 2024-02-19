import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CategoryAccordion from "@/components/Accordion/CategoryAccordion";
import VideoPlaylist from "@/components/VideoPlaylist/VideoPlaylist";
import { CategoryProvider } from "@/context/CategoryContext";
import { useEffect, useState } from "react";
import { Categories, Story } from "@/components/Accordion/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [categories, setCategories] = useState<Categories>({});

  useEffect(() => {
    fetch("/json/apiResponse.json")
      .then((response) => response.json())
      .then((data: Story[]) => {
        const groupedCategories = groupByCategory(data);
        setCategories(groupedCategories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const groupByCategory = (data: Story[]): Categories => {
    return data.reduce((acc, story) => {
      story.story.content.categories.forEach((category) => {
        acc[category] = acc[category] || [];
        acc[category].push(story);
      });
      return acc;
    }, {} as Categories);
  };

  return (
    <>
      <Head>
        <title>Career resource hub</title>
        <meta name="description" content="Amuseio - career resource hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>
          Career <span>Resource Hub</span>
        </h1>
        <CategoryProvider>
          <h3>Videos</h3>
          <VideoPlaylist category="marketing" />
          <h3>Articles </h3>
          <CategoryAccordion categories={categories} />
        </CategoryProvider>
      </main>
    </>
  );
}
