import axios from "axios";

const BASE_URL = "https://api.rawg.io/api/games";
export const getGamesList = axios.create({
  baseURL: BASE_URL,
  params: {
    key: "f228528bf53d4f0d99581d006a497729",
  },
});
