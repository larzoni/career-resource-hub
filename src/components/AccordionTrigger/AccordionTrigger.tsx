import * as Accordion from "@radix-ui/react-accordion";
import React, { FC, Ref } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import styles from "./AccordionTrigger.module.scss";
import { AccordionTriggerProps } from "./types";

const AccordionTrigger: FC<AccordionTriggerProps> = React.forwardRef(
  ({ children, className, ...props }, forwardedRef: Ref<HTMLButtonElement>) => (
    <Accordion.Header className={styles.AccordionHeader}>
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
export { AccordionTrigger };
