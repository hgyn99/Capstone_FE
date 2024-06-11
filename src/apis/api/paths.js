import { pathInstance } from "..";

export const fetchPathDetail = ({ startLat, startLng, endLat, endLng }) => {
  console.log("전송하는 startLat: " + startLat);
  console.log("전송하는 startLng: " + startLng);
  console.log("전송하는 endLat: " + endLat);
  console.log("전송하는 endLng: " + endLng);
  return pathInstance.get("/detail", {
    params: {
      startLat: startLat,
      startLng: startLng,
      endLat: endLat,
      endLng: endLng,
    },
  });
};

export const fetchFavoritePath = () => {
  return pathInstance.get("/favorite");
};

export const addFavoritePath = ({
  name,
  startName,
  startLat,
  startLng,
  endName,
  endLat,
  endLng,
}) => {
  return pathInstance.post("/favorite", {
    params: {
      name: name,
      startName: startName,
      startLat: startLat,
      startLng: startLng,
      endName: endName,
      endLat: endLat,
      endLng: endLng,
    },
  });
};

export const fetchFavoritePathById = (trafficId) => {
  return pathInstance.get(`/favorite/${trafficId}`);
};

export const deleteFavoritePathById = (favoriteId) => {
  return pathInstance.delete(`/favorite/${favoriteId}`);
};

export const updateFavoritePathById = (favoriteId) => {
  return pathInstance.put(`/favorite/${favoriteId}`);
};
