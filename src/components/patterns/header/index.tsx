import React from "react"
import { Flex, useMediaQuery } from "@chakra-ui/react"
import Navigation from "@components/navigation"
import Link from "@components/link"
import HamburgerButton from "@components/button/HamburgerButton"

import logo from "@images/logo-1.svg"

const Header: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 992px")
  return (
    <Flex justify="space-between" as="header" alignItems="center" mt={3}>
      <Link href="/">
        <img src={logo} alt="logo" />
      </Link>

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
