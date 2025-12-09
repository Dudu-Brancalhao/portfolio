import React from "react";
import "./Modal.scss";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  footerButtons?: React.ReactNode[];
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "extra-large";
  action?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  footerButtons,
  children,
  size = "medium",
  action,
}) => {
  if (!show) return null;

  const sizeClass =
    size === "small" ? "modal-sm" : size === "large" ? "modal-lg" : size === "extra-large" ? "modal-xl" : "modal-md";

  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      role="dialog"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        className={`modal-dialog modal-dialog-centered ${sizeClass}`}
        style={size === "extra-large" ? { ['--bs-modal-width' as any]: '1100px' } : undefined}
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>

            <button
              type="button"
              className="btn-close close-button"
              aria-label="Close"
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                lineHeight: 1,
              }}
            >
              &times;
            </button>
          </div>

          <form id="modal-form" onSubmit={action}>
            <div className="modal-body modal-scroll">{children}</div>

            <div className="modal-footer">{footerButtons && footerButtons}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
