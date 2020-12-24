import React from "react"
import { graphql } from "gatsby"
import Header from "@components/patterns/header"
import { ILink } from "@src/@interfaces"

interface IPageQuery {
  data: {
    site: {
      siteMetadata: {
        navigation: ILink[]
      }
    }
  }
}

const Home: React.FC<IPageQuery> = ({ data }) => {
  return <Header content={data.site.siteMetadata.navigation} />
}

export const query = graphql`
  query Navigation {
    site {
      siteMetadata {
        navigation {
          text
          href
          isExternal
          type
        }
      }
    }
  }
`

export default Home
