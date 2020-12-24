import React from "react"
import Text from "@components/Text"
import { Container, Row, Column } from "@components/layout"
import Header from "@components/patterns/header"

const About = (): React.ReactElement => {
  return (
    <Container>
      <Row>
        <Column col={["sm4", "md3", "lg12"]}>
          <Header />
        </Column>
      </Row>
    </Container>
  )
}

export default About
