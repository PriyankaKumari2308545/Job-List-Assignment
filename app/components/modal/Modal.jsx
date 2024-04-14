import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-10 pt-7 pb-20 text-center sm:block sm:p-0 relative">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="absolute right-0 px-3 py-3">
                <button onClick={handleClose} className="text-[#1967d2] bg-[#e2eaf8] hover:bg-[#1967d2] hover:text-[#fff] focus:outline-none  p-2 rounded-md  lg:px-4 md:mx-2 text-center border border-transparent   transition-colors duration-300">
                  ⤫
                </button>
              </div>
              <div className="!px-10 py-4 bg-white sm:p-6">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
