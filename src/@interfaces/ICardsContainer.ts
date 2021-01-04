import { ICard } from "./ICard"

interface ICardsArray extends ICard {
  id?: string
}

export interface ICardsContainer {
  content: ICardsArray[]
}
