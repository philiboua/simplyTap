import { LinkProps } from "@chakra-ui/react"
import { IGatsbyLinkAsButton } from "./IGatsbyLinkAsButton"

export interface ILink extends LinkProps, IGatsbyLinkAsButton {
  asButton?: boolean
  isExternal?: boolean
  text?: string
  href: string
}
