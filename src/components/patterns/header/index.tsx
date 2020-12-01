import React from "react"
import { Flex } from "@chakra-ui/react"
import Navigation from "@components/navigation"

import logo from "@images/logo-1.svg"

const Header: React.FC = () => {
  return (
    <Flex justify="space-between" alignItems="center">
      <img src={logo} alt="logo" />
      <Navigation />
    </Flex>
  )
}

export default Header
