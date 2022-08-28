import Axios from "axios";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(timezone);
dayjs.extend(utc);

const authHelper = {
  getUser: () => JSON.parse(localStorage.getItem("user")),
  setUser: (user) => localStorage.setItem("user", JSON.stringify(user)),
  isLoggedIn: () => JSON.parse(localStorage.getItem("user"))?.token?.length > 0,
  signOut: () => localStorage.removeItem("user"),
};

const formatToUserTime = (date) =>
  dayjs.tz(new Date(date), Intl.DateTimeFormat().resolvedOptions().timeZone);

function authRequestInterceptor(config) {
  config.headers["Accept"] = "application/json";
  config.headers["content-type"] = "application/json";
  config.headers["Authorization"] = JSON.parse(
    localStorage.getItem("user")
  )?.token;
  return config;
}

// pull the server URL from a config
export const axios = Axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1", //import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
export { authHelper, formatToUserTime };
