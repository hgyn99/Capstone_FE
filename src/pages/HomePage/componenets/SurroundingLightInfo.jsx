import { motion, useDragControls } from "framer-motion";
import styled from "styled-components";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const HandleBar = styled.div`
  width: 50px;
  height: 2px;
  position: absolute;
  left: 50%;
  top: 10%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.gray};
`;

const SurroundingLightInfo = ({
  $surroundingLightInfoOpenState,
  setSurroundingLightInfoOpenState,
}) => {
  const dragControls = useDragControls();

  return (
    <Container
      $surroundingLightInfoOpenState={$surroundingLightInfoOpenState}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      animate={$surroundingLightInfoOpenState}
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

        const isOverOffsetThreshold = Math.abs(info.offset.y) > offsetThreshold;
        const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold;

        const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold;

        if (!isOverThreshold) return;

        const isGoDown = info.offset.y > 0;

        if (isGoDown && $surroundingLightInfoOpenState === "top") {
          setSurroundingLightInfoOpenState("mid");
        } else if (isGoDown && $surroundingLightInfoOpenState === "mid") {
          setSurroundingLightInfoOpenState("closed");
        } else if (!isGoDown && $surroundingLightInfoOpenState === "mid") {
          setSurroundingLightInfoOpenState("top");
        }
      }}
    >
      <HeaderBox onPointerDown={(e) => dragControls.start(e)}>
        <HandleBar />
      </HeaderBox>
    </Container>
  );
};

export default SurroundingLightInfo;
