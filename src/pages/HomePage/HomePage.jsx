import { styled } from "styled-components";
import Map from "./componenets/Map";
import plusButton from "../../assets/icon/plusButton.png";
import React, { useState } from "react";
import Modal from "./componenets/Modal";

const Container = styled.div`
  position: relative;
`;

const PlusButton = styled.button`
  position: absolute;
  bottom: 66px;
  right: 10px;
  border: none;
  border-radius: 50%;
  padding: 25px 25px;
  background: url(${plusButton}) no-repeat center center;
  background-size: cover;
  color: white;
  cursor: pointer;
  z-index: 1000; // Add this line
`;

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClick = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Map />
      <PlusButton onClick={handleButtonClick} />
      <Modal isOpen={isModalOpen} onClick={handleModalClick}>
        <p>This is a modal. Click anywhere to close.</p>
      </Modal>
    </Container>
  );
};

export default HomePage;
