import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Article {
  story: {
    id: number;
    uuid: string;
    slug: string;
    fullSlug: string;
    content: {
      title: string;
      description: string;
      image: string;
      categories: string[];
      content: string;
    };
  };
}

const reversedCategoryLabels: { [key: string]: string } = {
  "legal-advice": "9aa72a2f-04ae-48df-b71f-25f53044dc20",
  "finding-your-audience": "9aa72a2f-04ae-48df-b71f-25f53044dc10",
  marketing: "9aa72a2f-04ae-48df-b71f-25f53044dc97",
};

const ArticlePage = () => {
  const router = useRouter();
  const { category, slug } = router.query;
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/json/apiResponse.json");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const articlesData: Article[] = await response.json();
        const filteredArticles = articlesData.filter((article) => {
          return (
            article.story.content.categories.includes(
              reversedCategoryLabels[category as string]
            ) && article.story.slug === slug
          );
        });
        setArticles(filteredArticles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    if (category && slug) {
      fetchArticles();
    }
  }, [category, slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {articles.map((article) => (
        <div key={article.story.id}>
          <h1>{article.story.content.title}</h1>
          <p>{article.story.content.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlePage;
