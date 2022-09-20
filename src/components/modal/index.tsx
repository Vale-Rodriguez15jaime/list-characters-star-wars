import { Box, Modal } from '@material-ui/core'
import { ModalInterface } from './interface'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40rem',
  backgroundColor: '#0b141e',
  padding: '1rem',
  borderRadius: '20px',
  border: 'transparent',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflow: 'auto',
  maxHeight: '80vh'
}

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
        <Box style={{ ...style }} sx={{ width: 400 }}>
          {children}
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent
