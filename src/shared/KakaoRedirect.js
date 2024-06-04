import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SpinnerImg from "../assets/icon/Spinner.gif";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width:100%;
  height:100%;
  position:relative;
`;
const Inner = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`;
const Image = styled.img`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Text = styled.p`
  font-size:13px;
    text-align:center;
`;

const KakaoRedirect = () => {
  const navigate = useNavigate();

  

  // 인가코드 전송
//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_BASE_URL}/members?code=${code}`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//     })
//     .then(res => res.json())
//     .then(data => {
//         if(data.message === 'success'){
//             console.log(data);
//             localStorage.setItem('TOKEN', data.token);
//             localStorage.setItem('nickname', data.nickname);
//             alert('로그인 되었습니다.');
//             navigate('/');
//         } else {
//             alert('로그인에 실패하였습니다.');
//             navigate('/mypage');
//         }
//     });
//   }, [code, navigate]);
// onSuccess: (res) => { 사용


  // useEffect(() => {
  //   axios.post(`${process.env.REACT_APP_BASE_URL}/members?code=${code}`)
  //     .then((res) => {
  //       if(res.ACCESS_TOKEN){
  //         console.log(res.ACCESS_TOKEN);
  //         localStorage.getItem('kakaoLoginToken', res.ACCESS_TOKEN);
  //         alert('로그인 되었습니다.');
  //         navigate('/mypage');
  //       } else {
  //         alert('로그인에 실패하였습니다.');
  //         navigate('/mypage');
  //       }
  //     });
  // }, []);

  // 카카오 로그인 후 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BASE_URL}/members?code=${code}`, {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //   })
  //     .then(res => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       console.log(data.accessToken);
  //       console.log(data.refreshToken);
  //       localStorage.setItem('kakaoLoginToken', data.accessToken);
  //       navigate('/mypage');
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // },[]);

  // axios.post(`${process.env.REACT_APP_BASE_URL}/members/token`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   params: {
  //     grant_type: 'authorization_code',
  //     client_id: process.env.REACT_APP_KAKAO_MAP_API_KEY,
  //     redirect_uri: process.env.REACT_APP_K_REDIRECT_URI,
  //     code:code,
  //   },
  // })
  // .then(res => {
  //   console.log(res.data);
  //   localStorage.setItem('kakaoLoginToken', res.accessToken);
  //   navigate('/mypage');
  // })


  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/members`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({code: code}),
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.data.accessToken);
        console.log(data.data.refreshToken);
        localStorage.setItem('kakaoLoginToken', data.data.refreshToken);
        navigate('/mypage');
      })
      .catch((error) => {
        console.error('Error:', error);
    })
  });

  
  return(
    <Layout>
      <Container>
        <Inner>
          <Image src={SpinnerImg} alt="spinner" />
          <Text>
              잠시만 기다려주세요!<br/>
              로그인 중 입니다.
          </Text>
        </Inner>
      </Container>
    </Layout>
  );
}

export default KakaoRedirect;