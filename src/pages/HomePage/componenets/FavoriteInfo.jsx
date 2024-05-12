import { motion, useDragControls } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import KakaoLoginModal from "./KakaoLoginModal";

const Container = styled(motion.div)`
  width: 100%;
  height: 100dvh;
  background-color: white;
  position: absolute;
  z-index: 1000;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.2);
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 68px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HandleBar = styled.div`
  width: 78px;
  height: 2px;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.gray};
`;

const ListStateBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 36px;
  width: 256px;
  height: 36px;
  margin-top: 20px;
`;

const BaseBox = styled.div`
  width: 128px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border-radius: 36px;
  border: 1px solid transparent;
  font-weight: 600;
  /* transition: 0.3s; */
`;

const Place = styled(BaseBox)`
  border: 1px solid
    ${(props) => (props.$listState === "place" ? "black" : "transparent")};
  background-color: ${(props) =>
    props.$listState === "place" ? "white" : "transparent"};
`;

const TrafficLight = styled(BaseBox)`
  border: 1px solid
    ${(props) =>
      props.$listState === "trafficLight" ? "black" : "transparent"};
  background-color: ${(props) =>
    props.$listState === "trafficLight" ? "white" : "transparent"};
`;

const FavoritesInfo = ({
  $favoritesInfoOpenState,
  setFavoritesInfoOpenState,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listState, setListState] = useState("place");

  const dragControls = useDragControls();

  const handleLoginModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Container
        $favoritesInfoOpenState={$favoritesInfoOpenState}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        animate={$favoritesInfoOpenState}
        variants={{
          top: { top: `10dvh` },
          mid: { top: `50dvh` },
          closed: { top: `100dvh` },
        }}
        transition={{ duration: 0.3 }}
        dragControls={dragControls}
        dragListener={false}
        dragElastic={0.2}
        onDragEnd={(event, info) => {
          const offsetThreshold = 150;
          const deltaThreshold = 2;

          const isOverOffsetThreshold =
            Math.abs(info.offset.y) > offsetThreshold;
          const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold;

          const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold;

          if (!isOverThreshold) return;

          const isGoDown = info.offset.y > 0;

          if (isGoDown && $favoritesInfoOpenState === "top") {
            setFavoritesInfoOpenState("mid");
          } else if (isGoDown && $favoritesInfoOpenState === "mid") {
            setFavoritesInfoOpenState("closed");
          } else if (!isGoDown && $favoritesInfoOpenState === "mid") {
            setFavoritesInfoOpenState("top");
          }
        }}
      >
        <HeaderBox onPointerDown={(e) => dragControls.start(e)}>
          <HandleBar />
          <ListStateBox>
            <button
              onClick={() => {
                setListState("place");
              }}
            >
              <Place $listState={listState}>장소</Place>
            </button>
            <button
              onClick={() => {
                setListState("trafficLight");
              }}
            >
              <TrafficLight $listState={listState}>신호등</TrafficLight>
            </button>
          </ListStateBox>
        </HeaderBox>
      </Container>
      <KakaoLoginModal isOpen={isOpen} onRequestClose={handleLoginModal} />
    </>
  );
};

export default FavoritesInfo;
