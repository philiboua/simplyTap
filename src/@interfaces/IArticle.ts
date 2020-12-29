import { IText } from "@src/@interfaces"
import { BoxProps } from "@chakra-ui/react"

export interface IArticle extends BoxProps {
  data?: IText[]
  centerContent?: boolean
  spacing?: number
}
