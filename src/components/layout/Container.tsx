import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"

export const Container = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      width="100%"
      maxWidth={{ sm: "540px", md: "720px", lg: "960px", xl: "1200px" }}
      className="container"
      marginLeft="auto"
      marginRight="auto"
      {...props}
    >
      {children}
    </Box>
  )
}
