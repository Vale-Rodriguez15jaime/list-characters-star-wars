import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import {
  Typography,
  CardContent,
  Card,
  CardActions,
  Button,
  CircularProgress,
  Box
} from '@material-ui/core'

import DetailPerson from '../detailPerson'
import { ALL_LIST } from '../../querys/list'
import styles from './list.module.sass'

const List = () => {
  const [getList, resultList] = useLazyQuery(ALL_LIST)
  const [list, setList] = useState(null)
  const [open, setOpen] = useState(false)
  const [personSelected, setPersonSelected] = useState(null)

  const get = endCursor => {
    let params = { first: 10 }
    if (endCursor) {
      params = { ...params, after: endCursor }
    }
    getList({ variables: params })
  }

  useEffect(() => {
    get()
  }, [])

  useEffect(() => {
    if (resultList.data) {
      if (list && list.people && list.people.length > 0) {
        const { pageInfo, people } = resultList.data.allPeople
        setList({ ...list, pageInfo: pageInfo, people: [...list.people, ...people] })
      } else {
        setList(resultList.data.allPeople)
      }
    }
  }, [resultList])

  const handleOpen = id => {
    setPersonSelected(id)
    setOpen(!open)
  }

  if (resultList.loading) {
    return (
      <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
        <CircularProgress size={80} />
      </Box>
    )
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <Typography variant="h4" align="center">
          Personajes de Star wars
        </Typography>
      </div>
      <div className={styles.listContainer}>
        {list &&
          list.people &&
          list.people.length > 0 &&
          list.people.map((user, index) => {
            return (
              <Card
                key={index}
                style={{ backgroundColor: 'rgb(18, 18, 18)', color: 'white' }}
                sx={{ minWidth: 275, background: 'black' }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} variant="body2">
                    Altura: {user.height}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => handleOpen(user.id)}
                    color="primary"
                    variant="outlined"
                    size="small"
                  >
                    Ver información
                  </Button>
                </CardActions>
              </Card>
            )
          })}
      </div>
      <button onClick={() => get(list.pageInfo.endCursor)}>Cargar mas</button>
      <DetailPerson setOpen={setOpen} open={open} id={personSelected} />
    </div>
  )
}

export default List
