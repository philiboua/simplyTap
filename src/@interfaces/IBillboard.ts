import { ILink } from "./ILink"
import { IChildImageSharp } from "./IChildImageSharp"

export interface IBillboard {
  caption?: string
  headline: string
  content: string
  callToAction: ILink[]
  image?: IChildImageSharp
}
