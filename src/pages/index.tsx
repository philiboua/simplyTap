import React from "react"
import { Button, Flex, Link } from "@chakra-ui/react"
import { Container, Row, Column } from "../components/layout"
import Text from "../components/Text"

const Home = () => {
  return (
    <Container>
      <Row>
        <Column col={["sm4", "md3", "lg12"]}>
          <Flex>
            <Text type="heading.first">
              Gatsby JS and Chakra UI template starter
            </Text>
          </Flex>
        </Column>
      </Row>
    </Container>
  )
}

export default Home
