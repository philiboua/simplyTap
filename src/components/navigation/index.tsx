import React from "react"
import { List, ListItem } from "@chakra-ui/react"
import Link from "../link"
import { ILink, defaultData } from "./defaultData"

interface IListOfLinks {
  data?: ILink[]
}

const ListOfLinks: React.FC<IListOfLinks> = ({ data, ...props }) => {
  const displayListFromData = data
    ? data.map((link: ILink) => {
        return (
          <ListItem key={link.href}>
            <Link isExternal={link.isExternal} href={link.href} {...props}>
              {link.text}
            </Link>
          </ListItem>
        )
      })
    : ""

  const displayDefaultList = defaultData.map(link => {
    return (
      <ListItem key={link.href}>
        <Link
          fontSize="body.first"
          isExternal={link.isExternal}
          fontWeight="bold"
          href={link.href}
          ml={8}
          {...props}
        >
          {link.text}
        </Link>
      </ListItem>
    )
  })

  return (
    <List display="flex">
      {data ? displayListFromData : displayDefaultList}
    </List>
  )
}

export default ListOfLinks
