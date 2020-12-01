// /tests/test-utils.js

import React from "react"
import { render } from "@testing-library/react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../chakra-ui/theme"

const AllTheProviders = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

const customRender = (ui, options) => {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  })
}

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
