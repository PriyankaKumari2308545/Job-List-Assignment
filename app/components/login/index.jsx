import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import Input from "../input/Input";
import Button from "../button/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { login } from "../../utils/api";
import { setUserData } from "../../globalRedux/feature/userSlice";
import { useDispatch } from "react-redux";


function Login({ modal, setModal, setLogin }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handChange = (e) => {
    const name = e.target.name;
    setLoginData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await login(loginData);
      setModal(false);
      console.log(result, "result");
      dispatch(setUserData(result));
      setLoginData({
    username: "",
    password: ""
  });
    } catch (error) {
      console.log(error, "data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={modal} onClose={() => setModal(false)}>
      <h2 className="font-medium text-xl leading-8 text-gray-800 mb-8 text-center">
        Login to Superio
      </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Email"
          label="Email Address"
          id="username"
          name="username"
          value={loginData.username}
          onChange={handChange}
        />
        <br />
        <Input
          placeholder="Password"
          type="password"
          label="Password"
          name="password"
          id="password"
          value={loginData.password}
          onChange={handChange}
        />
        <br />
        <div className="flex justify-between">
          <div className="flex gap-2 text-base leading-5 text-gray-800 whitespace-no-wrap">
            <input type="checkbox"></input>
            <label className="text-[13px]">Remember me</label>
          </div>
          <div className="text-base leading-5 text-gray-800 whitespace-no-wrap">
            <p className="text-[13px] leading-5 text-gray-800 whitespace-no-wrap">
              Forgot password?
            </p>
          </div>
        </div>
        <div className="mt-8">
          {loading ? (
            <Button disabled type="button">
              <div className="py-3">
                {" "}
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </div>
            </Button>
          ) : (
            <Button>
              <div className="py-2">Log In</div>
            </Button>
          )}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[13px] leading-5 text-dimgray text-center mt-1">
            Don't have an account?{" "}
            <span
              className="cursor-pointer"
              onClick={() => setLogin((prev) => !prev)}
            >
              Signup
            </span>
          </p>
        </div>
        <div className="divider text-center">
          <span className="text-[13px] leading-5 text-dimgray mx-4 mt-10">
            or
          </span>
        </div>
        <div className="mt-10 mb-5 flex w-[100%] gap-4">
          <button
            type="button"
            className="text-blue-700 w-[100%]  hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
          >
            {" "}
            <div className="flex justify-center items-center gap-2">
              <FaFacebookF />
              <span> Log In via Facebook</span>
            </div>
          </button>

          <button
            type="button"
            className="text-red-700 w-[100%] hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 "
          >
            <div className="flex items-center justify-center  gap-2">
              <FaGoogle />
              <span> Log In via Gmail</span>
            </div>
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default Login;
