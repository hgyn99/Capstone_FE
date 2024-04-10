import { styled } from "styled-components";
import Map from "./componenets/Map";
import MenuBarLayout from "../../components/MenuBarLayout";
import React, { useState } from "react";
import Modal from "./componenets/Modal";
import { FaPlus } from "react-icons/fa6";

const Container = styled.div`
  position: relative;
`;

const PlusButton = styled.button`
  position: absolute;
  bottom: 116px; // 버튼 상하 위치 조절
  right: 10px;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 0px;
  background-color: #535CE8;
  color: white;
  cursor: pointer;
  z-index: 1000;
  font-size: 20px;
`;

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <MenuBarLayout>
      <Container>
        <Map />
        <PlusButton onClick={openModal} ><FaPlus /></PlusButton>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        </Modal>
      </Container>
    </MenuBarLayout>
  );
};

export default HomePage;
