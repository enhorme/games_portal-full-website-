import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default ({ formType, fromPage }) => {
  const [userName, setUserName] = useState({ user: "", message: "" });
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const auth = getAuth();

    if (formType === "signup")
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUserName({ user, message: "Your registration is successful" });
          navigate(fromPage);
          reset();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`${errorCode}:${errorMessage}`);
        });
    else if (formType === "signin")
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUserName({ user, message: "You are sign in" });
          reset();
          navigate(fromPage);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`${errorCode}:${errorMessage}`);
        });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <label>
        Email:
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Incorrect email",
            },
          })}
        />
      </label>
      {errors.email && <p>{errors.email.message}</p>}

      <label>
        Password
        <input
          type="password"
          {...register("password", {
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
      </label>
      {errors.password && <p>{errors.password.message}</p>}

      {formType === "signup" ? (
        <>
          <label>
            Repeat password
            <input
              type="password"
              {...register("passwordRepeat", {
                required: true,
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
          </label>
          {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}
        </>
      ) : null}

      <input type="submit" value="Submit" />
    </form>
  );
};
