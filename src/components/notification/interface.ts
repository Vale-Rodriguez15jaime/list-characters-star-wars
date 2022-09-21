export interface NotificationProps {
  open: boolean
  message: string
  type: "success" | "info" | "warning" | "error"
  onClose: Function
}
