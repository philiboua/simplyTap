import React from "react"
import { Button, Flex } from "@chakra-ui/react"
import { Container, Row, Column } from "../components/layout"
import { Link as NewLink, useTranslation } from "gatsby-plugin-react-i18next"
import Text from "../components/Text"

const Home = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Row>
        <Column col={["sm4", "md3", "lg12"]}>
          <Flex>
            <Text type="heading.first">
              Gatsby JS and Chakra UI template starter
            </Text>
            <Text type="heading.second"> {t("welcome")}</Text>
          </Flex>
        </Column>
      </Row>
    </Container>
  )
}

export default Home
