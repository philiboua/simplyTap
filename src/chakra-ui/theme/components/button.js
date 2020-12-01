export const Button = {
  baseStyle: {
    lineHeight: "1",
    borderRadius: "sm",
    height: "auto",
    fontSize: "16px",
  },
  sizes: {
    lg: {
      fontSize: "md",
    },
  },
  variants: {
    solid: () => ({
      bg: "brand.400",
      color: "white",
      _hover: {
        bg: "brand.500",
        color: "white",
      },
    }),
    outline: () => ({
      bg: "white",
      color: "brand.500",
      borderColor: "brand.500",
      _hover: {
        bg: "brand.50",
        color: "brand.500",
      },
    }),
    ghost: () => ({
      bg: "white",
      color: "brand.500",
      borderColor: "none",
      _hover: {
        bg: "brand.50",
        color: "brand.500",
      },
    }),
    link: () => ({
      bg: "white",
      color: "brand.500",
      borderColor: "none",
      _hover: {
        bg: "white",
        color: "brand.500",
      },
    }),
  },
}
