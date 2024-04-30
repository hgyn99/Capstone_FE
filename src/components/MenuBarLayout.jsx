import styled from "styled-components";
import MenuBar from "./MenuBar";

const Container = styled.div`
  max-width: 390px;
  width: 100vh;
  height: calc(100vh - 56px);
  height: calc(100dvh - 56px); /* Mobile */
  overflow: hidden;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const MenuBarLayOut = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
      <MenuBar />
    </>
  );
};

export default MenuBarLayOut;
