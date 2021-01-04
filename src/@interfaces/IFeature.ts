import { IText } from "./IText"
import { ILink } from "./ILink"
import { IChildImageSharp } from "./IChildImageSharp"

export interface IFeature {
  id?: string
  featureImage: IChildImageSharp
  headline: IText
  content: IText
  caption?: IText
  link?: ILink
  reverseGridItemsOrder?: boolean
}
