import React from "react"
import Toast from "./Toast"
import { useToasts } from "./context"

const ToastsContainer: React.FC = () => {
  const { toasts, hide } = useToasts()

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          show={toast.show}
          hide={() => hide(toast.id)}
        />
      ))}
    </div>
  )
}

export default ToastsContainer
