import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { ModalContainer, Wrapper } from "./style";

function useOutsideClick({ ref, callback = () => {} }) {
  useEffect(() => {
    function handleMouseDown(e) {
      if (ref.current && !ref.current.contains(e.target)) callback();
    }

    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, [callback, ref]);
}

function Modal({
  open,
  preventClose,
  handleClose = () => {},
  children,
  maxWidth,
  fullWidth,
  ...rest
}) {
  const container = document.body;
  const eleModal = useRef();

  useOutsideClick({
    ref: eleModal,
    callback: preventClose ? () => {} : handleClose,
  });
  return ReactDOM.createPortal(
    <ModalContainer open={open}>
      <Wrapper
        fullWidth={fullWidth}
        ref={eleModal}
        maxWidth={maxWidth}
        {...rest}
      >
        {children}
      </Wrapper>
    </ModalContainer>,
    container
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  preventClose: PropTypes.bool,
  fullWidth: PropTypes.bool,
  handleClose: PropTypes.func,
  maxWidth: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]),
};

export default Modal;
