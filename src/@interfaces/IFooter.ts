import { IText, IChildImageSharp, ILink } from "@src/@interfaces"
import { LinkProps } from "@chakra-ui/react"

export interface ISocialMediaLinks extends LinkProps {
  id: "string"
  href: "string"
}

export interface IFooter {
  data: {
    companyLogo: IChildImageSharp
    copyright: IText
    companyMission: IText
    footerLinks: ILink[]
    socialMedia: ISocialMediaLinks[]
  }
}
