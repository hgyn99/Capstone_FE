import { styled } from "styled-components";
import MenuBarLayout from "../../components/MenuBarLayout";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import KakaoLoginModal from "./componenets/KakaoLoginModal";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import LightDetailInfo from "./componenets/LightDetailInfo";

const { kakao } = window;

const Container = styled.div`
  position: relative;
`;

const PlusButton = styled.button`
  position: absolute;
  bottom: ${(props) => (props.isDetailInfoOpen ? "360px" : "116px")};
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
  transition: bottom 0.5s;
`;

const PanToButton = styled.button`
  position: absolute;
  bottom: ${(props) => (props.isDetailInfoOpen ? "310px" : "66px")};
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
  transition: bottom 0.5s;
`;

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [map, setMap] = useState(null);
  const [isDetailInfoOpen, setIsDetailInfoOpen] = useState(false);
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
        errMsg: "geolocation을 사용할수 없음",
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
        <Map
          id="map"
          center={state.center}
          style={{
            width: "100%",
            height: "100vh",
          }}
          level={3}
          minLevel={4}
          onCreate={setMap}
        >
          <MapMarker position={state.center} />
        </Map>
        <PlusButton
          isDetailInfoOpen={isDetailInfoOpen}
          onClick={() => {
            console.log("게시글 작성 버튼");
            setIsDetailInfoOpen((prev) => !prev);
          }}
        >
          <FaPlus />
        </PlusButton>
        <PanToButton isDetailInfoOpen={isDetailInfoOpen} onClick={panTo}>
          <MdMyLocation />
        </PanToButton>
        <LightDetailInfo isDetailInfoOpen={isDetailInfoOpen} />
      </Container>
      <KakaoLoginModal isOpen={isOpen} onRequestClose={handleLoginModal} />
    </MenuBarLayout>
  );
};

export default HomePage;
