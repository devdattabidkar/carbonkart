import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

function Signup() {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("company");

  const id = uuidv4();
  const [orgId, setOrgId] = useState(id);
  const [orgName, setOrgName] = useState("");
  const [orgType, setOrgType] = useState("ngo");
  const [bio, setBio] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // connectWallet();
    console.log(
      orgId + " " + orgName + " " + orgType + " " + bio + " " + walletAddress
    );

    await axios
      .post("http://localhost:5000/api/org/add-new-org/", {
        orgId: orgId,
        orgName: orgName,
        orgType: orgType,
        orgBio: bio,
        orgValidAddress: walletAddress,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        } else {
          navigate("/");
        }
      });
  };

  const connectWallet = async (e) => {
    e.preventDefault();
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      (async function () {
        let userAddress = await signer.getAddress();
        setWalletAddress(userAddress);
      })();
    } else {
      alert("install metamask extension!!");
    }
    // setWalletAddress(address);
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
              <label for="name">Bio:</label>
            </div>
            <div className="space-y-4 flex flex-col">
              <input
                type="text"
                className="border p-2"
                placeholder="web3000 foundation"
                defaultValue={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
              <select
                className="border p-2"
                onSelect={(e) => setOrgType(e.target.value)}
              >
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
                placeholder="greener planet"
                defaultValue={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-12">
            <button
              className="bg-black px-6 py-3 text-white"
              onClick={connectWallet}
            >
              {walletAddress
                ? walletAddress.slice(0, 3) + "..." + walletAddress.slice(-3)
                : "Connect Wallet"}
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
