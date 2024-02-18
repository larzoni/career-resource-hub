import * as Accordion from "@radix-ui/react-accordion";
import { FC, forwardRef } from "react";
import classNames from "classnames";

import styles from "./AccordionContent.module.scss";
import { AccordionContentProps } from "./types";

const AccordionContent: FC<AccordionContentProps> = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, key, ...props }, forwardedRef) => (
  <>
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
      asChild
    >
      <div key={key} className={styles.AccordionContentText}>
        {children}
      </div>
    </Accordion.Content>
  </>
));

export { AccordionContent };
