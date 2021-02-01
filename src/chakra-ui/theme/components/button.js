export const Button = {
  baseStyle: {
    lineHeight: "1",
    borderRadius: "5px",
    height: "auto",
    fontSize: "16px",
    fontWeight: "500",
  },
  sizes: {
    lg: {
      fontSize: "md",
    },
  },
  variants: {
    solid: () => ({
      bg: "alpha.alertLight",
      color: "white",
      _hover: {
        bg: "alpha.alertDark",
        color: "white",
      },
    }),
    outline: () => ({
      bg: "white",
      color: "alpha.alertLight",
      borderColor: "alpha.alertLight",
      _hover: {
        bg: "brand.50",
        color: "brand.500",
      },
    }),
    ghost: () => ({
      bg: "white",
      color: "alpha.alertLight",
      borderColor: "none",
      _hover: {
        bg: "brand.50",
        color: "alpha.alertLight",
      },
    }),
    link: () => ({
      bg: "white",
      color: "alpha.alertLight",
      borderColor: "none",
      _hover: {
        bg: "white",
        color: "alpha.alertLight",
      },
    }),
  },
}
