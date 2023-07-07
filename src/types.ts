import React from "react";

export type Versatile =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

type ElementProps<E extends Versatile> = E extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[E] &
      Omit<React.ComponentPropsWithRef<E>, keyof JSX.IntrinsicElements[E]> &
      React.RefAttributes<E>
  : Omit<React.ComponentPropsWithRef<E>, keyof JSX.IntrinsicElements> &
      React.RefAttributes<E>;

export type PrismaneVersatile<E extends Versatile> = {
  as?: Versatile;
} & ElementProps<E> &
  PrismaneComponent;

export type PrismaneWithInternal<Props, Internal> =
  React.ForwardRefExoticComponent<Omit<Props, "ref">> &
    React.RefAttributes<any> & {
      [K in keyof Internal]: React.ForwardRefExoticComponent<
        Omit<Internal[K], "ref">
      > &
        React.RefAttributes<any>;
    };

export interface PrismaneFieldComponent extends PrismaneComponent {
  name?: string;
  id?: string;
  error?: string | null;
  label?: string;
  value?: string | number;
  defaultValue?: string | number;
  size?: PrismaneBreakpoints;
  variant?: "outlined" | "filled" | "underlined" | "unstyled";
  addons?: React.ReactNode;
}

export interface PrismaneDefault {
  w?: PrismaneStyles;
  h?: PrismaneStyles;
  m?: PrismaneStyles;
  my?: PrismaneStyles;
  mx?: PrismaneStyles;
  mt?: PrismaneStyles;
  mr?: PrismaneStyles;
  mb?: PrismaneStyles;
  ml?: PrismaneStyles;
  p?: PrismaneStyles;
  py?: PrismaneStyles;
  px?: PrismaneStyles;
  pt?: PrismaneStyles;
  pr?: PrismaneStyles;
  pb?: PrismaneStyles;
  pl?: PrismaneStyles;
  cl?: PrismaneStyles<
    PrismaneColors | [PrismaneColors, PrismaneShades] | string
  >;
  bg?: PrismaneStyles<
    PrismaneColors | [PrismaneColors, PrismaneShades] | string
  >;
  br?: PrismaneStyles<PrismaneBreakpoints | "xl" | "2xl">;
  mih?: PrismaneStyles;
  mah?: PrismaneStyles;
  miw?: PrismaneStyles;
  maw?: PrismaneStyles<
    PrismaneBreakpoints | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
  >;
  op?: PrismaneStyles;
  pos?: PrismaneStyles<"static" | "relative" | "fixed" | "absolute" | "sticky">;
  t?: PrismaneStyles;
  r?: PrismaneStyles;
  b?: PrismaneStyles;
  l?: PrismaneStyles;
  dp?: PrismaneStyles<
    | "inline"
    | "block"
    | "contents"
    | "flex"
    | "grid"
    | "inline-block"
    | "inline-flex"
    | "inline-grid"
    | "inline-table"
    | "list-item"
    | "run-in"
    | "table"
    | "table-caption"
    | "table-column-group"
    | "table-header-group"
    | "table-footer-group"
    | "table-row-group"
    | "table-cell"
    | "table-column"
    | "table-row"
    | "none"
  >;
  z?: PrismaneStyles<number>;
  of?: PrismaneStyles<"visible" | "hidden" | "clip" | "scroll" | "auto">;
  ff?: PrismaneStyles<string>;
  fs?: PrismaneStyles<
    | PrismaneBreakpoints
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
  >;
  fw?: PrismaneStyles<
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black"
  >;
  ls?: PrismaneStyles;
  ta?: PrismaneStyles<"left" | "right" | "center" | "justify">;
  lh?: PrismaneStyles;
  tt?: PrismaneStyles<
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "full-width"
    | "full-size-kana"
  >;
  td?: PrismaneStyles<
    "none" | "underline" | "overline" | "line-through" | "blink"
  >;
  bd?: PrismaneStyles;
  bdw?: PrismaneStyles;
  bds?: PrismaneStyles;
  bdc?: PrismaneStyles<
    PrismaneColors | [PrismaneColors, PrismaneShades] | string
  >;
  bdt?: PrismaneStyles;
  bdtw?: PrismaneStyles;
  bdts?: PrismaneStyles;
  bdtc?: PrismaneStyles<
    PrismaneColors | [PrismaneColors, PrismaneShades] | string
  >;
  bdr?: PrismaneStyles;
  bdrw?: PrismaneStyles;
  bdrs?: PrismaneStyles;
  bdrc?: PrismaneStyles<
    PrismaneColors | [PrismaneColors, PrismaneShades] | string
  >;
  bdb?: PrismaneStyles;
  bdbw?: PrismaneStyles;
  bdbs?: PrismaneStyles;
  bdbc?: PrismaneStyles<
    PrismaneColors | [PrismaneColors, PrismaneShades] | string
  >;
  bdl?: PrismaneStyles;
  bdlw?: PrismaneStyles;
  bdls?: PrismaneStyles;
  bdlc?: PrismaneStyles<
    PrismaneColors | [PrismaneColors, PrismaneShades] | string
  >;
  bdx?: PrismaneStyles;
  bdxw?: PrismaneStyles;
  bdxs?: PrismaneStyles;
  bdxc?: PrismaneStyles<
    PrismaneColors | [PrismaneColors, PrismaneShades] | string
  >;
  bdy?: PrismaneStyles;
  bdyw?: PrismaneStyles;
  bdyc?: PrismaneStyles;
  bdys?: PrismaneStyles<
    PrismaneColors | [PrismaneColors, PrismaneShades] | string
  >;
  ft?: PrismaneStyles<string>;
  bft?: PrismaneStyles<string>;
  tsh?: PrismaneStyles<PrismaneBreakpoints | string>;
  bsh?: PrismaneStyles<PrismaneBreakpoints | "xl" | "inner" | string>;
  pe?: PrismaneStyles<string>;
  cs?: PrismaneStyles<string>;
  bs?: PrismaneStyles<string>;
  sx?: PrismaneStyles<any>;
}

