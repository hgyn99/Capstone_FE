import styled from "styled-components";
import Text from "./Text";

const Container = styled.div`
  margin-top: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
`;

const Button = styled.button`
  color: #535ce8;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ListBox = styled.div``;

const MyFavorites = ({ listState }) => {
  return (
    <Container>
      <Header>
        <Text $fontWeight={600}>
          내 즐겨찾기 {listState === "place" ? "장소" : "신호등"}
        </Text>
        <Button
          onClick={() => {
            console.log("편집");
          }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.59532 0.303154C8.2026 -0.101052 7.5536 -0.101051 7.16088 0.303155L0.681015 6.97249C0.670956 6.98284 0.670956 6.99931 0.681015 7.00967C0.689245 7.01814 0.690586 7.03093 0.686915 7.04215C0.685443 7.04666 0.684244 7.05135 0.683347 7.05623L0.00176677 10.7636C-0.011145 10.8338 0.0486838 10.8954 0.11692 10.8821L3.71894 10.1806C3.72478 10.1794 3.73035 10.1778 3.73563 10.1758C3.74457 10.1724 3.75502 10.1736 3.76169 10.1804C3.76982 10.1888 3.78326 10.1888 3.79139 10.1804L10.3146 3.46643C10.6917 3.07837 10.6917 2.46081 10.3146 2.07274L8.59532 0.303154Z"
              fill="#535CE8"
            />
          </svg>
          편집
        </Button>
      </Header>
      <ListBox></ListBox>
    </Container>
  );
};

export default MyFavorites;
