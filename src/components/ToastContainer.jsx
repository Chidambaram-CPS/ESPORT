import { TOAST_COLORS, TOAST_ICONS } from '../utils/constants.js';

function ToastContainer({ toasts, remove }) {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`} onClick={() => remove(toast.id)}>
          <div className="toast-icon">{TOAST_ICONS[toast.type]}</div>
          <div>
            <div className="toast-title" style={{ color: TOAST_COLORS[toast.type] }}>
              {toast.title}
            </div>
            <div className="toast-msg">{toast.msg}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
