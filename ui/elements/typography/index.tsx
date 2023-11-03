import React from "react";
import { cva } from "class-variance-authority";

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

type TypographyAlign = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify';

type TypographyFontWeight = 
| "thin"
| "extra-light"
| "light"
| "regular"
| "medium"
| "semi-bold"
| "bold"
| "extra-bold"
| "black";

interface TypographyProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  align?: TypographyAlign;
  fontWeight?: TypographyFontWeight;
  children?: React.ReactNode;
}

const Typography = ({ 
    tag, 
    variant = "base", 
    align,
    fontWeight,
    children }: TypographyProps) => {

  //Resolved tag
  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as keyof JSX.IntrinsicElements;

  return <Tag className={
    typography({
        intent: variant,

    })
  }>{children}</Tag>;
};

export {Typography};