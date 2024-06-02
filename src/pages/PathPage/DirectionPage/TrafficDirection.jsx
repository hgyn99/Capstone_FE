import { motion, useDragControls } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  //bottom: 0;
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
  background-color: #f9f9f9;
  border-radius: 36px;
  width: 256px;
  height: 36px;
  margin-top: 20px;
`;

const TrafficDirection = () => {
  const dragControls = useDragControls();
  const [openState, setOpenState] = useState("mid");
  return (
    <Container
      $favoritesInfoOpenState={openState}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      initial={openState}
      animate={openState}
      variants={{
        top: { top: `10dvh` },
        mid: { top: `50dvh` },
        closed: { top: `calc(100dvh - 100px)` },
      }}
      transition={{ duration: 0.3 }}
      dragControls={dragControls}
      dragListener={false}
      dragElastic={0.2}
      onDragEnd={(event, info) => {
        const offsetThreshold = 100;
        const deltaThreshold = 2;

        const isOverOffsetThreshold = Math.abs(info.offset.y) > offsetThreshold;
        const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold;

        const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold;

        if (!isOverThreshold) return;

        const isGoDown = info.offset.y > 0;

        if (isGoDown && openState === "top") {
          setOpenState("mid");
        } else if (isGoDown && openState === "mid") {
          setOpenState("closed");
        } else if (!isGoDown && openState === "mid") {
          setOpenState("top");
        } else if (!isGoDown && openState === "closed") {
          setOpenState("mid");
        }
      }}
    >
      <HeaderBox onPointerDown={(e) => dragControls.start(e)}>
        <HandleBar />
        <ListStateBox>경로 신호등 정보</ListStateBox>
      </HeaderBox>
    </Container>
  );
};

export default TrafficDirection;
