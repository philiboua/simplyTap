import React from "react"
import Text from "@components/Text"
import { Container, Row, Column } from "@components/layout"

const Contact = (): React.ReactElement => {
  return (
    <Container>
      <Row>
        <Column col={["sm4"]}>
          <Text type="heading.first">Contact</Text>
        </Column>
      </Row>
    </Container>
  )
}

export default Contact
