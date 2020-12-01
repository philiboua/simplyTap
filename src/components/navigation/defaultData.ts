export interface ILink {
  text: string
  href: string
  isExternal: boolean
  type: string
  onClickHandler?: () => void
}

export const defaultData: ILink[] = [
  {
    text: "First",
    href: "/",
    isExternal: false,
    type: "link",
  },
  {
    text: "Second",
    href: "/about",
    isExternal: false,
    type: "link",
  },
  {
    text: "Third",
    href: "/contact",
    isExternal: false,
    type: "link",
  },
]
