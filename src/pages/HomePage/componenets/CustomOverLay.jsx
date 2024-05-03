import { CustomOverlayMap } from "react-kakao-maps-sdk";

const Data = {
  message: "성공",
  code: "success",
  timestamp: "2024-03-17 05:20:53",
  data: {
    intersectionInfos: [
      {
        //intersectionInfo
        id: 1506,
        name: "신영초교",
        location: { lat: 35.1755091, lng: 126.9071166 },
        isFavorite: true,
        alias: "우리초등학교 앞",
        trafficInfos: [
          {
            //trafficInfo
            direction: "nt",
            status: true,
            timeLeft: 12.7,
            redDuration: 127,
            greenDuration: 40,
          },
          {
            //trafficInfo
          },
        ],
      },
      {
        //intersectionInfo
      },
    ],
  },
};

const CustomOverLay = () => {
  return (
    <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
      // 커스텀 오버레이가 표시될 위치입니다
      position={{
        lat: 37.49887,
        lng: 127.026581,
      }}
      // 커스텀 오버레이가에 대한 확장 옵션
      xAnchor={0.3}
      yAnchor={0.91}
    ></CustomOverlayMap>
  );
};

export default CustomOverLay;
