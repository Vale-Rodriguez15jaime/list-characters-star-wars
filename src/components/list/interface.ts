export interface ParamsInterface {
    first: number,
    after?: string
}

export interface ListInterface {
    people: PeopleInterface[],
    pageInfo: PageInfoInterface,
    totalCount: number,
    numberOfPages: number
}

export interface PeopleInterface {
    birthYear: string
    created: string
    edited: string
    name: string
    id: number | string
    eyeColor: string
    skinColor: string
    height: number
}

export interface PageInfoInterface {
    endCursor: string
    hasNextPage: boolean
    hasPreviousPage: boolean
    startCursor: string
}