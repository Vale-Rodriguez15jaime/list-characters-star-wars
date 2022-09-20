import { gql } from '@apollo/client'

export const INFO_PERSON = gql`
  query FilmConnection($personId: ID) {
    person(id: $personId) {
      filmConnection {
        films {
          director
          id
          producers
          title
          openingCrawl
          planetConnection {
            planets {
              id
              name
            }
            totalCount
          }
        }
      }
    }
  }
`
