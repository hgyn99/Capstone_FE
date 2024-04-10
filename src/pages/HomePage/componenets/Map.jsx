import React, { useEffect, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapDiv = styled.div`
  width: 100%;
  height: 100vh;
`;

const Map = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };

    const watchID = navigator.geolocation.watchPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      },
      options
    );
  }, []);

  var locPosition = new kakao.maps.LatLng(latitude, longitude);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: locPosition, //지도의 중심좌표.
        level: 4, //지도의 레벨(확대, 축소 정도)
      };

      var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      marker.setMap(map);
    }
  }, [locPosition]);

  return (
    <div className="App">
      <MapDiv id="map"></MapDiv>
    </div>
  );
};

export default Map;
