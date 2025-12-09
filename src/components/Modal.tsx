import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  footerButtons?: React.ReactNode[];
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "extra-large" | "fullscreen";
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
    size === "small"
      ? "max-w-sm"
      : size === "large"
      ? "max-w-3xl"
      : size === "extra-large"
      ? "max-w-6xl"
      : size === "fullscreen"
      ? "max-w-100vw"
      : "max-w-lg";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      tabIndex={-1}
      role="dialog"
    >
      <div
        className={`relative w-full ${sizeClass}`}
        role="document"
      >
        <div className="relative flex flex-col w-full bg-[#101216] border-0 rounded-lg shadow-lg">
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
            <h5 className="text-2xl font-semibold">{title}</h5>

            <button
              type="button"
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              aria-label="Close"
              onClick={onClose}
            >
              <span className="h-6 w-6 text-2xl block outline-none focus:outline-none text-gray-500 hover:text-gray-800">×</span>
            </button>
          </div>

          <form id="modal-form" onSubmit={action}>
            <div className="relative p-6 flex-auto overflow-y-auto max-h-[60vh]">{children}</div>

            <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">{footerButtons && footerButtons}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
