import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Container, Row, Column } from "@components/layout"
import Header from "@components/patterns/header"

const Home = (): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <Container>
      <Row align="center">
        <Column col={["sm4", "md3", "lg12"]}>
          <Header />
        </Column>
      </Row>
    </Container>
  )
}

export default Home
