import { styled } from "styled-components";
import NavigationBarLayout from "../../components/NavigationBarLayout";
import React, { useEffect, useRef, useState } from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import LightDetailInfo from "./componenets/LightDetailInfo";
import TopBar from "./componenets/TopBar";
import SurroundingLightInfo from "./componenets/SurroundingLightInfo";
import { useRecoilState, useRecoilValue } from "recoil";
import { navigationState } from "../../recoil/navigationState/atom";
import { fetchTraffic } from "../../apis/api/traffic";
import { useQuery } from "@tanstack/react-query";
import FavoriteInfo from "./componenets/FavoriteInfo";
import CustomOverLay from "./componenets/CustomOverLay";
import { bottomSheetOpenState } from "../../recoil/bottomSheetOpenState/atom";

const { kakao } = window;

const Container = styled.div`
  position: relative;
`;

const PanToButton = styled.button`
  position: absolute;
  bottom: ${({ $openState, navigationBarState }) =>
    ($openState.detailInfoOpenState === "closed" &&
      navigationBarState === "Home") ||
    $openState.surroundingLightInfoOpenState === "closed" ||
    $openState.favoritesInfoOpenState === "closed"
      ? "4dvh"
      : "42dvh"};
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

const HomePage = () => {
  const navigationBarState = useRecoilValue(navigationState);
  const [openState, setOpenState] = useRecoilState(bottomSheetOpenState);
  const mapRef = useRef(kakao.maps.Map);
  // console.log(mapRef);
  const [map, setMap] = useState(null);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const { isLoading, data: surroundingLightInfoData } = useQuery({
    queryKey: ["traffic"],
    queryFn: fetchTraffic,
    onError: (e) => {
      console.log(e);
    },
  });

  const kakaomap = mapRef.current;
  // console.log(kakaomap);
  // const bounds = kakaomap.getBounds();
  // console.log(bounds);

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

  useEffect(() => {
    setOpenState({ detailInfoOpenState: "closed" });
    if (navigationBarState === "TrafficSignal") {
      setOpenState({ surroundingLightInfoOpenState: "mid" });
    } else if (navigationBarState === "Favorites") {
      setOpenState({ favoritesInfoOpenState: "mid" });
    }
  }, [navigationBarState]);

  const panTo = () => {
    const newLatLng = new kakao.maps.LatLng(state.center.lat, state.center.lng);
    // const newLatLng = new kakao.maps.LatLng(35.175841, 126.912491);
    map.panTo(newLatLng);
    console.log(openState.detailInfoOpenState);
  };

  return (
    <NavigationBarLayout>
      <Container>
        <TopBar />
        <Map
          id="map"
          center={state.center}
          style={{
            width: "100%",
            height: "calc(100vh - 80px)",
          }}
          padding={64}
          level={3}
          minLevel={4}
          onCreate={setMap}
        >
          {navigationBarState === "Home" ? (
            <>
              <LightDetailInfo />
            </>
          ) : null}
          {navigationBarState === "TrafficSignal" ? (
            <>
              {surroundingLightInfoData.data.data.traffics.map(
                (data, index) => {
                  return (
                    <CustomOverLay
                      key={data.id}
                      surroundingLightInfoData={data}
                    />
                  );
                }
              )}
              <SurroundingLightInfo
                surroundingLightInfoData={
                  surroundingLightInfoData.data.data.traffics
                }
              />
            </>
          ) : null}
          {navigationBarState === "Favorites" ? <FavoriteInfo /> : null}
          <MapMarker position={state.center} />
        </Map>
        <PanToButton
          onClick={panTo}
          $openState={openState}
          navigationBarState={navigationBarState}
        >
          <TbCurrentLocation />
        </PanToButton>
      </Container>
    </NavigationBarLayout>
  );
};

export default HomePage;
