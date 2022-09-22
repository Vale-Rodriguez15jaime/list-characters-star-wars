import { Modal } from '@mui/material'
import { ModalInterface } from './interface'
import styles from './modal.module.sass'

const ModalComponent = ({ setOpen, open, children }: ModalInterface) => {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className={styles.contentContainer}>
          {children}
        </div>
      </Modal>
    </div>
  )
}

export default ModalComponent
