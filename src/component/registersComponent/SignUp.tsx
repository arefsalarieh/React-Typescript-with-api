import { Formik } from "formik";
import { signUpType, sendSignUpType } from "../../types/signUpTypes";
import { Link, useNavigate } from "react-router-dom";
import http from "../../core/services/interceptor";
import useQueryGet from "../../hooks/useQueryGet";
import { users } from "../../types/usersType";

const SignUp = () => {
  const navigate = useNavigate();
  // const {mutate , isSuccess} = useMutationPost<void , sendSignUpType>(`users` , '')

  // const handleSignUp =async (values: signUpType) => {
  //   const obj: sendSignUpType = {
  //     email:values.email,
  //     password:values.password,

  //   }
  //    mutate(obj)
  // };

  const { data } = useQueryGet<users[]>(`/users`, ["usersUp"]);

  const handleSignUp = async (values: signUpType) => {

    if(values.password !== values.confirmPassword){
      alert("check password please");
    }

    let repeat = false;
    data?.forEach((item) => {
      if (item.email === values.email) {
        alert("email tekrari");
        repeat = true;
      }
    });

    if (values.password === values.confirmPassword && repeat === false) {
      const obj: sendSignUpType = {
        email: values.email,
        password: values.password,
      };
      const res = await http.post("/users", obj);
      if (res.status === 201) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="h-lvh bg-gradient-to-r from-[#01CEC939] to-[#E4890039] border border-transparent">
      <div className=" w-[30%] h-2/3 mx-auto mt-32 bg-[#FCFCFC] rounded-3xl">
        <h1 className="text-center my-8">Reguster</h1>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={handleSignUp}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <label className="input input-bordered flex items-center gap-2 w-[70%] mx-auto mt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="grow"
                  placeholder="Email"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2  w-[70%] mx-auto mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="grow"
                  placeholder="enter your password"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2  w-[70%] mx-auto mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  className="grow"
                  placeholder="confirm your password"
                />
              </label>

              <div className=" w-24 mx-auto mt-8">
                <button type="submit" className="btn btn-primary mx-auto ">
                  Sign up
                </button>
              </div>
              <div className="flex justify-center mt-10 gap-6 ">
                  <h3>You have account?</h3>
                  <Link to='/login' className=" text-blue-600">Login</Link>
              </div>
            </form>
          )}
        </Formik>
          <div  className="mt-20 ms-4 text-green-400">
             <Link to='/'>Return home</Link>
          </div>
      </div>
    </div>
  );
};

export default SignUp;
