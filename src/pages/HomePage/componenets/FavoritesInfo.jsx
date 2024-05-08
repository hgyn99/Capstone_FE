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
  position: relative;
  margin-bottom: 8px;
`;

const HandleBar = styled.div`
  width: 20%;
  height: 2px;
  position: absolute;
  left: 50%;
  top: 15%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.gray};
`;

const FavoritesInfo = ({
  $favoritesInfoOpenState,
  setFavoritesInfoOpenState,
}) => {
  const [isOpen, setIsOpen] = useState(true);

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
        </HeaderBox>
      </Container>
      <KakaoLoginModal isOpen={isOpen} onRequestClose={handleLoginModal} />
    </>
  );
};

export default FavoritesInfo;
