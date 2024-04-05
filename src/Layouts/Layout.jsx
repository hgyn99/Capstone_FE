import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  max-width: 390px;
  width: 100vh;
  height: 100vh;
  height: 100dvh; /* Mobile */
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
