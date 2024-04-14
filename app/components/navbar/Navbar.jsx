"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import Login from "../login";
import Signup from "../singup";
import { clearUser } from "../../globalRedux/feature/userSlice";
import { isLoggedIn, logout } from "../../utils/auth";
import { getUserData } from "../../utils/api";
import { setUserData } from "../../globalRedux/feature/userSlice";
import Link from "next/link";

export default function Navbar() {
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(true);
  const count = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn()) {
      fetchUser();
    }
  }, []);

  async function fetchUser() {
    try {
      const result = await getUserData();
      dispatch(setUserData(result));
    } catch (error) {
      console.log(error);
    }
  }

  const authButton = () => {
    if (isLoggedIn()) {
      return (
        <div className="flex gap-4">
          <Button
            variant="Secondry"
            onClick={() => {
              logout();
              dispatch(clearUser());
            }}
          >
            Logout
          </Button>
          <div className="flex justify-center items-center">
            <div className="w-[40px] text-[35px]">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </div>
            <p className="">{count.user?.username}</p>
          </div>
        </div>
      );
    } else {
      return (
        <Button buttonType="Secondry" onClick={() => setModal(true)}>
          Login / Register
        </Button>
      );
    }
  };

  return (
    <div>
      <header className="main-header bg-[#fff]">
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <div className="mr-6">
                <a href="#" className=" text-3xl text-[#1967d2]">
                  <h2>
                    <strong>Learnkoods</strong>
                  </h2>
                </a>
              </div>
              <div
                className="flex-col md:flex-row md:ml-auto mt-3 md:mt-0 items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-collapse"
              >
                <Link
                  className="p-2 lg:px-4 md:mx-2 text-[#202124] text-[13px] rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  href="/"
                >
                  Home
                </Link>

                
                <Link
                  className="p-2 lg:px-4 md:mx-2 text-[#202124] text-[13px] rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  href="/jobs"
                >
                  Find Jobs
                </Link>
                <a
                  href="#"
                  className="p-2 text-[13px] lg:px-4 md:mx-2 text-[#202124] rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Employers
                </a>
                <a
                  href="#"
                  className="p-2 text-[13px] lg:px-4 md:mx-2 text-[#202124] rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Candidates
                </a>
                <a
                  href="#"
                  className="p-2 text-[13px] lg:px-4 md:mx-2 text-[#202124] rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="p-2 text-[13px] lg:px-4 md:mx-2 text-[#202124] rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  About Us
                </a>
              </div>
            </div>
            <div
              className="gap-3 md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 items-center"
              id="navbar-collapse"
            >
              <a
                href="#"
                className="p-2 text-[13px] lg:px-4 md:mx-2  text-[#1967d2] rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Upload your CV
              </a>
              {/* <div className="">
                {" "}
                <Button>Job Post</Button>
              </div> */}
              <div>{authButton()}</div>
            </div>
          </div>
        </nav>
      </header>
      {login ? (
        <Login modal={modal} setModal={setModal} setLogin={setLogin} />
      ) : (
        <Signup modal={modal} setModal={setModal} setLogin={setLogin} />
      )}
    </div>
  );
}
