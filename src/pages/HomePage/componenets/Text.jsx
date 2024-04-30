import styled from "styled-components";

const StyledText = styled.span`
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
`;

const Text = ({ $fontSize, $fontWeight, children }) => {
  return (
    <StyledText $fontSize={$fontSize} $fontWeight={$fontWeight}>
      {children}
    </StyledText>
  );
};

export default Text;
