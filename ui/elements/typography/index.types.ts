export const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  base: "p",
  caption: "p",
};

export type TypographyVariant = keyof typeof variantMapping;

export type TypographyAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify";

export type TypographyFontWeight =
  | "thin"
  | "ultra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

export type TypographyFont = "gilroy" | "playfair";

export type TypographyColors =
  | "primary"
  | "secondary-1"
  | "secondary-2"
  | "secondary-3"
  | "secondary-4"
  | "secondary-5"
  | "white"
  | "black";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  align?: TypographyAlign;
  fontWeight?: TypographyFontWeight;
  children?: React.ReactNode;
  font?: TypographyFont;
  color?: TypographyColors;
  customClassName?: string;
}
