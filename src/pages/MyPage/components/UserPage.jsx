import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import uploadImg from "../../../assets/icon/basicUserImage.png";
import { IoLocationSharp } from "react-icons/io5"; //장소 아이콘
import trafficIcon from "../../../assets/icon/trafficlight.svg"
import routeIcon from "../../../assets/icon/route.svg"
import { PiUser } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";

const Container = styled.div`
  width:100%;
  height:100%;
  position:relative;
  background-color:#F8F8FF;
`;
const UserContainer = styled.div`
  width:350px;
  height:180px;
  border-radius:10px;
  background-color:#fff;
  position:absolute;
  left:50%;
  top:20px;
  transform:translate(-50%, 0);
`;
const UserProfile = styled.div`
  width:100%;
  margin-top:25px;
  position:relative;
`;
const UserProfileInner = styled.div`
  position:absolute;
  left:50%;
  transform:translate(-50%, 0);
`;
const UserImgBox = styled.div`
  width:100px;
  height:100px;
  position:relative;
  border-radius:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const UserImg = styled.img`
  width:100%;
  height:100%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  overflow:hidden;
  border-radius:100%;
`;
const UserName = styled.p`
  font-size:20px;
  font-weight:bold;
  margin:10px;
  letter-spacing:3px;
  text-align:center;
  span{
    font-size:15px;
    font-weight:normal;
  }
  display:flex;
  justify-content:center;
  align-items:end;
`;

const FavoriteContainer = styled.div`
  width:100%;
  height:calc(100% - 220px);
  background-color:#fff;
  position:absolute;
  top:220px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding-left:15px;
  margin-top:25px;
`;

const FavoriteButton = styled.div`
  width:330px;
  height:85px;
  border:1px solid #dadada;
  border-radius: 10px;
  padding:5px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin: 10px 20px;
`;

const StyledLink = styled(Link)`
  width: 110px;
  height: 60px;
  text-decoration:none;
  border-right:1px solid #dadada;
  &:last-child{
    border-right:none;
  }
`;

const IconBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const TrafficIcon = styled.img`
  width: 20px;
  height: 36px;
`;

const RouteIcon = styled.img`
  width: 35px;
  height: 36px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  color:#000;
  text-decoration:none;
  margin:5px;
  text-align:center;
`;  

const ProfileEditButton = styled.div`
  width:100%;
  border-top:1px solid #dadada;
  border-bottom:1px solid #dadada;
  margin-top:25px;
`;

const EditList = styled.div`
  width:100%;
  margin:15px 0;
  padding:5px 20px;
`;

const EditLink = styled(Link)`
  text-decoration:none;
  display:flex;
  align-items:center;
  gap:18px;
`;

const UserPage = () => {
  return(
    <Container>
      <UserContainer>
        <UserProfile>
          <UserProfileInner>
            <UserImgBox>
              <UserImg
                src={uploadImg}
                size={100}
              />
            </UserImgBox>
            <UserName>홍길동<span>님</span></UserName>
          </UserProfileInner>
        </UserProfile>
      </UserContainer>
      <FavoriteContainer>
        <Title>즐겨찾기</Title>
        <FavoriteButton>
          <StyledLink to="/">
            <IconBox>
              <IoLocationSharp color="#B4D491" size="38" stroke="#373838" strokeWidth="5px"/>
            </IconBox>
            <Text>장소</Text>
          </StyledLink>
          <StyledLink to="/">
            <IconBox>
              <TrafficIcon src={trafficIcon} alt="traffic icon" />
            </IconBox>
            <Text>신호등</Text>
          </StyledLink>
          <StyledLink to="/">
            <IconBox>
              <RouteIcon src={routeIcon} alt="route icon" />
            </IconBox>
            <Text>경로</Text>
          </StyledLink>
        </FavoriteButton>
        <ProfileEditButton>
        <Title>프로필 관리</Title>
          <EditList>
            <EditLink to="/">
              <PiUser size="26" color="#666666"/>
               <Text>회원 정보 수정</Text>
            </EditLink>
          </EditList>
          <EditList>
            <EditLink to="/">
              <LuLogOut size="26" color="#666666"/>
              <Text>로그아웃</Text>
            </EditLink>
          </EditList>
        </ProfileEditButton>
      </FavoriteContainer>
    </Container>
  );
}

export default UserPage;