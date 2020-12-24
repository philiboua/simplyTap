import { BoxProps } from "@chakra-ui/react"

export interface IHamburgerButton extends BoxProps {
  data: {
    ariaLabel: string
    menuLabel: string
  }
}
