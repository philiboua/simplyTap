import React from "react"
import { Flex, useMediaQuery } from "@chakra-ui/react"
import Navigation from "@components/navigation"
import HamburgerButton from "@components/button/HamburgerButton"

import logo from "@images/logo-1.svg"

const Header: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 992px")
  return (
    <Flex justify="space-between" as="header" alignItems="center">
      <img src={logo} alt="logo" />
      {isDesktop ? (
        <Navigation />
      ) : (
        <HamburgerButton
          data={{
            ariaLabel: "Navigation menu",
            menuLabel: "MENU",
          }}
        />
      )}
    </Flex>
  )
}

export default Header
