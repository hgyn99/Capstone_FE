import BaseModal from "./BaseModal";
import styled from "styled-components";

const TextBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Button = styled.button``;

const TimeOutModal = ({ isOpen, onRequestClose }) => {
  return (
    <BaseModal isOpen={isOpen}>
      <ButtonBox>
        <Button onClick={onRequestClose}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.00012 16.8787L16.8788 0.999999"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16.8788 16.8787L1.00012 0.999999"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      </ButtonBox>
      <TextBox>
        <svg
          width="65"
          height="65"
          viewBox="0 0 134 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.53 132.06C102.445 132.06 131.56 102.945 131.56 67.03C131.56 31.1149 102.445 2 66.53 2C30.6149 2 1.5 31.1149 1.5 67.03C1.5 102.945 30.6149 132.06 66.53 132.06Z"
            fill="#E84034"
            stroke="#231815"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
          <path
            d="M82.75 67.0302C87.7316 67.0302 91.77 61.6442 91.77 55.0002C91.77 48.3562 87.7316 42.9702 82.75 42.9702C77.7684 42.9702 73.73 48.3562 73.73 55.0002C73.73 61.6442 77.7684 67.0302 82.75 67.0302Z"
            fill="#231815"
          />
          <path
            d="M52.02 67.0302C57.0016 67.0302 61.04 61.6442 61.04 55.0002C61.04 48.3562 57.0016 42.9702 52.02 42.9702C47.0384 42.9702 43 48.3562 43 55.0002C43 61.6442 47.0384 67.0302 52.02 67.0302Z"
            fill="#231815"
          />
          <path
            d="M52.0099 92.1104C52.0099 83.6204 58.8899 76.7403 67.3799 76.7403C75.8699 76.7403 82.7499 83.6204 82.7499 92.1104"
            stroke="#231815"
            strokeWidth="6"
            strokeMiterlimit="10"
          />
        </svg>
        <Text>
          로그인 시간이 초과되었습니다. <br />
          다시 시도해주세요.
        </Text>
      </TextBox>
    </BaseModal>
  );
};

export default TimeOutModal;
