import React, { useEffect } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  description: React.ReactNode;
  footerButtons?: React.ReactNode[];
  gallery: React.ReactNode;
  size?: "small" | "medium" | "large" | "extra-large" | "fullscreen";
  action?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  description,
  footerButtons,
  gallery,
  size = "medium",
  action,
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  if (!show) return null;

  const sizeClass =
    size === "small"
      ? "max-w-sm"
      : size === "large"
        ? "max-w-3xl"
        : size === "extra-large"
          ? "max-w-6xl"
          : size === "fullscreen"
            ? "w-full h-full"
            : "max-w-lg";

  const isFullscreen = size === "fullscreen";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50"
      tabIndex={-1}
      role="dialog"
    >
      <div
        className={`relative ${isFullscreen ? 'w-full h-full' : `w-full ${sizeClass}`}`}
        role="document"
      >
        <div className="fixed z-[1] right-0 top-0 p-[20px] ml-auto ">
          <button
            type="button"
            className="bg-transparent hover:bg-white hover:scale-115 transition-all duration-[400ms] border border-[#707070] rounded-md text-black float-right text-3xl leading-none outline-none focus:outline-none"
            aria-label="Close"
            onClick={onClose}
          >
            <span className="flex justify-center items-center h-6 w-6 text-2xl block outline-none focus:outline-none text-white hover:text-gray-500">×</span>
          </button>
        </div>
        <div className={`relative grid grid-cols-[440px_1fr] w-full bg-[#101216] border-0 shadow-lg ${isFullscreen ? 'h-full' : 'rounded-lg'}`}>
          <div className="overflow-y-auto custom-scrollbar items-start justify-between flex-shrink-0">
            {description}
          </div>

          {gallery}

        </div>
      </div>
    </div>
  );
};

export default Modal;
