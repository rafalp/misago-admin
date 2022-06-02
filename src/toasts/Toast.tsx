import { t } from "@lingui/macro"
import classnames from "classnames"
import React from "react"

type ToastProps = {
  type: string
  message: React.ReactNode
  show?: boolean
  hide?: () => void
}

const Toast: React.FC<ToastProps> = ({ type, message, show, hide }) => (
  <div
    aria-live="assertive"
    aria-atomic="true"
    className={classnames("toast fade show", "toast-" + type, {
      showing: !show,
    })}
    role="alert"
  >
    <div className="toast-layout">
      <div className="toast-body">{message}</div>
      <button
        aria-label={t({ id: "close", message: "Close" })}
        className="btn-close btn-close-white"
        type="button"
        onClick={hide}
      />
    </div>
  </div>
)

export default Toast
