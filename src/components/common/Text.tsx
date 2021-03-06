import { styled } from "../../theme/baseTheme";

export const Text = styled("span", {
  // Reset
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",

  variants: {
    size: {
      xs: {
        fontSize: "$xs",
      },
      sm: {
        fontSize: "$sm",
      },
      base: {
        fontSize: "$base",
      },
      lg: {
        fontSize: "$lg",
      },
      xl: {
        fontSize: "$xl",
        letterSpacing: "-.015em",
      },
      "2xl": {
        fontSize: "$2xl",
        letterSpacing: "-.016em",
      },
      "3xl": {
        fontSize: "$3xl",
        letterSpacing: "-.031em",
        textIndent: "-.005em",
      },
      "4xl": {
        fontSize: "$4xl",
        letterSpacing: "-.034em",
        textIndent: "-.018em",
      },
      "5xl": {
        fontSize: "$5xl",
        letterSpacing: "-.055em",
        textIndent: "-.025em",
      },
    },
    variant: {
      red: {
        color: "$red11",
      },
      crimson: {
        color: "$crimson11",
      },
      pink: {
        color: "$pink11",
      },
      purple: {
        color: "$purple11",
      },
      violet: {
        color: "$violet11",
      },
      indigo: {
        color: "$indigo11",
      },
      blue: {
        color: "$blue11",
      },
      cyan: {
        color: "$cyan11",
      },
      teal: {
        color: "$teal11",
      },
      green: {
        color: "$green11",
      },
      lime: {
        color: "$lime11",
      },
      yellow: {
        color: "$yellow11",
      },
      orange: {
        color: "$orange11",
      },
      gold: {
        color: "$gold11",
      },
      bronze: {
        color: "$bronze11",
      },
      gray: {
        color: "$slate11",
      },
      contrast: {
        color: "$hiContrast",
      },
    },
  },

  defaultVariants: {
    size: "base",
    variant: "gray",
  },
});
