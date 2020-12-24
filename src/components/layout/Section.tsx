import React from "react"
import { ISection } from "@src/@interfaces"
import { Box } from "@chakra-ui/react"
import { Container } from "@components/layout"

export const Section: React.FC<ISection> = ({ withContainer, children }) => {
  if (withContainer) {
    return (
      <Box as="section">
        <Container>{children}</Container>
      </Box>
    )
  }

  return <Box as="section">{children}</Box>
}
