import { styled } from "styled-components";
import backwardIcon from "../../../assets/icon/backwardIcon.webp";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { departureAddressState } from "../../../recoil/departureAddressState/atom";
import { arrivalAddressState } from "../../../recoil/arrivalAddressState/atom";

const TitleContainer = styled.div`
  background-color: white;
  position: absolute;
  bottom: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  max-width: 390px;
  width: 100%;
  height: 150px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: 700;
  font-size: 17px;
  text-indent: 20px;
  line-height: 90px;
`;

const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme.blue};
  position: absolute;
  left: 5%;
  bottom: 20px;
  z-index: 1000;
  width: 90%;
  height: 40px;
  padding: 10px;
  border-radius: 3px;
  font-weight: 600;
  font-size: 16px;
  color: white;
`;
const Address = ({ address }) => {
  const location = useLocation();
  //console.log(location);
  const { isDepartureInputClicked, isArrivalInputClicked } = location.state;
  //console.log(isArrivalInputClicked);
  const [departureAddress, setDepartureAddress] = useRecoilState(
    departureAddressState
  );
  const [arrivalAddress, setArrivalAddress] =
    useRecoilState(arrivalAddressState);

  console.log(isDepartureInputClicked);

  const handleConfirmClick = () => {
    if (isDepartureInputClicked) {
      setDepartureAddress((prev) => ({
        ...prev,
        departureAddress: address,
      }));
    } else if (isArrivalInputClicked) {
      //setArrivalAddress(address);
      setArrivalAddress((prev) => ({
        ...prev,
        arrivalAddress: address,
      }));
    }
  };

  return (
    <TitleContainer>
      {address}
      <Link to="/path">
        <ConfirmButton onClick={handleConfirmClick}>확인</ConfirmButton>
      </Link>
    </TitleContainer>
  );
};

export default Address;
