import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useFormik } from "formik";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import registerSchema from "../schemas/registerSchema";
import { rootStore } from "../strores/rootStore";

const Register = observer(() => {
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const { profileStore } = rootStore;

  const onSubmit = async (values: any) => {
    try {
      await profileStore.register({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        mobile: values.mobile,
        password: values.password,
      });
      setSuccess(true);
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        setErrorMsg(error!.response!.data.message);
      } else {
        console.log(error);
      }
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      password: "",
      confirm_pwd: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="flex justify-center relative">
      {success ? (
        <div className="flex flex-col items-center mt-4">
          <h1 className="py-2 text-lg font-bold">Success!</h1>
          <p className="py-2">
            Congratulations, your account has been successfully created.
          </p>
          <Link to="/signIn">
            <button
              type="button"
              className="py-2 px-4 rounded-md
              bg-violet-800 text-white mt-4
              disabled:opacity-50"
            >
              Log in
            </button>
          </Link>
        </div>
      ) : (
        <div
          className="flex border rounded-md flex-col 
          items-center w-2/5 h-full my-4 min-w-[25rem]
          bg-slate-100"
        >
          <h2 className="m-8 text-xl">Registration form</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center 
              justify-between h-full my-8 w-80"
          >
            <div className="flex flex-row w-80 mb-4 justify-between">
              <div className="">
                <label htmlFor="first_name">First Name</label>
                <input
                  value={values.first_name}
                  onChange={handleChange}
                  id="first_name"
                  type="text"
                  onBlur={handleBlur}
                  className={`border-b border-solid border-black flex justify-items-start
                    focus:outline-none w-36 py-2 bg-slate-100 ${
                      errors.first_name && touched.first_name
                        ? "border-rose-500 border-solid"
                        : ""
                    }`}
                />
                {errors.first_name && touched.first_name && (
                  <p className="text-rose-500">{errors.first_name}</p>
                )}
              </div>
              <div className=" ">
                <label htmlFor="last_name">Last name</label>
                <input
                  value={values.last_name}
                  onChange={handleChange}
                  id="last_name"
                  type="text"
                  onBlur={handleBlur}
                  className={`border-b border-solid border-black flex justify-items-end
                    focus:outline-none w-36 py-2 bg-slate-100 ${
                      errors.last_name && touched.last_name
                        ? "border-rose-500 border-solid"
                        : ""
                    }`}
                />
                {errors.last_name && touched.last_name && (
                  <p className="text-rose-500">{errors.last_name}</p>
                )}
              </div>
            </div>

            <div className=" mb-4 w-full ">
              <label htmlFor="mobile">Mobile</label>
              <input
                value={values.mobile}
                onChange={handleChange}
                id="mobile"
                type="tel"
                onBlur={handleBlur}
                className={`border-b border-solid border-black 
                  focus:outline-none w-full py-2 bg-slate-100 ${
                    errors.mobile && touched.mobile
                      ? "border-rose-500 border-solid"
                      : ""
                  }`}
              />
              {errors.mobile && touched.mobile && (
                <p className="text-rose-500">{errors.mobile}</p>
              )}
            </div>

            <div className=" mb-4 w-full ">
              <label htmlFor="Email">Email</label>
              <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                onBlur={handleBlur}
                className={`border-b border-solid border-black 
                  focus:outline-none w-full py-2 bg-slate-100 ${
                    errors.email && touched.email
                      ? "border-rose-500 border-solid"
                      : ""
                  }`}
              />
              {errors.email && touched.email && (
                <p className="text-rose-500">{errors.email}</p>
              )}
            </div>

            <div className=" mb-4 w-full ">
              <label htmlFor="password">Password</label>
              <input
                value={values.password}
                onChange={handleChange}
                id="password"
                type="password"
                onBlur={handleBlur}
                className={`border-b border-solid border-black 
                  focus:outline-none w-full py-2 bg-slate-100 ${
                    errors.password && touched.password
                      ? "border-rose-500 border-solid"
                      : ""
                  }`}
              />
              {errors.password && touched.password && (
                <p className="text-rose-500">{errors.password}</p>
              )}
            </div>

            <div className=" mb-4 w-full ">
              <label htmlFor="confirm_pwd">Confrim password</label>
              <input
                value={values.confirm_pwd}
                onChange={handleChange}
                id="confirm_pwd"
                type="password"
                onBlur={handleBlur}
                className={`border-b border-solid border-black 
                  focus:outline-none w-full py-2 bg-slate-100 ${
                    errors.confirm_pwd && touched.confirm_pwd
                      ? "border-rose-500 border-solid"
                      : ""
                  }`}
              />
              {errors.confirm_pwd && touched.confirm_pwd && (
                <p className="text-rose-500">{errors.confirm_pwd}</p>
              )}
            </div>

            <p
              className={errorMsg ? "text-rose-500" : "absolute -left-[999px]"}
            >
              {errorMsg}
            </p>

            <button
              type="submit"
              className="py-2 px-4 rounded-md
              bg-violet-800 text-white mt-2
              disabled:opacity-50"
              disabled={!(isValid && dirty)}
            >
              Sign up
            </button>
            {}
          </form>
          <div className="mb-4">
            Already registrated?&nbsp;
            <Link
              to="/signIn"
              className="underline hover:text-blue-500 "
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
});

export default Register;
