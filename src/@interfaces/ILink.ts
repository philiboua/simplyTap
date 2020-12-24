import { LinkProps } from "@chakra-ui/react"

export interface ILink extends LinkProps {
  asButton?: boolean
  sizeButton?: string
  href: string
}
