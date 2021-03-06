import React from "react"

import { IBillboard } from "@src/@interfaces"
import { VStack } from "@chakra-ui/react"
import { Column, Text, ListOfLinks } from "@src/components"

import Img from "gatsby-image"

export const BillboardWithImage: React.FC<IBillboard> = ({
  caption,
  headline,
  content,
  callToAction,
  image,
}) => {
  return (
    <>
      <Column col={["sm4", "md6", "lg5"]} display="flex">
        <VStack
          justify="center"
          alignItems="flex-start"
          heigth="100%"
          maxWidth="30rem"
        >
          {caption && <Text type="caption">{caption}</Text>}
          <Text type="heading.first" mt={0}>
            {headline}
          </Text>
          <Text type="introduction">{content}</Text>
          <ListOfLinks content={callToAction} />
        </VStack>
      </Column>

      <Column col={["sm4", "md6", "lg7"]}>
        {image && (
          <Img fluid={image.childImageSharp.fluid} alt="billboard Image" />
        )}
      </Column>
    </>
  )
}
