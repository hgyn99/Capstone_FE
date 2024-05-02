import styled from "styled-components";
import Text from "./Text";

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  position: absolute;
  z-index: 1000;
  bottom: ${(props) => (props.isDetailInfoOpen ? "0" : "-300px")};
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

const Hr = styled.hr`
  size: 2px;
  color: ${(props) => props.theme.gray};
  margin: 0;
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

const LightDetailInfo = ({ isDetailInfoOpen, lightInfo }) => {
  return (
    <Container isDetailInfoOpen={isDetailInfoOpen}>
      <TopBox>
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
