import React from "react"
import { graphql } from "gatsby"
import Header from "@components/patterns/header"
import { ILink } from "@src/@interfaces"
import SEO from "@src/components/seo"

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
  return (
    <>
      <SEO />
      <Header content={data.site.siteMetadata.navigation} />
    </>
  )
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
