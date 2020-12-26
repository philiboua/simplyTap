/**
 * @purpose The billboard is the main element the end user will see first when the page loads,
 * The purpose of the billboard is to highlight key elements about a product and/or company value proposition.
 *
 */

import React from "react"

import {
  Link as ChakraLink,
  LinkProps,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react"
import { Container, Column, Row } from "@components/layout"
import Text from "@components/Text"
import ListOfLinks from "@components/listOfLinks"
import Img from "gatsby-image"

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
  image?: {
    fluid: {
      aspectRatio: number
      base64: string
      src: string
      srcSet: string
      sizes: string
    }
  }
}

const Billboard: React.FC<IBillboard> = ({
  caption,
  headline,
  content,
  callToAction,
  image,
}) => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <VStack
              alignItems={image === undefined ? "center" : "flex-start"}
              pt={12}
            >
              {caption && <Text type="caption">{caption}</Text>}
              <Text type="heading.first">{headline}</Text>
              <Text type="body.first">{content}</Text>
              <ListOfLinks content={callToAction} />
            </VStack>
          </Column>
          {image !== undefined && (
            <Column>
              <Img fluid={image.fluid} alt="billboard Image" />
            </Column>
          )}
        </Row>
      </Container>
    </Box>
  )
}

export default Billboard
