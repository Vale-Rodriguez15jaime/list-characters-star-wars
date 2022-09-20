import { gql } from '@apollo/client'

export const ALL_LIST = gql`
  query ListQuery($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      people {
        birthYear
        created
        edited
        name
        id
        gender
        height
      }
      totalCount
    }
  }
`
