import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";
import NavigationBarLayout from "../../components/NavigationBarLayout";
import SurroundingLightInfo from "./componenets/SurroundingLightInfo";
import LightDetailInfo from "./componenets/LightDetailInfo";
import FavoriteInfo from "./componenets/FavoriteInfo";
import CustomOverLay from "./componenets/CustomOverLay";
import TopBar from "./componenets/TopBar";
import { useRecoilState, useRecoilValue } from "recoil";
import { bottomSheetOpenState } from "../../recoil/bottomSheetOpenState/atom";
import { navigationState } from "../../recoil/navigationState/atom";
import { fetchTraffic } from "../../apis/api/traffic";
import locationIcon from "../..//assets/icon/location.png";

const { kakao } = window;

const Container = styled.div`
  position: relative;
`;

const HomePage = () => {
  const navigationBarState = useRecoilValue(navigationState);
  const [openState, setOpenState] = useRecoilState(bottomSheetOpenState);
  // console.log("Home", openState);

  const [map, setMap] = useState(null);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { isLoading, data: surroundingLightInfoData } = useQuery({
    queryKey: ["traffic"],
    queryFn: fetchTraffic,
    onError: (e) => {
      console.log(e);
    },
  });

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
    if (navigationBarState === "TrafficSignal") {
      setOpenState((prev) => ({
        ...prev,
        surroundingLightInfoOpenState: "mid",
      }));
    } else if (navigationBarState === "Favorites") {
      setOpenState((prev) => ({ ...prev, favoritesInfoOpenState: "mid" }));
    }
  }, [navigationBarState]);

  const panTo = () => {
    const newLatLng = new kakao.maps.LatLng(state.center.lat, state.center.lng);
    map.panTo(newLatLng);
  };

  const panToFavorite = (point) => {
    const newLatLng = new kakao.maps.LatLng(point.lat, point.lng);
    map.panTo(newLatLng);
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
          onDragEnd={() => {
            // console.log(map.getBounds());
          }}
        >
          {surroundingLightInfoData?.data.data.traffics.map((data, index) => {
            return (
              <CustomOverLay
                key={data.id}
                surroundingLightInfoData={data}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            );
          })}
          {navigationBarState === "Home" ? (
            <>
              <LightDetailInfo />
            </>
          ) : null}
          {navigationBarState === "TrafficSignal" ? (
            <>
              <SurroundingLightInfo
                surroundingLightInfoData={
                  surroundingLightInfoData.data.data.traffics
                }
              />
            </>
          ) : null}
          {navigationBarState === "Favorites" ? (
            <FavoriteInfo panToFavorite={panToFavorite} />
          ) : null}
          <MapMarker
            position={state.center}
            image={{ src: locationIcon, size: { width: 30, height: 30 } }}
          />
        </Map>
      </Container>
    </NavigationBarLayout>
  );
};

export default HomePage;
