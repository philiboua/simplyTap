import React from "react"
import { Container, Row, Column } from "@components/layout"
import Header from "@components/patterns/header"

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
