import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Container, Row, Column } from "@components/layout"
import Header from "@components/patterns/header"
import HamburgerButton from "@components/button/HamburgerButton"
import { Text } from "@chakra-ui/react"

const Home = (): React.ReactElement => {
  return (
    <Container>
      <Row align="center">
        <Column col={["sm4", "md6", "lg12"]}>
          <Header />
        </Column>
      </Row>
    </Container>
  )
}

export default Home
