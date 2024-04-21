import React from "react";

import { Cookies, useCookies } from "react-cookie";
function Main() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const username = cookies.username;
  return <div>Hello {username}</div>;
}
export default Main;
