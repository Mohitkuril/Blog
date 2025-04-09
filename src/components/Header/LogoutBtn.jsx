import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    console.log("Logging out..."); // Debugging log
    authService
      .logOut()
      .then(() => {
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => console.error("Logout failed:", error));
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