export interface PrismaneComponent extends PrismaneDefault {
  onClick?: any;
  onHover?: any;
  onMouseOver?: any;
  onScroll?: any;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | any;
}

type GlobalStyles = "inherit" | "initial" | "revert" | "revert-layer" | "unset";

export type PrismaneStyles<T = string | number> =
  | T
  | GlobalStyles
  | ((theme: PrismaneTheme) => T | GlobalStyles);

export interface PrismaneInputTheme {
  mode?: "light" | "dark";
  colors?: {
    primary?: { [x in PrismaneShades]: string };
    base?: { [x in PrismaneShades]: string };
  };
  spacing?: string;
}

export interface PrismaneMappedTheme {
  [key: string]: string;
}

export interface PrismaneTheme {
  mode: "light" | "dark";
  colors: {
    primary: { [x in PrismaneShades]: string };
    base: { [x in PrismaneShades]: string };
  };
  spacing: string;
}

export type PrismaneTransitions =
  | "all"
  | "colors"
  | "opacity"
  | "shadow"
  | "transform";

export type PrismaneAnimations =
  | "fade"
  | "scale"
  | "scale-y"
  | "scale-x"
  | "skew-up"
  | "skew-down"
  | "rotate-left"
  | "rotate-right"
  | "slide-down"
  | "slide-up"
  | "slide-left"
  | "slide-right"
  | "roll"
  | "pulse"
  | "shake"
  | "bounce"
  | "flip";

export type PrismanePositions =
  | "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-end"
  | "bottom"
  | "bottom-start"
  | "left-end"
  | "left"
  | "left-start";

export type PrismaneBreakpoints = "xs" | "sm" | "base" | "md" | "lg";

export type PrismaneShades =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type PrismaneDefaultColors =
  | "slate"
  | "gray"
  | "coal"
  | "sepia"
  | "red"
  | "orange"
  | "copper"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "diamond"
  | "blue"
  | "amethyst"
  | "violet"
  | "purple"
  | "magenta"
  | "pink"
  | "ruby";

export type PrismaneColors = "primary" | "base" | PrismaneDefaultColors;

export type PrismaneActions = "error" | "warning" | "success" | "info";
