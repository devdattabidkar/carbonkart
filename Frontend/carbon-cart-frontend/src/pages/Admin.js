import axios from "axios";
import { useState, useEffect } from "react";

function Admin() {
  const [ngoData, setNgoData] = useState([]);

  const showData = async () => {
    const data = await axios
      .get("http://localhost:5000/api/admin/get-all-ngos")
      .then((res) => setNgoData(res.data));
  };
  console.log(ngoData);

  const verifyNFT = (nftId) => {
    alert(nftId + " verified");
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-bold mt-12">Verify NFT Data</p>
        <button
          className="bg-black px-6 py-3 text-sm text-white mt-12"
          onClick={showData}
        >
          Show NFT Data
        </button>
        <div className="grid grid-cols-3 mt-12 space-x-10">
          <div className="flex flex-col">
            <p className="p-3 bg-gray-100 font-bold">NGO Name</p>
            <div className="mt-6 space-y-8">
              {ngoData.map((ngo, idx) => {
                return <p key={idx}>{ngo.ngoName}</p>;
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="p-3 bg-gray-100 font-bold">NFT ID</p>
            <div className="mt-6 space-y-8">
              {ngoData.map((ngo, idx) => {
                return <p key={idx}>{ngo.nftId}</p>;
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="p-3 bg-gray-100 font-bold">Verification Status</p>
            <div className="mt-6 space-y-4 flex flex-col">
              {ngoData.map((ngo, idx) => {
                return ngo.verificationStatus ? (
                  <button className="px-4 py-2 bg-green-100 blocked text-green-800 text-sm">
                    Verified
                  </button>
                ) : (
                  <button
                    className="px-4 py-2 bg-red-100 text-red-800 text-sm"
                    onClick={() => verifyNFT(ngo.nftId)}
                  >
                    Verify
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
