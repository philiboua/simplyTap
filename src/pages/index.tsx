import React from "react"

import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { Box } from "@chakra-ui/react"
import { ILink, IFeature, IBillboard, ICard } from "@src/@interfaces"

import {
  Container,
  Header,
  SEO,
  Billboard,
  Features,
  Feature,
  CardsContainer,
  Row,
  Column,
  Article,
  Text,
  Footer,
} from "@src/components"

interface IPageQuery {
  data: {
    homepageJson: {
      billboard: IBillboard
      features: IFeature[]
      cards: ICard[]
    }
    allNavigationJson: {
      nodes: ILink[]
    }
  }
}

const Home: React.FC<IPageQuery> = ({ data }) => {
  const intl = useIntl()

  const {
    caption,
    headline,
    content,
    callToAction,
    image,
  } = data.homepageJson.billboard

  return (
    <>
      <SEO />
      <Header />
      <Box as="main" role="main">
        <Billboard
          caption={intl.formatMessage({ id: `${caption}` })}
          headline={intl.formatMessage({ id: `${headline}` })}
          content={intl.formatMessage({ id: `${content}` })}
          callToAction={callToAction}
          image={image}
        />
      </Box>
      <Box as="section" py={{ md: 16 }} px={{ md: 8 }}>
        <Container>
          <Features data={data.homepageJson.features} />
          <Feature
            reverseGridItemsOrder
            featureImage={data.homepageJson.features[0].featureImage}
            headline={data.homepageJson.features[0].headline}
            content={data.homepageJson.features[0].content}
            caption={data.homepageJson.features[0].caption}
          />
        </Container>
      </Box>
      <Box as="section" id="specifications" py={40}>
        <Container>
          <Row>
            <Column>
              <Article centerContent py={28}>
                <Text type="heading.second" textAlign="center">
                  A better way to send money
                </Text>
                <Text type="body.first">
                  This is to display a card container{" "}
                </Text>
              </Article>
            </Column>
          </Row>
          <Row wrap="wrap">
            <CardsContainer content={data.homepageJson.cards} />
          </Row>
        </Container>
      </Box>
      <Box as="footer" role="contentinfo">
        <Footer />
      </Box>
    </>
  )
}

export const query = graphql`
  query Navigation {
    homepageJson(billboard: {}) {
      billboard {
        caption
        content
        headline
        backgroundImage
        videoBackground
        callToAction {
          asButton
          href
          isExternal
          text
        }
        image {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
      cards {
        id
        type
        link {
          text
          asButton
          href
          isExternal
        }
        image {
          childImageSharp {
            fluid(maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        icon {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        data {
          content
          headline
        }
      }
      features {
        id
        caption
        content
        headline
        link
        featureImage {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`

export default Home
