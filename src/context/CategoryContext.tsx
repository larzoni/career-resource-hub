import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface ActiveCategoryContextType {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ActiveCategoryContext = createContext<ActiveCategoryContextType>({
  activeCategory: "marketing",
  setActiveCategory: () => {},
});

export const useActiveCategory = () => useContext(ActiveCategoryContext);

export const CategoryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState<string>("marketing");

  return (
    <ActiveCategoryContext.Provider
      value={{ activeCategory, setActiveCategory }}
    >
      {children}
    </ActiveCategoryContext.Provider>
  );
};
