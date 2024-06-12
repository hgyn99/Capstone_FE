import { styled } from "styled-components";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import locationIcon from "../../../assets/icon/location.png";
import startingPoint from "../../../assets/icon/startingPoint.webp";
import endingPoint from "../../../assets/icon/endingPoint.webp";
import NavigationBarLayout from "../../../components/NavigationBarLayout";
import SearchingBar from "../SearchingBar";
import DirectionInfo from "./DirectionInfo";
import TrafficDirection from "./TrafficDirection";
import { useQuery } from "@tanstack/react-query";
import { fetchPathDetail } from "../../../apis/api/paths";
import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { addressState } from "../../../recoil/addressState/atom";

const { kakao } = window;

const Container = styled.div`
  max-width: 390px;
  width: 100vh;
  //height: calc(100vh - 80px);
  height: 100vh;
  height: 100dvh; /* Mobile */
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const PanToButton = styled.button`
  position: absolute;
  //bottom: 290px;
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

const DirectionPage = () => {
  const [map, setMap] = useState(null);
  const [state, setState] = useState({
    center: {
      lat: 35.17828963,
      lng: 126.909254315,
    },
    errMsg: null,
    isLoading: true,
  });
  const [result, setResult] = useState("");
  const [address, setAddress] = useRecoilState(addressState);
  const [showDirectionInfo, setShowDirectionInfo] = useState(true);
  const [showTrafficDirection, setShowTrafficDirection] = useState(false);
  const [panToBottom, setPanToBottom] = useState(290);
  const { startLat, startLng, endLat, endLng } = address;

  const handleNavStartClick = () => {
    setShowDirectionInfo(false);
    setShowTrafficDirection(true);
    setPanToBottom(120);
  };

  const panTo = () => {
    const newLatLng = new kakao.maps.LatLng(state.center.lat, state.center.lng);
    map.panTo(newLatLng);
  };

  const {
    isLoading,
    data: pathDetailData, // 수정
    refetch: pathDetailRefetch, // 수정
  } = useQuery({
    queryKey: ["pathDetail", startLat, startLng, endLat, endLng],
    queryFn: () => fetchPathDetail({ startLat, startLng, endLat, endLng }),
    enabled:
      !!address &&
      address.startLat !== null &&
      address.startLng !== null &&
      address.endLat !== null &&
      address.endLng !== null,
    // keepPreviousData: true,
    // staleTime: 5000,
    onError: (e) => {
      console.log("DTPage: " + e);
    },
  });

  console.log("pathDetailData(DTPage): ", pathDetailData);
  var linePath = pathDetailData?.data.data.paths.map((path) => {
    return new kakao.maps.LatLng(path.lat, path.lng);
  });

  var bounds = new kakao.maps.LatLngBounds();

  var i;
  for (i = 0; i < linePath.length; i++) {
    // LatLngBounds 객체에 좌표를 추가합니다
    bounds.extend(linePath[i]);
  }
  function setBounds() {
    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
    map.setBounds(bounds);
  }

  // 지도에 표시할 선을 생성합니다
  var polyline = new kakao.maps.Polyline({
    path: linePath, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: "#535CE8", // 선의 색깔입니다
    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: "solid", // 선의 스타일입니다
  });

  // 지도에 선을 표시합니다
  polyline.setMap(map);

  // 위도와 경도를 추출합니다
  var lats = linePath.map((point) => point.getLat());
  var lngs = linePath.map((point) => point.getLng());

  // 위도와 경도의 최소값과 최대값을 찾습니다
  var minLat = Math.min(...lats);
  var maxLat = Math.max(...lats);
  var minLng = Math.min(...lngs);
  var maxLng = Math.max(...lngs);

  // 위도와 경도의 최소값과 최대값의 평균을 계산합니다
  var avgLat = (minLat + maxLat) / 2;
  var avgLng = (minLng + maxLng) / 2;

  // const newCenter = new kakao.maps.LatLng(avgLat - 0.002, avgLng);

  function setCenter() {
    // 이동할 위도 경도 위치를 생성합니다
    var moveLatLon = new kakao.maps.LatLng(avgLat - 0.002, avgLng);

    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);
  }

  // HTML 문자열 또는 Dom Element 입니다
  var startingImg =
    '<div class ="label">' +
    `<span class="center"><img src="${startingPoint}" alt="Location Icon" style="width:40px; height:50px; margin-bottom:30px;"/></span>` + // locationIcon 이미지를 추가합니다
    "</div>";
  var endingImg =
    '<div class ="label">' +
    `<span class="center"><img src="${endingPoint}" alt="Location Icon" style="width:40px; height:50px; margin-bottom:30px;"/></span>` + // locationIcon 이미지를 추가합니다
    "</div>";
  // 커스텀 오버레이가 표시될 위치입니다(출발지)
  var startPosition = new kakao.maps.LatLng(
    pathDetailData?.data.data.paths[0].lat,
    pathDetailData?.data.data.paths[0].lng
  );

  // 커스텀 오버레이가 표시될 위치입니다(도착지)
  var endPosition = new kakao.maps.LatLng(
    pathDetailData?.data.data.paths[
      pathDetailData?.data.data.paths.length - 1
    ].lat,
    pathDetailData?.data.data.paths[
      pathDetailData?.data.data.paths.length - 1
    ].lng
  );

  // 커스텀 오버레이를 생성합니다(출발지)
  var startingPointOverlay = new kakao.maps.CustomOverlay({
    position: startPosition,
    content: startingImg,
  });

  // 커스텀 오버레이를 생성합니다(도착지)
  var endingPointOverlay = new kakao.maps.CustomOverlay({
    position: endPosition,
    content: endingImg,
  });

  // 커스텀 오버레이를 지도에 표시합니다
  startingPointOverlay.setMap(map);
  endingPointOverlay.setMap(map);

  const trafficLightsDT = pathDetailData?.data.data.traffics.map((traffic) => ({
    id: traffic.viewName,
    redCycle: traffic.redCycle,
    greenCycle: traffic.greenCycle,
    color: traffic.color,
    timeLeft: traffic.timeLeft,
    direction: traffic.detail.direction,
    // 여기에 서버에서 받아온 값 중 필요한 값 추가
  }));
  //console.log("trafficLightDT: " + trafficLightsDT);
  // console.log(
  //   "direction: " + pathDetailData?.data.data.traffics[0].detail.direction
  // );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              //lat: position.coords.latitude,
              //lng: position.coords.longitude,
              lat: avgLat - 0.002,
              lng: avgLng,
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

  // const handleMapBouns = (point) => {
  //   map?.setBound(point);
  // };

  // useEffect(() => {
  //   setCenter();
  // }, []);

  // 데모 코드 //

  return (
    <NavigationBarLayout>
      <Container>
        <SearchingBar />
        <Map
          id="map"
          center={state.center}
          style={{
            width: "100%",
            height: "calc(100dvh - 180px)",
          }}
          padding={64}
          level={4}
          minLevel={8}
          onCreate={setMap}
          // onDragEnd={handleMapBouns}
          onDragEnd={() => {
            //setBounds();
            //setCenter();
          }}
        ></Map>
        <PanToButton
          style={{ bottom: `${panToBottom}px` }}
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
      {showDirectionInfo && (
        <DirectionInfo onNavStartClick={handleNavStartClick} />
      )}
      {showTrafficDirection && (
        <TrafficDirection trafficLightsDT={trafficLightsDT} />
      )}
    </NavigationBarLayout>
  );
};

export default DirectionPage;
