import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../UI/Button";

const Modal = forwardRef(function Modal({ children, buttonLabel, className }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className={`${className}`}>
      {children}
      <form method="dialog">
        <Button>{buttonLabel}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
