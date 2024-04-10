import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import kakaoImage from '../../../assets/icon/kakaoImage.png';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '12px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    width: '350px',
    height: '175px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
};

const KakaoLoginButton = styled.button`
  background-color: #FEE500;  // 카카오 노란색
  border-radius: 12px;
  border: none;
  color: black;
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 300px;
  height: 50px;  
  cursor: pointer;
  margin-top: 20px;
`;

const KakaoLoginButtonImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px; 
`;

const Text = styled.p`
  font-size: 18px; 
  text-align: center;
`;

const KakaoLoginButtonText = styled.span`
  flex-grow: 1;
  text-align: center;
`;

Modal.setAppElement('#root'); // 웹 접근성을 위한 설정



const MyModal = ({ isOpen, onRequestClose }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <Text>로그인이 필요한 서비스 입니다.</Text>
      <KakaoLoginButton>
        <KakaoLoginButtonImage src={kakaoImage} alt="Kakao logo" />
        <KakaoLoginButtonText>카카오톡으로 시작하기</KakaoLoginButtonText>
      </KakaoLoginButton>
    </Modal>
  );
};

export default MyModal;
