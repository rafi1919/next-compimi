import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useCookieToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const cookieToken = Cookies.get("token");
    if (cookieToken) {
      setToken(cookieToken);
    }
  }, []);

  return token;
};

export default useCookieToken;
