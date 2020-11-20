const React = require("react")
const { ChakraProvider } = require("@chakra-ui/react")
const GlobalCSS = require("./src/components/GlobalCSS").default
const theme = require("./src/chakra-ui/theme/index").default

exports.wrapRootElement = ({ element }) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>
}

exports.wrapPageElement = ({ element }) => {
  return <GlobalCSS>{element}</GlobalCSS>
}
