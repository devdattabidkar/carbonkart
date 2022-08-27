import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("company");

  const authUser = () => {
    navigate("/");
  };

  return (
    <section>
      <div className="min-h-screen flex bg-gray-100 justify-center items-center">
        <div className="w-96 bg-white p-10 rounded-md">
          <p className="text-xl font-bold mb-12">Login</p>
          <div className="flex flex-col justify-center items-center mt-12 space-y-6 text-sm">
            <button
              className="bg-black px-6 py-3 text-white"
              onClick={authUser}
            >
              Login with Metamask
            </button>
            <button className="bg-black px-6 py-3 text-white">
              Login with Unstoppable domains
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
