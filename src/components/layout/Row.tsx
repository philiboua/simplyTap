import React from "react"
import { Flex, FlexOptions } from "@chakra-ui/react"

export const Row: React.FC<FlexOptions> = ({ children, ...props }) => {
  return (
    <Flex className="row" {...props}>
      {children}
    </Flex>
  )
}
