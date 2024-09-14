/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginUser } from "../api/AuthenticationApi";
import Loader from "../utils/Loader";
import { useDispatch } from "react-redux";
import { loginUser as loginUserAction } from "../../store/userSlice";
import { PiStudentFill } from "react-icons/pi";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      setIsLoading(true); // Start loading
      const result = await loginUser(data); // Get the result from loginUser

      if (result.success) {
        const { data } = result;
        window.localStorage.setItem("token", data.token); // Store token
        setUserId(data.userId);
        toast.success(data.message);
        dispatch(
          loginUserAction({
            email: data.email,
            password: data.password,
            userId: data.userId,
          })
        );
        navigate("/");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 overflow-hidden h-screen bg-[url(https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGlnaHQlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D)] lg:bg-none bg-main">
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1543859184-17ac017dde53?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover w-full h-full"
          alt="quiz-mine"
        />
      </div>

      <div className="flex justify-center max-h-screen ">
        <form
          className="border-primary border-solid border-2 rounded-lg h-fit my-auto p-5 w-full lg:w-2/3"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center">
            <PiStudentFill className="text-3xl text-primary mr-2" />
            <span className="text-primary text-3xl text-center font-bold mb-0.5">
              Parvaz
            </span>
          </div>
          <h2 className="text-xl italic font-bold text-center mb-0.5">
            Free Education for All
          </h2>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="font-bold text-lg">
              Email :
            </label>
            <input
              className="border-ternary_light border-solid border-2 rounded-full px-4 py-1 focus:border-primary focus:outline-none"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Your E-mail"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="font-bold text-lg">
              Password :
            </label>
            <input
              className="border-ternary_light border-solid border-2 rounded-full px-4 py-1 focus:border-primary focus:outline-none"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Your Password"
            />
          </div>

          <div className="mb-1">
            <div className="bg-primary border-2 border-solid rounded-full px-4 py-1 text-main text-xl w-full">
              <button
                className="text-main text-xl w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Loader /> : "Log In"}
              </button>
            </div>
          </div>
          <h1 className="italic">Don't have an account yet, then :-</h1>
          <div className="bg-primary border-2 border-solid rounded-full px-4 py-1 text-main text-xl w-full">
            <button className="text-main text-xl w-full" onClick={handleSignUp}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
