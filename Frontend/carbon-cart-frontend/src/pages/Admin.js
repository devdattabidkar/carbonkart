import axios from "axios";
import { useState, useEffect } from "react";

function Admin() {
  const [ngoData, setNgoData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [nftData, setNftData] = useState(null);
  const [ccValue, setCcValue] = useState(0);

  const showData = async () => {
    const data = await axios
      .get("http://localhost:5000/api/admin/get-all-ngos")
      .then((res) => setNgoData(res.data));
  };
  console.log(ngoData);

  const verifyNFT = async (nftId) => {
    setPopup(true);
  };

  const verifyData = async (nftId) => {
    await axios.put(
      `http://localhost:5000/api/admin/update-verification-status/${nftId}`,
      {
        ccValue: ccValue,
      }
    );
    setPopup(false);
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
      {popup && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-10 bg-gray-100">
          <div className="w-96 bg-white p-10 rounded-md border">
            <p className="text-xl font-bold mb-8">NFT Details</p>

            <div className="flex flex-col text-sm">
              <p>proof-of-work images link</p>
              <a
                href="https://artofgiving.in.net/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-23-at-12.02.58.jpeg"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                proof-of-work-1
              </a>
              <a
                href="https://drop.ndtv.com/albums/NEWS/tree-plantation-in-india/tree-plantation-in-india_640x480.jpg"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                proof-of-work-2
              </a>
              <div className="flex mt-4">
                <label for="cc">Assign Carbon Credit(s)</label>
                <input
                  defaultValue="0"
                  onChange={(e) => setCcValue(e.target.value)}
                  className="p-2 border"
                />
              </div>
            </div>

            <div className="flex justify-center items-center mt-12 space-x-6 text-sm">
              <button
                className="bg-gradient-to-r from-[#0087ff] to-[#39f6e4] text-white px-6 py-3"
                onClick={() => setPopup(false)}
              >
                Verify
              </button>
              <button
                className="bg-black px-6 py-3 text-white text-sm"
                onClick={() => setPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Admin;
