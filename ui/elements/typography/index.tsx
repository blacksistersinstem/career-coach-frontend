import React from "react";
import { cva } from "class-variance-authority";
import { gilroy, playfair } from "@/styles/font";

const typography = cva("", {
  variants: {
    intent: {
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      h4: "text-h4",
      h5: "text-h5",
      h6: "text-h6",
      base: "text-base",
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
      "secondary-5": "text-secondary-5"
    },
  },
});

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  base: "p",
  caption: "p",
};

type TypographyVariant = keyof typeof variantMapping;

type TypographyAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify";

type TypographyFontWeight =
  | "thin"
  | "ultra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

type TypographyFont = "gilroy" | "playfair";

type TypographyColors =
  | "primary"
  | "secondary-1"
  | "secondary-2"
  | "secondary-3"
  | "secondary-4"
  | "secondary-5"
  | "white"
  | "black";

interface TypographyProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  align?: TypographyAlign;
  fontWeight?: TypographyFontWeight;
  children?: React.ReactNode;
  font?: TypographyFont;
  color?: TypographyColors;
}

const Typography = ({
  tag,
  variant = "base",
  align,
  fontWeight,
  font = "gilroy",
  color = "white",
  children,
}: TypographyProps) => {

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
      })}
    >
      {children}
    </Tag>
  );
};

export { Typography };
