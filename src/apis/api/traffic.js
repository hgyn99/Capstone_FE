import { trafficInstance } from "..";

export const fetchTraffic = () => {
  return trafficInstance.get();
};

export const fetchFavoriteTraffic = () => {
  return trafficInstance.get("/favorite");
};

export const addFavoriteTraffic = () => {
  return trafficInstance.post("/favorite");
};

export const fetchTrafficById = ({ trafficId }) => {
  return trafficInstance.get(`/${trafficId}`);
};

export const deleteFavoriteTraffic = ({ trafficId }) => {
  return trafficInstance.delete(`/favorite/${trafficId}`);
};

export const updateFavoriteTraffic = ({ trafficId }) => {
  return trafficInstance.put(`/favorite/${trafficId}`);
};
