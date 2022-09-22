import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useLazyQuery } from '@apollo/client'
import { CircularProgress, Box } from '@mui/material'

import DetailPerson from '../detailPerson'
import { ALL_LIST } from '../../querys/list'
import styles from './list.module.sass'
import CardUser from '../cardUser'
import { ListInterface, ParamsInterface, PeopleInterface } from './interface'
import Notification from '../notification'

const List = () => {
  const listRef = useRef<HTMLDivElement>(null)
  const [showError, setShowError] = useState<boolean>(false)
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
  const [open, setOpen] = useState(false)
  const [personSelected, setPersonSelected] = useState<string>('')

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
    if (resultList.error) {
      setShowError(true)
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

  const handleScroll = () => {
    if (listRef && listRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = listRef && listRef.current
      if (
        !resultList.loading &&
        list.people?.length < list.totalCount &&
        scrollHeight - clientHeight - Math.round(scrollTop) < 100
      ) {
        get(list.pageInfo.endCursor)
      }
    }
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <Notification
          open={showError}
          message="Error fetching list"
          type="error"
          onClose={setShowError}
        />
        <div className={styles.imageContainer}>
          <Image alt="star-wars" src="/assets/star-wars.svg" width={200} height={200} />
        </div>
      </div>
      {resultList.loading && list.people.length === 0 && (
        <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
          <CircularProgress size={80} />
        </Box>
      )}
      <div ref={listRef} onScroll={handleScroll} className={styles.wrapperList}>
        <div className={styles.listContainer}>
          {list &&
            list.people &&
            list.people.map((user: PeopleInterface, index: number) => {
              return <CardUser key={index} user={user} onOpen={handleOpen} />
            })}
        </div>
        {resultList.loading && list.people.length > 0 && (
          <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <CircularProgress size={90} />
          </Box>
        )}
      </div>
      <DetailPerson setOpen={setOpen} open={open} id={personSelected} />
    </div>
  )
}

export default List
