import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icon/arrow.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  gap: 16px;
`;

const InputButton = styled.button`
  width: 300px;
  border: none;
  height: 44px;
  border-radius: 5px;
  background-color: white;
  text-align: left;
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.3);
`;

const InputButtonPlaceholder = styled.span`
  padding-left: 16px;
  font-size: 14px;
  color: ${(props) => props.theme.gray};
`;

const DirectionSearchButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.blue};
  display: block;
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.3);
`;

const DirectionSearchText = styled.p`
  font-size: 8px;
  color: white;
`;

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <InputButton>
        <InputButtonPlaceholder
          onClick={() => {
            console.log("목적지 입력창 클릭");
          }}
        >
          목적지를 입력해주세요.
        </InputButtonPlaceholder>
      </InputButton>
      <DirectionSearchButton
        onClick={() => {
          console.log("길찾기 페이지 이동");
        }}
      >
        <Arrow />
        <DirectionSearchText>길찾기</DirectionSearchText>
      </DirectionSearchButton>
    </Container>
  );
};

export default TopBar;
