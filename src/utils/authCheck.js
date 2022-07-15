import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "src/utils/firebase";
import { setUser } from "src/store/actions";

const authCheck = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);
};

export default authCheck;
