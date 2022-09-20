import { useEffect, useState, ChangeEvent } from 'react'
import Image from 'next/image'
import { useLazyQuery } from '@apollo/client'
import { Pagination, CircularProgress, Box } from '@mui/material'

import DetailPerson from '../detailPerson'
import { ALL_LIST } from '../../querys/list'
import styles from './list.module.sass'
import CardUser from '../cardUser'
import { ListInterface, ParamsInterface, PeopleInterface } from './interface'

const List = () => {
  const [getList, resultList] = useLazyQuery(ALL_LIST)
  const [list, setList] = useState<ListInterface>({
    pageInfo: {
      endCursor: '',
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: ''
    },
    people: [],
    totalCount: 0,
    numberOfPages: 0
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [open, setOpen] = useState(false)
  const [personSelected, setPersonSelected] = useState<string>('')

  useEffect(() => {
    get()
  }, [])

  useEffect(() => {
    if (resultList.data) {
      const totalCount = resultList.data.allPeople.totalCount || 1
      setList({ ...resultList.data.allPeople, numberOfPages: Math.ceil(totalCount / 10) })
    }
  }, [resultList])

  const get = (endCursor?: string) => {
    let params: ParamsInterface = { first: 10 }
    if (endCursor) {
      params = { ...params, after: endCursor }
    }
    getList({ variables: params })
  }

  const handleOpen = (id: string) => {
    setPersonSelected(id)
    setOpen(!open)
  }

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    get(list.pageInfo.endCursor)
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
        <div className={styles.imageContainer}>
          <Image alt='star-wars' src="/assets/star-wars.svg" width={300} height={300} />
        </div>
      </div>
      <div className={styles.listContainer}>
        {list &&
          list.people &&
          list.people.length > 0 &&
          list.people.map((user: PeopleInterface, index: number) => {
            return <CardUser key={index} user={user} onOpen={handleOpen} />
          })}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          shape="rounded"
          size="large"
          count={list.numberOfPages}
          color="primary"
          page={currentPage}
          onChange={handleChangePage}
        />
      </div>
      <DetailPerson setOpen={setOpen} open={open} id={personSelected} />
    </div>
  )
}

export default List
