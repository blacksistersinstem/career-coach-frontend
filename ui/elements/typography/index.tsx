import React from "react";
import { TypographyProps, variantMapping } from "./index.types";
import { cva } from "class-variance-authority";
import { gilroy, playfair } from "@/styles/font";

const typography = cva("", {
  variants: {
    intent: {
      h1: "text-h1 mbl:text-h3",
      h2: "text-h2 mbl:text-h4",
      h3: "text-h3 mbl:text-h5",
      h4: "text-h4 mbl:text-h6",
      h5: "text-h5 mbl:text-base",
      h6: "text-h6: mbl:text-base",
      base: "text-base mbl:text-caption",
      caption: "text-caption",
    },
    fontWeight: {
      thin: "font-thin",
      "ultra-light": "font-ultra-light",
      light: "font-light",
      regular: "font-regular",
      medium: "font-medium",
      "semi-bold": "font-semi-bold",
      bold: "font-bold",
      "extra-bold": "font-extra-bold",
      black: "font-black",
    },
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
      left: "text-left",
      right: "text-right",
      justify: "text-justify",
    },
    font: {
      playfair: playfair.className,
      gilroy: gilroy.className,
    },
    color: {
      white: "text-white",
      black: "text-black",
      primary: "text-primary",
      "secondary-1": "text-secondary-1",
      "secondary-2": "text-secondary-2",
      "secondary-3": "text-secondary-3",
      "secondary-4": "text-secondary-4",
      "secondary-5": "text-secondary-5",
    },
  },
});

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    variant = "base",
    tag,
    align,
    fontWeight,
    font = "gilroy",
    color = "white",
    children,
    customClassName = "",
    ...rest
  } = props;

  //Resolved tag
  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={typography({
        intent: variant,
        fontWeight,
        align,
        font,
        color,
        className: `${customClassName}`,
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export { Typography };
export * from './index.types';
