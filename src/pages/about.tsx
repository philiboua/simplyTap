import React from "react"
import Text from "@components/Text"
import { Container, Row, Column } from "@components/layout"
import { Flex } from "@chakra-ui/react"
import Navigation from "@components/navigation"

const About = (): React.ReactElement => {
  return (
    <Container>
      <Row>
        <Column col={["sm4", "md3", "lg12"]}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text type="heading.second">About us</Text>
            <Navigation />
          </Flex>
        </Column>
      </Row>
    </Container>
  )
}

export default About
