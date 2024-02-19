export type Article = {
  story: {
    id: number;
    slug: string;
    content: {
      title: string;
      image: string;
      categories: string[];
      content: string;
    };
  };
};
