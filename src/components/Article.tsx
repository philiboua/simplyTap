import React from "react"
import { IArticle, IText } from "@src/@interfaces"
import Text from "@components/Text"
import { VStack, Box } from "@chakra-ui/react"

const Article: React.FC<IArticle> = ({
  data,
  centerContent,
  spacing,
  children,
  ...props
}) => {
  return (
    <Box as="article" {...props}>
      <VStack
        spacing={spacing || 1}
        alignItems={centerContent ? "center" : "flex-start"}
      >
        {data
          ? data.map((item: IText) => {
              return <Text type={item.type} />
            })
          : children}
      </VStack>
    </Box>
  )
}

export default Article
