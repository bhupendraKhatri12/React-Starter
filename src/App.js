import React, { useState, useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (isClosing) {
      onClose();
    }
  };

  return (
    <div
      className={`toast ${isClosing ? 'closing' : ''}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="toast-message">{message}</div>
    </div>
  );
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addToast = (message) => {
    const newToast = { id: idCounter, message };
    setToasts((prevToasts) => [...prevToasts, newToast]);
    setIdCounter((prevId) => prevId + 1);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-container">
      <button onClick={() => addToast('Toast Message')}>Show Toast</button>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default App;
