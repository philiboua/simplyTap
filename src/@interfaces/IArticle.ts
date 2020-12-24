import { ChakraTextWithMotionType } from "@src/@interfaces"
import { BoxProps } from "@chakra-ui/react"

export interface IArticle extends BoxProps {
  data?: ChakraTextWithMotionType[]
  centerContent?: boolean
  spacing?: number
}
