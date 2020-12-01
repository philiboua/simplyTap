import React from "react"
import { Flex, FlexOptions } from "@chakra-ui/react"

interface IRow extends FlexOptions {
  children?: React.ReactNode
}

export const Row: React.FC<IRow> = ({ children, ...props }) => {
  return (
    <Flex className="row" {...props}>
      {children}
    </Flex>
  )
}
