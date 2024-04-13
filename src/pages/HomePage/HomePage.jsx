import { styled } from "styled-components";
import MenuBarLayout from "../../components/MenuBarLayout";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import KakaoLoginModal from "./componenets/KakaoLoginModal";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const { kakao } = window;

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
  const [map, setMap] = useState(null);
  // 기본 위치 상태
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const handleLoginModal = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  const panTo = () => {
    const newLatLng = new kakao.maps.LatLng(state.center.lat, state.center.lng);
    console.log(newLatLng);
    map.panTo(newLatLng);
  };

  return (
    <MenuBarLayout>
      <Container>
        <Map // 지도를 표시할 Container
          id="map"
          center={state.center}
          style={{
            // 지도의 크기
            width: "100%",
            height: "100vh",
          }}
          level={3} // 지도의 확대 레벨
          minLevel={4}
          onCreate={setMap}
        >
          <MapMarker // 마커를 생성합니다
            position={state.center}
          />
        </Map>
        <PlusButton onClick={handleLoginModal}>
          <FaPlus />
        </PlusButton>
        <PanToButton onClick={panTo}>
          <MdMyLocation />
        </PanToButton>
      </Container>
      <KakaoLoginModal isOpen={isOpen} onRequestClose={handleLoginModal} />
    </MenuBarLayout>
  );
};

export default HomePage;
