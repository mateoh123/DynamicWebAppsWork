import React, { useEffect } from "react";

const WorkModal = ({ isOpen, onClose, children, workTitle }) => {
  // Lock/unlock body scroll when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount (safety)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Background overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:w-1/2 h-full overflow-y-auto shadow-xl transform transition-transform duration-300 translate-x-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-50 border-b p-4 flex justify-between items-center">
          <h2 className="text-3xl font-bold font-stretch-extra-expanded">
            {workTitle}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

export default WorkModal;
