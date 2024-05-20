import styled from "styled-components";
import crossIcon from "../../assets/icon/cross.webp";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //background-color: green;
  gap: 5px;
  //border-bottom: 2px solid ${(props) => props.theme.gray};
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  //background-color: blue;
  //padding: 0 0px; // 상하 여백 0, 좌우 여백 10px
  //flex: 9;
`;

const InputButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 15px;
  margin-left: 20px;
  //margin-top: 10px;
  //margin-bottom: 10px;
  text-align: left;
  width: 80%;
  border-radius: 3px;
  color: gray;
`;

const CloseButton = styled.button`
  background-image: url(${crossIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  width: 50px; // Adjust as needed
  height: 50px; // Adjust as needed
`;

const SearchingBar = () => {
  return (
    <MainContainer>
      <InputBox>
        <InputButton>출발지 입력</InputButton>{" "}
        <Link to="/">
          <CloseButton />
        </Link>
      </InputBox>
      <InputBox>
        <InputButton>도착지 입력</InputButton>
      </InputBox>
    </MainContainer>
  );
};

export default SearchingBar;
