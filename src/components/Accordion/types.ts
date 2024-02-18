import { PropsWithChildren, ReactNode } from "react";

export type CategoryAccordionProps = {
  children?: ReactNode;
  triggerChild?: ReactNode;
};

export type AccordionTriggerProps = {
  className?: string;
} & PropsWithChildren;

export type Ref<T> = React.Ref<T>;

export type Story = {
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
    };
  };
};

export type Categories = { [key: string]: Story[] };

export const categoryLabels: { [key: string]: string } = {
  "9aa72a2f-04ae-48df-b71f-25f53044dc20": "Legal Advice",
  "9aa72a2f-04ae-48df-b71f-25f53044dc10": "Finding your audience",
  "9aa72a2f-04ae-48df-b71f-25f53044dc97": "Marketing",
};
