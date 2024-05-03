import styled from "styled-components";
import { motion, useDragControls } from "framer-motion";
import Text from "./Text";

const Container = styled(motion.div)`
  width: 100%;
  height: 100dvh;
  background-color: white;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  transition: bottom 0.5s;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.2);
`;

const TopBox = styled.div`
  width: 100%;
  height: 68px;
  position: relative;
  margin-bottom: 8px;
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
  background-color: ${(props) => props.theme.gray};
`;

const Address = styled.span`
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  top: 40%;
  left: 3%;
`;

const DetailAddress = styled.span`
  font-size: 12px;
  position: absolute;
  top: 70%;
  left: 3%;
`;

const PosibilityBox = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${(props) => props.theme.gray};
  border-bottom: 2px solid ${(props) => props.theme.gray};
`;

const DirectionInfoBox = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 220px;
  border-bottom: 2px solid ${(props) => props.theme.gray};
`;

const RemainingTimeBox = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isTimeLeft ? props.theme.green : props.theme.red};
`;

const RemainingTimeText = styled.span`
  font-weight: 700;
  color: ${(props) =>
    props.$isTimeLeft ? props.theme.green : props.theme.red};
`;

const LightDetailInfo = ({
  $isDetailInfoOpen,
  setIsDetailInfoOpen,
  lightInfo,
}) => {
  const dragControls = useDragControls();

  const animateState = $isDetailInfoOpen ? "opened" : "closed";

  return (
    <Container
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      animate={animateState}
      variants={{
        opened: { top: `calc(100dvh - 700px)` },
        closed: { top: `calc(100dvh - 300px)` },
      }}
      dragControls={dragControls}
      dragListener={false}
      dragElastic={0.2}
      onDragEnd={(event, info) => {
        // y가 음수이면 위로, 양수이면 아래로

        const offsetThreshold = 150;
        const deltaThreshold = 5;

        const isOverOffsetThreshold = Math.abs(info.offset.y) > offsetThreshold;
        const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold;

        const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold;

        if (!isOverThreshold) return;

        const newIsOpened = info.offset.y < 0;

        setIsDetailInfoOpen(newIsOpened);
      }}
    >
      <TopBox onPointerDown={(e) => dragControls.start(e)}>
        <HandleBar />
        <Address>전남대공과대학</Address>
        <DetailAddress>176-48 (전남대공과대학 방면)</DetailAddress>
      </TopBox>
      <PosibilityBox></PosibilityBox>
      <DirectionInfoBox>
        <Text $fontWeight={600}>서쪽</Text>
        <RemainingTimeBox>
          <Circle $isTimeLeft={false}></Circle>
          <RemainingTimeText $isTimeLeft={false}>8초</RemainingTimeText>
        </RemainingTimeBox>
      </DirectionInfoBox>
    </Container>
  );
};

export default LightDetailInfo;
