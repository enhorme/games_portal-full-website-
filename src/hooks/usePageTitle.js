import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const usePageTitle = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const pathArr = pathname.split("/");
    const title = pathArr[pathArr.length - 1]
      .split("-")
      .join(" ")
      .toUpperCase();
    setTitle(title);
  }, [pathname]);

  return title;
};

export default usePageTitle;
