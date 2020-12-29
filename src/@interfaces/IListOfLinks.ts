import { ListProps } from "@chakra-ui/react"
import { ILink } from "./ILink"

export interface IListOfLinks extends ListProps {
  content?: ILink[]
}
