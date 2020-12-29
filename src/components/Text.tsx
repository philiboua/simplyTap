import React from "react"
import { Text as ChakraText } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { IText } from "@src/@interfaces"

const ChakraTextWithMotion = motion.custom(ChakraText)

const Text: React.FC<IText> = ({ children, type, ...props }) => {
  switch (type) {
    case "heading.first":
      return (
        <ChakraTextWithMotion
          lineHeight="none"
          mt={0}
          as="h1"
          fontSize={{ sm: "heading.first.mobile", xl: "heading.first.desktop" }}
          fontWeight="700"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "heading.second":
      return (
        <ChakraTextWithMotion
          lineHeight="heading"
          as="h2"
          fontSize="heading.second"
          fontWeight="700"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "heading.third":
      return (
        <ChakraTextWithMotion
          lineHeight="heading"
          as="h3"
          fontSize="heading.third"
          fontWeight="700"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "subtitle.first":
      return (
        <ChakraTextWithMotion
          lineHeight="subtitle"
          fontSize="subtitle.first"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "subtitle.second":
      return (
        <ChakraTextWithMotion
          lineHeight="subtitle"
          fontSize="subtitle.second"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "introduction":
      return (
        <ChakraTextWithMotion
          lineHeight="introduction"
          fontSize="introduction"
          fontWeight="400"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "body.first":
      return (
        <ChakraTextWithMotion
          lineHeight="body"
          fontSize="body.first"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "body.second":
      return (
        <ChakraTextWithMotion
          lineHeight="body"
          fontSize="body.second"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "caption":
      return (
        <ChakraTextWithMotion
          lineHeight="caption"
          fontSize="caption"
          textTransform="uppercase"
          {...props}
        >
          {children}
        </ChakraTextWithMotion>
      )
    case "legal":
      return (
        <ChakraTextWithMotion lineHeight="legal" fontSize="legal" {...props}>
          {children}
        </ChakraTextWithMotion>
      )
    default:
      return <ChakraTextWithMotion {...props}>{children}</ChakraTextWithMotion>
  }
}

export default Text
