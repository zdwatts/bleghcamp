import React, { useState } from "react";
import { Modal, ModalProvider } from "../../context/Modal";
import LoginForm from "./LoginForm";

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalProvider>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </ModalProvider>
  );
};

export default LoginFormModal;
