import React, { useEffect, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapDiv = styled.div`
  width: 100%;
  height: 100vh;
`;

const Map = ({ latitude, longitude }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const locPosition = new kakao.maps.LatLng(latitude, longitude);
      const container = document.getElementById("map");
      const options = {
        center: locPosition,
        level: 3,
      };

      // 기존의 지도와 마커 제거
      if (map) {
        kakao.maps.event.removeListener(map, "idle");
        map.relayout();
        setMap(null);
      }
      if (marker) {
        marker.setMap(null);
        setMarker(null);
      }

      const newMap = new kakao.maps.Map(container, options);
      const newMarker = new kakao.maps.Marker({
        position: locPosition,
      });

      newMarker.setMap(newMap);
      newMap.setMaxLevel(4);

      setMap(newMap);
      setMarker(newMarker);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    // 위도, 경도가 변경될 때마다 지도의 중심을 변경
    if (map && latitude !== null && longitude !== null) {
      const newCenter = new kakao.maps.LatLng(latitude, longitude);
      map.panTo(newCenter);
      marker.setPosition(newCenter);
    }
  }, [latitude, longitude, map, marker]);

  return (
    <div className="App">
      <MapDiv id="map"></MapDiv>
    </div>
  );
};

export default Map;
