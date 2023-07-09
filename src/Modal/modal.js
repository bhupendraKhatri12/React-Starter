import React from 'react';
import './modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  const modalClass = isOpen ? 'modal open' : 'modal';
  const overlayClass = isOpen ? 'modal-overlay open' : 'modal-overlay';

  if (!isOpen) return null;

  return (
    <div className={overlayClass}>
      <div className={modalClass}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
