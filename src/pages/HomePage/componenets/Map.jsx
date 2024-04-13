import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const { kakao } = window;

const KakaoMap = ({ latitude, longitude }) => {
  const [map, setMap] = useState(null);
  // 기본 위치 상태
  const [state, setState] = useState({
    center: {
      lat: latitude,
      lng: longitude,
    },
    errMsg: null,
    isLoading: true,
  });

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: latitude,
        lng: longitude,
      }}
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
        position={{
          // 마커가 표시될 위치입니다
          lat: latitude,
          lng: longitude,
        }}
      />
    </Map>
  );
};

export default KakaoMap;
