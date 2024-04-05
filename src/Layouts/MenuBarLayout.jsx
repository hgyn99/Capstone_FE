import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MenuBar from "../components/MenuBar";

const Container = styled.div`
  max-width: 390px;
  width: 100vh;
  height: calc(100vh -57px);
  height: calc(100dvh -57px); /* Mobile */
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const MenuBarLayout = () => {
  return (
    <Container>
      <Outlet />
      <MenuBar />
    </Container>
  );
};

export default MenuBarLayout;
