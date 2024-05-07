import styled from "styled-components";
import { GoHome, GoHomeFill } from "react-icons/go";
import { PiTrafficSignal, PiTrafficSignalFill } from "react-icons/pi";
import { GoStar, GoStarFill } from "react-icons/go";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi2";
import { useRecoilState } from "recoil";
import { navigationState } from "../recoil/navigationState/atom";

const NavigationBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${(props) => props.theme.gray};
  max-width: 390px;
  width: 100%;
  height: 68px;
  position: absolute;
`;

const Text = styled.div`
  font-size: 8px;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
`;

const NavigationBar = ({ children }) => {
  const [currentNavigationState, setCurrentNavigationState] =
    useRecoilState(navigationState);

  return (
    <NavigationBarContainer>
      <Button>
        {currentNavigationState === "Home" ? (
          <GoHomeFill size="30" />
        ) : (
          <GoHome size="30" />
        )}
      </Button>
      <Button>
        {currentNavigationState === "TrafficSignal" ? (
          <PiTrafficSignalFill size="30" />
        ) : (
          <PiTrafficSignal size="30" />
        )}
      </Button>
      <Button>
        {currentNavigationState === "Favorite" ? (
          <GoStarFill size="30" />
        ) : (
          <GoStar size="30" />
        )}
      </Button>
      <Button>
        {currentNavigationState === "MyPage" ? (
          <HiUserCircle size="30" />
        ) : (
          <HiOutlineUserCircle size="30" />
        )}
      </Button>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
