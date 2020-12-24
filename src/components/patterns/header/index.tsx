import React from "react"
import { Flex, Box, useMediaQuery } from "@chakra-ui/react"
import { Container, Column, Row } from "@components/layout"
import Navigation from "@src/components/listOfLinks"
import Link from "@components/link"
import HamburgerButton from "@components/button/HamburgerButton"
import logo from "@images/logo-1.svg"
import { IListOfLinks } from "@src/@interfaces"

const Header: React.FC<IListOfLinks> = ({ content }) => {
  const [isDesktop] = useMediaQuery("(min-width: 992px")
  return (
    <Box as="header" bg="#FFA500" py={2}>
      <Container>
        <Row>
          <Column col={["sm4", "md6", "lg12"]}>
            <Flex
              justify="space-between"
              as="nav"
              role="navigation"
              alignItems="center"
              mt={3}
            >
              <Link href="/">
                <img src={logo} alt="logo" />
              </Link>

              {isDesktop ? (
                <Navigation content={content} />
              ) : (
                <HamburgerButton
                  data={{
                    ariaLabel: "Navigation menu",
                    menuLabel: "MENU",
                  }}
                />
              )}
            </Flex>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default Header
