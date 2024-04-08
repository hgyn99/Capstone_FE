import { styled } from "styled-components";
import Map from "./componenets/Map";
import MenuBarLayout from "../../components/MenuBarLayout";

const Container = styled.div``;

const HomePage = () => {
  return (
    <MenuBarLayout>
      <Container>
        <Map />
      </Container>
    </MenuBarLayout>
  );
};

export default HomePage;
