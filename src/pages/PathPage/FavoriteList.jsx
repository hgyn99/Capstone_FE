import styled from "styled-components";
import favoritePlace from "../../assets/icon/favoritePlaceIcon.webp";
import crossIcon from "../../assets/icon/cross.webp";
import { useQuery } from "@tanstack/react-query";
import {
  fetchFavoritePath,
  deleteFavoritePathById,
} from "../../apis/api/paths";

const MainContainer = styled.div`
  border-top: 5px solid ${(props) => props.theme.gray};
  margin-bottom: 10px;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //background-color: green;
  //gap: 5px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: red;
  text-align: left;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 3px solid ${(props) => props.theme.gray};
  padding-left: 20px;
  flex: 3;
`;

const FavoriteListBox = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: gray;
  //padding: 0 10px;
  flex: 7;
  overflow-y: auto;
`;

const FavoriteItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 50px;
  border-bottom: 2px solid ${(props) => props.theme.gray};
`;

const FavoriteIcon = styled.button`
  background-image: url(${favoritePlace});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  margin-left: 20px;
  width: 25px;
  height: 25px;
`;

const DeleteIcon = styled.button`
  background-image: url(${crossIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  margin-left: auto;
  margin-right: 10px;
  width: 25px;
  height: 25px;
`;

// FavoriteList 서버에서 받아오기
const token = localStorage.getItem("token");
const FavoriteList = () => {
  const {
    isLoading,
    data: favoritePathData, // 수정
    refetch: favoritePathRefetch, // 수정
  } = useQuery({
    queryKey: ["favoritePath"],
    queryFn: () => fetchFavoritePath(),
    enabled: !!token, // 수정
    // keepPreviousData: true,
    // staleTime: 5000,
    onError: (e) => {
      console.log(e);
    },
  });

  console.log("token: " + token);

  // const {
  //   isLoading: isLoadingDeleteFavoritePathById,
  //   data: deleteFavoritePathByIdData, // 수정
  //   refetch: deleteFavoritePathByIdRefetch, // 수정
  // } = useQuery({
  //   queryKey: ["favoritePath"],
  //   queryFn: () => deleteFavoritePathById(),
  //   enabled: !token, // 수정
  //   // keepPreviousData: true,
  //   // staleTime: 5000,
  //   onError: (e) => {
  //     console.log(e);
  //   },
  // });

  //console.log(favoritePathData?.data.data);

  // const favorites = [
  //   "전남대학교 광주캠퍼스 정문",
  //   "광주종합터미널",
  //   "북구청",
  //   "공과대학 7호관",
  //   "스타벅스 전남대점",
  //   "전남대학교 스포츠센터",
  // ];

  const hanldeFavoriteRouteDelete = () => {
    console.log("즐겨찾기 경로 삭제");
    //deleteFavoritePathByIdRefetch();
  };

  return (
    <MainContainer>
      <TitleBox>내 즐겨찾기 장소</TitleBox>
      <FavoriteListBox>
        {favoritePathData?.data.data.favoriteRoutes.map(
          (favoriteRoute, index) => (
            <FavoriteItem key={index}>
              <FavoriteIcon />
              {favoriteRoute.name}
              <DeleteIcon
                onClick={() => {
                  //deleteFavoritePathById(favoriteRoute.id);
                }}
              />
            </FavoriteItem>
          )
        )}
      </FavoriteListBox>
    </MainContainer>
  );
};
export default FavoriteList;
