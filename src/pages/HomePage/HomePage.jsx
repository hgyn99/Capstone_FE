import { styled } from "styled-components";
import Map from "./componenets/Map";
import MenuBarLayout from "../../components/MenuBarLayout";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
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

const PanToButton = styled.button`
  position: absolute;
  bottom: 66px; // 버튼 상하 위치 조절
  right: 10px;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 0px;
  background-color: white;
  cursor: pointer;
  z-index: 1000;
  font-size: 20px;
`;

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      },
      { enableHighAccuracy: true, maximumAge: 100, timeout: 27000 }
    );
  }, []);

  return (
    <MenuBarLayout>
      <Container>
        <Map latitude={latitude} longitude={longitude} />
        <PlusButton onClick={handleModal}>
          <FaPlus />
        </PlusButton>
        <PanToButton onClick={() => {}}>
          <MdMyLocation />
        </PanToButton>
      </Container>
      <KakaoLoginModal isOpen={isOpen} onRequestClose={handleModal} />
    </MenuBarLayout>
  );
};

export default HomePage;
