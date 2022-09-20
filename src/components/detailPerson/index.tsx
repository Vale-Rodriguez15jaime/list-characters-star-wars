import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Typography, CircularProgress, Box } from '@material-ui/core'

import ModalComponent from '../modal'
import CardInfoFilms from '../cardInfoFilms'

import { INFO_PERSON } from '../../querys/person'
import { DetailInterface, PersonInterface } from './interface'

const DetailPerson = ({ setOpen, open, id }: DetailInterface) => {
  const [getPerson, result] = useLazyQuery(INFO_PERSON)
  const [data, setData] = useState<PersonInterface>({
    films: []
  })

  useEffect(() => {
    if (id) {
      getPerson({ variables: { personId: id } })
    }
  }, [id])

  useEffect(() => {
    if (result.data && result.data.person) {
      setData(result.data.person.filmConnection)
    }
  }, [result])

  return (
    <div>
      <ModalComponent setOpen={setOpen} open={open}>
        <>
          <Typography
            style={{ color: '#C2E0FF', fontWeight: '800' }}
            align="center"
            variant="h6"
            gutterBottom
          >
            FILMS
          </Typography>
          {result.loading && (
            <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
              <CircularProgress size={80} />
            </Box>
          )}
          {!result.loading &&
            data &&
            data.films &&
            data.films.map(value => {
              return (
                <div key={value.id}>
                  <CardInfoFilms value={value} />
                </div>
              )
            })}
        </>
      </ModalComponent>
    </div>
  )
}

export default DetailPerson
