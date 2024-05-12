import { motion, useDragControls } from "framer-motion";
import styled from "styled-components";
import Card from "./Card";

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

const TopBox = styled.div`
  width: 90%;
  margin: 12px;
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SurroundingLightInfo = ({
  $surroundingLightInfoOpenState,
  setSurroundingLightInfoOpenState,
  surroundingLightInfoData,
}) => {
  const dragControls = useDragControls();

  // console.log(surroundingLightInfoData);

  return (
    <Container
      $surroundingLightInfoOpenState={$surroundingLightInfoOpenState}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      animate={$surroundingLightInfoOpenState}
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
        } else if (!isGoDown && $surroundingLightInfoOpenState === "closed") {
          setSurroundingLightInfoOpenState("mid");
        }
      }}
    >
      <HeaderBox onPointerDown={(e) => dragControls.start(e)}>
        <HandleBar />
        <TopBox>
          <TitleText>주변 신호등</TitleText>
        </TopBox>
      </HeaderBox>
      <ContentsBox>
        {surroundingLightInfoData.map((data, index) => {
          return <Card key={index} surroundingLightInfoData={data} />;
        })}
      </ContentsBox>
    </Container>
  );
};

export default SurroundingLightInfo;
