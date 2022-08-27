import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Signup() {
  const [userType, setUserType] = useState("company");

  const initialFormData = {
    orgId: "",
    name: "",
    userType: "",
    username: "",
    bio: "",
    walletAddress: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = uuidv4();

    setFormData({ ...formData, ["orgId"]: id });

    console.log(formData);

    // try {
    //   // Send POST request
    //   await axios.post("http://localhost:5000/api/v1/person", formData);

    //   // Reset form data
    //   setFormData(initialFormData);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleChange = (e) => {
    connectWallet();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const connectWallet = () => {
    const address = "0xasdfml";
    setFormData({ ...formData, ["walletAddress"]: address });
  };

  return (
    <section>
      <div className="min-h-screen flex bg-gray-100 justify-center items-center">
        <div className="w-96 bg-white p-10 rounded-md">
          <p className="text-xl font-bold mb-12">Sign Up</p>
          <div className="grid grid-cols-2 text-sm">
            <div className="space-y-10 flex flex-col">
              <label for="name">Name:</label>
              <label for="name">We are a :</label>
              <label for="name">Username:</label>
              <label for="name">Bio:</label>
            </div>
            <div className="space-y-4 flex flex-col">
              <input
                type="text"
                className="border p-2"
                placeholder="web3000 foundation"
                defaultValue={formData.name}
                onChange={(e) => handleChange(e)}
              />
              <select className="border p-2">
                <option value="company" className="p-2">
                  Company
                </option>
                <option value="ngo" className="p-2">
                  NGO
                </option>
              </select>
              <input
                type="text"
                className="border p-2"
                placeholder="@web3000fdtn"
                defaultValue={formData.username}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                className="border p-2"
                placeholder="greener planet"
                defaultValue={formData.bio}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-12">
            <button className="bg-black px-6 py-3 text-white">
              Connect Wallet
            </button>
            <button
              className="mt-4 bg-gradient-to-r from-[#39f6e4] to-[#0087ff] px-6 py-3 text-white"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
