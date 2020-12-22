import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Container, Row, Column } from "@components/layout"
import Header from "@components/patterns/header"
import HamburgerButton from "@components/button/HamburgerButton"

const Home = (): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <Container>
      <Row align="center">
        <Column col={["sm4", "md3", "lg12"]}>
          <Header />
          <HamburgerButton
            data={{
              ariaLabel: "Navigation menu",
              displayLabel: [true],
              menuLabel: "MENU",
            }}
          />
        </Column>
      </Row>
    </Container>
  )
}

export default Home
