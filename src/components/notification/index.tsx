import { useEffect } from 'react'
import { Alert, Collapse } from '@mui/material'

import { NotificationProps } from './interface'
import styles from './notification.module.sass'

const Notification = ({ open, message, type, onClose }: NotificationProps) => {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        onClose(!open)
      }, 4000)
    }
  }, [open])

  return (
    <div className={styles.wrapper}>
      <Collapse in={open}>
        <Alert severity={type}>{message}</Alert>
      </Collapse>
    </div>
  )
}

export default Notification
