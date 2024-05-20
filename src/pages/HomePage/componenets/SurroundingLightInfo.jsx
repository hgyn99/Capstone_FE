import { motion, useDragControls } from "framer-motion";
import styled from "styled-components";
import Card from "./Card";
import { bottomSheetOpenState } from "../../../recoil/bottomSheetOpenState/atom";
import { useRecoilState } from "recoil";
import { useRef } from "react";

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
  scroll-behavior: smooth;
`;

const ScrollBox = styled.div`
  overflow-y: scroll;
  height: ${({ openState }) =>
    openState === "mid" ? "calc(50dvh - 158px)" : "100%"};
`;

const SurroundingLightInfo = ({ surroundingLightInfoData }) => {
  const [openState, setOpenState] = useRecoilState(bottomSheetOpenState);
  const observerRef = useRef(null);

  const dragControls = useDragControls();

  return (
    <Container
      $surroundingLightInfoOpenState={openState.surroundingLightInfoOpenState}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      animate={openState.surroundingLightInfoOpenState}
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

        if (isGoDown && openState.surroundingLightInfoOpenState === "top") {
          setOpenState({ surroundingLightInfoOpenState: "mid" });
        } else if (
          isGoDown &&
          openState.surroundingLightInfoOpenState === "mid"
        ) {
          setOpenState({ surroundingLightInfoOpenState: "closed" });
        } else if (
          !isGoDown &&
          openState.surroundingLightInfoOpenState === "mid"
        ) {
          setOpenState({ surroundingLightInfoOpenState: "top" });
        } else if (
          !isGoDown &&
          openState.surroundingLightInfoOpenState === "closed"
        ) {
          setOpenState({ surroundingLightInfoOpenState: "mid" });
        }
      }}
    >
      <HeaderBox onPointerDown={(e) => dragControls.start(e)}>
        <HandleBar />
        <TopBox>
          <TitleText>주변 신호등</TitleText>
        </TopBox>
      </HeaderBox>
      <ScrollBox
        openState={openState.surroundingLightInfoOpenState}
        ref={observerRef}
      >
        <ContentsBox>
          {surroundingLightInfoData.map((data, index) => {
            return <Card key={index} surroundingLightInfoData={data} />;
          })}
        </ContentsBox>
      </ScrollBox>
    </Container>
  );
};

export default SurroundingLightInfo;
