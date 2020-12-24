/**
 * @purpose The billboard is the main element the end user will see first when the page loads,
 * The purpose of the billboard is to highlight key elements about a product and/or company value proposition.
 *
 */

import React from "react"
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react"

interface ICustomLinkProps extends LinkProps {
  asButton?: boolean
  sizeButton?: string
  href: string
}

interface IBillboard {
  caption?: string
  headline: string
  content: string
  callToAction: ICustomLinkProps[]
  image: string
}

const Billboard: React.FC<IBillboard> = () => {
  return <div>Hello</div>
}

export default Billboard
