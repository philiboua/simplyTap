import { ILink } from "./ILink"
import { ListProps } from "@chakra-ui/react"

export interface IListOfLinks extends ListProps {
  content?: ILink[]
}
