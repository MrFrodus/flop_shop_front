import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useFormik } from "formik";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { rootStore } from "../strores/rootStore";

const SignIn = observer(() => {
  const [errorMsg, setErrorMsg] = useState("");

  const { profileStore } = rootStore;

  const navigate = useNavigate();

  const onSubmit = async (values: any) => {
    try {
      await profileStore.logIn(values);
      navigate("/");
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        setErrorMsg(error!.response!.data.message);
      } else {
        console.log(error);
      }
    }
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <div className="flex justify-center relative">
      <div
        className="flex border rounded-md flex-col 
          items-center w-1/5 h-full my-4 min-w-[25rem]
          bg-slate-100"
      >
        <h1 className="m-8 text-xl">Sign In</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center 
              justify-between h-full my-8 w-60"
        >
          <div className=" mb-4 w-full ">
            <label htmlFor="Email">Email</label>
            <input
              value={values.email}
              onChange={handleChange}
              id="email"
              type="email"
              className="border-b border-solid border-black 
                  focus:outline-none w-full py-2 bg-slate-100"
            />
          </div>

          <div className=" mb-4 w-full ">
            <label htmlFor="password">Password</label>
            <input
              value={values.password}
              onChange={handleChange}
              id="password"
              type="password"
              className="border-b border-solid border-black 
                  focus:outline-none w-full py-2 bg-slate-100"
            />
          </div>

          <p className={errorMsg ? "text-rose-500" : "absolute -left-[999px]"}>
            {errorMsg}
          </p>

          <button
            type="submit"
            className="py-2 px-4 rounded-md
              bg-violet-800 text-white mt-2
              disabled:opacity-50"
            disabled={!(values.email && values.password)}
          >
            Log in
          </button>
        </form>
        <div className="mb-4">
          Don`t have an account?&nbsp;
          <Link
            to="/signIn"
            className="underline hover:text-blue-500 "
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
});

export default SignIn;
