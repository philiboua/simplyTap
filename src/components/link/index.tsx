/*
  Purpose : Link component is used to navigate within the website 
  Implementation : 
    - When link is external we are using Chakra UI Link component
    - When link is within the site, we are wrapping Gatsby link with Chakra UI link 
  Design : 
    - default design is a regular link 
    - when props asButton and sizeButton are added to component, we display link as Button 

*/
import React from "react"
import { Link as GatsbyLink } from "gatsby-plugin-intl"
import { Link as ChakraLink, useTheme } from "@chakra-ui/react"
import { ILink } from "@src/@interfaces"
import GatsbyLinkAsButton from "./GatsbyLinkAsButton"

const Link: React.FC<ILink> = ({
  href,
  isExternal,
  asButton,
  sizeButton,
  children,
  ...restProps
}) => {
  // Get chakra ui theme object
  const { colors } = useTheme()

  // displays link as button
  if (asButton) {
    return (
      <GatsbyLinkAsButton href={href} sizeButton={sizeButton}>
        {children}
      </GatsbyLinkAsButton>
    )
  }
  // displays as link
  return (
    <ChakraLink
      activeStyle={{ color: colors.brand[400] }}
      {...(isExternal ? { href } : { as: GatsbyLink, to: href })}
      {...restProps}
    >
      {children}
    </ChakraLink>
  )
}

export default Link
