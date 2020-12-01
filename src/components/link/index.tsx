/** @jsx jsx */
import React from "react"
import { Link as GatsbyLink } from "gatsby-plugin-react-i18next"
import { Link as ChakraLink, LinkProps, useTheme } from "@chakra-ui/react"

import { css, jsx } from "@emotion/react"

interface ICustomLinkProps extends LinkProps {
  asButton?: boolean
  sizeButton?: string
  href: string
}

const Link: React.FC<ICustomLinkProps> = ({
  href,
  isExternal,
  asButton,
  sizeButton,
  children,
  ...restProps
}) => {
  // Get chakra ui theme object
  const { colors, radii, lineHeights, fontWeights, fontSizes } = useTheme()

  // displays link as button
  if (asButton) {
    const getPaddingValue = () => {
      switch (sizeButton) {
        case "sm":
          return "6px 8px"
        case "md":
          return "12px 16px"
        case "lg":
          return "16px 32px"
        default:
          return "12px 16px"
      }
    }

    const getFontSize = sizeButton === "sm" ? fontSizes.sm : fontSizes.md

    return (
      <GatsbyLink
        to={href}
        css={css`
          text-decoration: none;
          color: ${colors.white};
          background: ${colors.brand[400]};
          font-weight: ${fontWeights.bold};
          padding: ${getPaddingValue()};
          border-radius: ${radii.sm};
          line-height: ${lineHeights[4]};
          font-size: ${getFontSize};
          transition: all 250ms;
          display: inline-flex;
          align-items: center;
          &:hover {
            text-decocation: none;
            background: ${colors.brand[500]};
          }
        `}
      >
        {children}
      </GatsbyLink>
    )
  }
  // displays as link
  return (
    <ChakraLink
      {...(isExternal ? { href } : { as: GatsbyLink, to: href })}
      {...restProps}
    >
      {children}
    </ChakraLink>
  )
}

export default Link
