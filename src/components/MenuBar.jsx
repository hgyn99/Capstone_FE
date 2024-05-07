import styled from "styled-components";
import { GoHome, GoHomeFill } from "react-icons/go";
import { PiTrafficSignal, PiTrafficSignalFill } from "react-icons/pi";
import { GoStar, GoStarFill } from "react-icons/go";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi2";
import { useRecoilState } from "recoil";
import { menuState } from "./../recoil/menuState/atom";

const NavigationBar = styled.div`
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

const MenuBar = ({ children }) => {
  const [currentMenuState, setCurrentMenuState] = useRecoilState(menuState); // menuState 변수명 변경

  return (
    <NavigationBar>
      <Button>
        <GoHome size="30" />
      </Button>
      <Button>
        <PiTrafficSignal size="30" />
      </Button>
      <Button>
        <GoStar size="30" />
      </Button>
      <Button>
        <HiOutlineUserCircle size="30" />
      </Button>
    </NavigationBar>
  );
};

export default MenuBar;
