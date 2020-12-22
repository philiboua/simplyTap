import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"

export const Container: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      width="100%"
      maxWidth={{ md: "720px", lg: "960px", xl: "1200px" }}
      className="container"
      marginLeft="auto"
      marginRight="auto"
      {...props}
    >
      {children}
    </Box>
  )
}
