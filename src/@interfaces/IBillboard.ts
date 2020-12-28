import { ILink } from "./ILink"

export interface IBillboard {
  caption?: string
  headline: string
  content: string
  callToAction: ILink[]
  image?: {
    fluid: {
      aspectRatio: number
      base64: string
      src: string
      srcSet: string
      sizes: string
    }
  }
}
