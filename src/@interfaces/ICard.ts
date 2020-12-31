import { IChildImageSharp } from "./IChildImageSharp"

export interface ICard {
  id?: string
  type: string
  image?: IChildImageSharp
  icon?: IChildImageSharp
  link?: {
    text: string
    asButton?: boolean
    href: string
    isExternal?: boolean
  }
  data: {
    headline: string
    content: string
  }
}
