import styled from "styled-components";
import { motion, useDragControls } from "framer-motion";
import Text from "./Text";

const Container = styled(motion.div)`
  width: 100%;
  height: 100dvh;
  background-color: white;
  position: absolute;
  z-index: 1000;
  border-radius: 10px 10px 0 0;
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
  background-color: ${({ theme }) => theme.gray};
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
  border-top: 2px solid ${({ theme }) => theme.gray};
  border-bottom: 2px solid ${({ theme }) => theme.gray};
`;

const DirectionInfoBox = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 220px;
  border-bottom: 2px solid ${({ theme }) => theme.gray};
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
  background-color: ${({ $isTimeLeft, theme }) =>
    $isTimeLeft ? theme.green : theme.red};
`;

const RemainingTimeText = styled.span`
  font-weight: 700;
  color: ${({ $isTimeLeft, theme }) => ($isTimeLeft ? theme.green : theme.red)};
`;

const LightDetailInfo = ({
  $DetailInfoOpenState,
  setDetailInfoOpenState,
  lightInfo,
}) => {
  const dragControls = useDragControls();

  return (
    <Container
      $DetailInfoOpenState={$DetailInfoOpenState}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      animate={$DetailInfoOpenState}
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

        if (isGoDown && $DetailInfoOpenState === "top") {
          setDetailInfoOpenState("mid");
        } else if (isGoDown && $DetailInfoOpenState === "mid") {
          setDetailInfoOpenState("closed");
        } else if (!isGoDown && $DetailInfoOpenState === "mid") {
          setDetailInfoOpenState("top");
        }
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
