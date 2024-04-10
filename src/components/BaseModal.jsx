import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 2000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "12px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    width: "350px",
    height: "175px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
};

Modal.setAppElement("#root"); // 웹 접근성을 위한 설정

const BaseModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      {children}
    </Modal>
  );
};

export default BaseModal;
