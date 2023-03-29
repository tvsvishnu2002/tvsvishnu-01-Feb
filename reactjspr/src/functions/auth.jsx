import Cookies from "universal-cookie";

import axios from "axios";
let cookie = new Cookies();
export const clearCookie = () => {

    Object.keys(cookie.getAll()).map((ele) => {
  
      cookie.set(ele, "", { path: "/", expires: new Date() });
  
      return true;
  
    });
  
  };
export const checkAuth = async () => {
  if (cookie.get("session_id")) {
    let res = await axios.post(
      "http://localhost:3001/auth",
      { session_id: cookie.get("session_id") },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data.sessionExist;
  } else {
    // cookie.set("session_id", "", { path: "/", expires: new Date() });
    return false;
  }
};
// dispatcher(setLogins([res.data, sessionStorage.getItem("username")]));
//           navigate("/bug-hunter");

export const logout = async () => {
  
  let flag = false;
  await axios
    .post(
      "http://localhost:3001/logout",
      { session_id: cookie.get("session_id") },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => response.data)
    .then((data) => {
      cookie.set("session_id", "", { path: "/", expires: new Date() });
      clearCookie();
      flag = data;
    });
  return flag;
};

