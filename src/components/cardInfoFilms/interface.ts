export interface ItemUserInterface {
  key?: number | string,
  value: FilmsInterface
}

export interface FilmsInterface {
  key?: number | string,
  id?: string,
  title?: string
  director?: string
  producers?: string[]
  openingCrawl?: string
  planetConnection?: {
    planets: PlanetsInterface[]
  }
}

export interface PlanetsInterface {
  id: string
  name: string
}
