import React from "react"
import { List, ListItem } from "@chakra-ui/react"
import { ILink, IListOfLinks } from "@src/@interfaces"
import Link from "../link"

const ListOfLinks: React.FC<IListOfLinks> = ({ content, ...props }) => {
  const displayList = content
    ? content.map((link: ILink) => {
        return (
          <ListItem key={link.href}>
            <Link
              fontSize="body.first"
              isExternal={link.isExternal}
              asButton={link.asButton}
              fontWeight="bold"
              href={link.href}
              ml={8}
            >
              {link.text}
            </Link>
          </ListItem>
        )
      })
    : ""

  return (
    <List display="flex" alignItems="center" {...props}>
      {displayList}
    </List>
  )
}

export default ListOfLinks
