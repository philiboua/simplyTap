import { TextProps } from "@chakra-ui/react"
import { HTMLMotionProps } from "framer-motion"

type FramerMotionProps =
  | HTMLMotionProps<"h1">
  | HTMLMotionProps<"h2">
  | HTMLMotionProps<"h3">
  | HTMLMotionProps<"p">
type ChakraTextProps = TextProps

type CustomTextProps = {
  type: string
}

export type IText = CustomTextProps & ChakraTextProps & FramerMotionProps
