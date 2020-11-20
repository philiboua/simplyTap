import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"

interface IHamburgerButton extends BoxProps {
  data: {
    menu: string
  }
}
const HamburgerButton = ({ ...props }: IHamburgerButton) => {
  return <Box></Box>
}
