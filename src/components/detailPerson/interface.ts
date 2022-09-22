import { FilmsInterface } from '../cardInfoFilms/interface'

export interface PersonInterface {
  films: FilmsInterface[]
}

export interface DetailInterface {
  id?: string
  setOpen: Function
  open: boolean
}
