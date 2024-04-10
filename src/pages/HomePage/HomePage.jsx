import { styled } from "styled-components";
import Map from "./componenets/Map";
import MenuBarLayout from "../../components/MenuBarLayout";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import KakaoLoginModal from "./componenets/KakaoLoginModal";

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
  background-color: #535ce8;
  color: white;
  cursor: pointer;
  z-index: 1000;
  font-size: 20px;
`;

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <MenuBarLayout>
      <Container>
        <Map />
        <PlusButton onClick={handleModal}>
          <FaPlus />
        </PlusButton>
        <KakaoLoginModal
          isOpen={isOpen}
          onRequestClose={handleModal}
        ></KakaoLoginModal>
      </Container>
    </MenuBarLayout>
  );
};

export default HomePage;
