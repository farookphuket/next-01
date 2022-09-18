import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "../libs/axios";

import { getCookie, setCookie, hasCookie, deleteCookie } from "cookies-next";
export const useAuth = ({ middleware, kickTo } = {}) => {
  const router = useRouter();

  const [userRootUrl, setUserRootUrl] = useState("/");

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axios
      .get("/api/user")
      .then((res) => res.data)
      .catch((error) => {
        //console.log(error);
        if (error.response.status !== 409) throw error;
      })
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const login = async ({ setError, setSuccess, ...props }) => {
    await csrf();

    setError([]);
    setSuccess(null);

    axios
      .post("/api/login", props)
      .then((res) => {
        mutate(res);
        res.data;
        //   console.log(res.data.user);
        setCookie("user_root_url", res.data.user_root_url);
        setCookie("user_id", res.data.user_id);
        let sc = `<span style="font-weight:bold;color:green">${res.data.msg}</span>`;
        setSuccess(sc);
        setTimeout(() => {
          window.location.pathname = res.data.user_root_url;
        }, 2000);
      })
      .catch((error) => {
        let eM = "";
        if (error.response.status === 422) {
          eM = Object.values(error.response.data.errors).join();
        }
        if (error.response.status === 401) {
          eM = error.response.data.msg;
        }
        setError(`<span style="font-weight:bold;color:red">${eM}</span>`);
      });
  };

  const register = async ({ setError, setSuccess, ...props }) => {
    await csrf();

    setError([]);
    setSuccess(null);
    axios
      .post("/api/register", props)
      .then((res) => {
        setSuccess(
          `<span style="font-weight:bold;color:green;">${res.data.msg}</span>`
        );
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      })
      .catch((error) => {
        let eM = "";
        if (error.response.status === 422) {
          eM = Object.values(error.response.data.errors).join();
        }
        if (error.response.status === 401) {
          eM = error.response.data.msg;
        }
        setError(`<span style="font-weight:bold;color:red">${eM}</span>`);
      });
  };

  const logout = async () => {
    await csrf();
    axios
      .post("/api/member/logout")
      .then((res) => {
        mutate(res);

        setTimeout(() => {
          window.location.pathname = "/";
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });

    if (hasCookie("USER_ROOT_URL") || hasCookie("user_root_url")) {
      // console.log(getCookie("USER_ROOT_URL"));
      deleteCookie("USER_ROOT_URL");
      deleteCookie("user_root_url");
      deleteCookie("user_id");
    }
  };

  useEffect(() => {
    //console.log(getCookie("user_root_url"));
    if (middleware === "auth" && error) {
      window.location.pathname = kickTo;
    }
  }, [user, error]);
  return {
    user,
    userRootUrl,
    login,
    register,
    logout,
  };
};
