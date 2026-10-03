import {
  createContext,
  useContext,
  useState,
} from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast({
      message,
    });
  };

  const hideToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider
      value={{
        toast,
        showToast,
        hideToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}