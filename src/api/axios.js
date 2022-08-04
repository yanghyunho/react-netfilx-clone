import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "31adec3f9f813bc658428e42df53ec21",
    language: "ko-KR",
  },
});

export default instance;
