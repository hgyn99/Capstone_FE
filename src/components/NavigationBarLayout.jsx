import styled from "styled-components";
import NavigationBar from "./NavigationBar";

const Container = styled.div`
  max-width: 390px;
  width: 100vh;
  height: calc(100vh - 80px);
  height: calc(100dvh - 80px); /* Mobile */
  overflow: hidden;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const MenuBarLayout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
      <NavigationBar />
    </>
  );
};

export default MenuBarLayout;
