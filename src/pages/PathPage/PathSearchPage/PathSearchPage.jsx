import { styled } from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import locationIcon from "../../../assets/icon/location.png";
import backwardIcon from "../../../assets/icon/backwardIcon.webp";
import { Link } from "react-router-dom";

const { kakao } = window;

const Container = styled.div`
  max-width: 390px;
  width: 100vh;
  //height: calc(100vh - 80px);
  height: 100vh;
  height: 100dvh; /* Mobile */
  overflow: hidden;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const PanToButton = styled.button`
  position: absolute;
  bottom: 4dvh;
  right: 10px;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 500;
  font-size: 20px;
  transition: bottom 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: row;
  max-width: 390px;
  width: 100%;
  height: 60px;
  text-align: center;
  position: relative;
`;

const BackwardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  position: absolute;
  width: 15%;
  z-index: 1;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
`;

const BackwardButton = styled.button`
  background-image: url(${backwardIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  width: 25px;
  height: 25px;
`;

const PathSearchPage = () => {
  const [map, setMap] = useState(null);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const panTo = () => {
    const newLatLng = new kakao.maps.LatLng(state.center.lat, state.center.lng);
    map.panTo(newLatLng);
  };

  // const handleBackwardButtonClick = (event) => {
  //   event.stopPropagation();
  // };

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

  return (
    <Container>
      <TitleContainer>
        <BackwardBox>
          <Link to="/path">
            <BackwardButton />
          </Link>
        </BackwardBox>
        <TitleBox>지도에서 선택</TitleBox>
      </TitleContainer>
      <Map
        id="map"
        center={state.center}
        style={{
          width: "100%",
          //height: "calc(100vh - 80px)",
          height: "calc(100vh)",
        }}
        padding={64}
        level={3}
        minLevel={4}
        onCreate={setMap}
        onDragEnd={() => {
          // console.log(map.getBounds());
        }}
      >
        {" "}
        <MapMarker
          position={state.center}
          image={{ src: locationIcon, size: { width: 30, height: 30 } }}
        />
      </Map>
      <PanToButton
        onClick={() => {
          panTo();
          // console.log(map.getBounds());
        }}
        //$openState={openState}
        //$navigationBarState={navigationBarState}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="8.5" stroke="black" />
          <path
            d="M9.5 1V0.5H8.5V1H9.5ZM8.5 3C8.5 3.27614 8.72386 3.5 9 3.5C9.27614 3.5 9.5 3.27614 9.5 3H8.5ZM8.5 1V3H9.5V1H8.5Z"
            fill="black"
          />
          <path
            d="M1 8.5H0.5V9.5H1V8.5ZM3 9.5C3.27614 9.5 3.5 9.27614 3.5 9C3.5 8.72386 3.27614 8.5 3 8.5V9.5ZM1 9.5H3V8.5H1V9.5Z"
            fill="black"
          />
          <path
            d="M9.5 15C9.5 14.7239 9.27614 14.5 9 14.5C8.72386 14.5 8.5 14.7239 8.5 15H9.5ZM8.5 17V17.5H9.5V17H8.5ZM8.5 15V17H9.5V15H8.5Z"
            fill="black"
          />
          <path
            d="M15 8.5C14.7239 8.5 14.5 8.72386 14.5 9C14.5 9.27614 14.7239 9.5 15 9.5V8.5ZM17 9.5H17.5V8.5H17V9.5ZM15 9.5H17V8.5H15V9.5Z"
            fill="black"
          />
          <circle cx="9" cy="9" r="1" fill="black" />
        </svg>
      </PanToButton>
    </Container>
  );
};

export default PathSearchPage;
