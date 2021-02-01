/** @jsx jsx */
import React from "react"

import { Link as GatsbyLink } from "gatsby-plugin-intl"
import { useTheme } from "@chakra-ui/react"
import { IGatsbyLinkAsButton } from "@src/@interfaces"

import { css, jsx } from "@emotion/react"

const GatsbyLinkAsButton: React.FC<IGatsbyLinkAsButton> = ({
  sizeButton,
  href,
  children,
}) => {
  // Get chakra ui theme object
  const { colors, radii, lineHeights, fontWeights, fontSizes } = useTheme()

  const getPaddingValue = () => {
    switch (sizeButton) {
      case "sm":
        return "9px 22px"
      case "md":
        return "13px 20px"
      case "lg":
        return "16px 32px"
      default:
        return "13px 20px"
    }
  }

  const getFontSize = sizeButton === "sm" ? fontSizes.sm : fontSizes.md
  return (
    <GatsbyLink
      to={href}
      css={css`
        text-decoration: none;
        color: ${colors.white};
        background: ${colors.alpha.alertLight};
        font-weight: 500;
        padding: ${getPaddingValue()};
        border-radius: 5px;
        line-height: 22px;
        font-size: ${getFontSize};
        transition: all 250ms;
        display: inline-flex;
        align-items: center;
        &:hover {
          text-decocation: none;
          background: ${colors.alpha.alertDark};
        }
      `}
    >
      {children}
    </GatsbyLink>
  )
}

export default GatsbyLinkAsButton
