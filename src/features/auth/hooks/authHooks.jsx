import {  useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../authSlice";
function useAuth() {

let dispatch = useDispatch()

const navigate= useNavigate()
    let {register,handleSubmit,formState:{errors},reset}=useForm()

  const handleRegister = (data) => {
    console.log("register data ->",data);
let users = JSON.parse(localStorage.getItem("userData"))||[];
users.push(data)

  localStorage.setItem("userData", JSON.stringify(users));
navigate("/")
    
    
  };

const handleLogin = (data) => {

  let users = JSON.parse(localStorage.getItem("userData")) || [];

  let user = users.find(
    (val) =>
      val.email === data.email &&
      val.password === data.password
  );

  if (user) {
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );
    localStorage.setItem("isLoggedIn",JSON.stringify(true))

    dispatch(setUser(user));

    navigate("/");
  } else {
    alert("user not found");
  }
};

  return {
    handleRegister,
    navigate,
    handleLogin,
    register,
    handleSubmit,
    errors,
    reset
  };
}

export default useAuth;