import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Web3Storage } from "web3.storage";

function Dashboard() {
  const [userType, setUserType] = useState("ngo");
  const [isMintPage, setIsMintPage] = useState(false);
  const [showNFT, setShowNFT] = useState(false);

  const [nftName, setNftName] = useState("");
  const [nftImage, setNftImage] = useState(null);
  const [proofWork, setProofWork] = useState(null);
  const [totalTrees, setTotalTrees] = useState("");

  function getAccessToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQxMjY4ZDA3RTE5MUFlRDhBMDQyNDU3MUIxNDkwMUY3NDkyYmZDMDEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjE2MjQyMzA2MzMsIm5hbWUiOiJjYXJib25rYXJ0In0.LzlO1ZGdSD82gmGp0nRjsySDjm7LZgDKtA_KXQJl8ko";
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  async function storeFiles(files) {
    const client = makeStorageClient();
    const cid = await client.put(files);
    console.log("stored files with cid:", cid);
    return cid;
  }

  const verifyNFT = async () => {
    const id = uuidv4();

  };

  return (
    <section className="relative">
      <div className="min-h-screen w-full flex">
        <div
          id="left-part"
          className="w-1/3 bg-white flex flex-col items-center"
        >
          <div className="mt-10 text-green-500 text-2xl">
            carbon<span>काट</span>
          </div>
          <div className="flex items-center">
            <div
              id="avatar"
              className="border-2 border-red-500 mt-12 w-16 h-16 text-xl font-bold rounded-full bg-white flex items-center justify-center"
            >
              <img
                src="https://avatars.dicebear.com/v2/female/cbf891dd6214aa905f48c352967eda1e.svg"
                className="w-2/3"
                alt="avatar"
              />
            </div>
            <p className="text-md ml-6 mt-12">Welcome, Mayur</p>
          </div>

          <p className="my-10 text-gray-500">stats</p>

          <div
            id="card"
            className="rounded-md border border-gray-200 shadow-md w-64 h-36 bg-gradient-to-r from-[#39f6e4] to-[#0087ff] flex justify-center items-center text-5xl font-bold text-white"
          >
            30CC
          </div>
        </div>

        {userType === "company" ? (
          <div id="right-part" className="w-full bg-gray-100 p-10">
            <div id="menubar" className="flex justify-between items-center p">
              <div className="text-xl">dashboard</div>
              <button className="text-gray-500 flex justify-center items-center w-12 h-12 rounded-full bg-white relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
                <button className="absolute text-sm bg-green-500 flex justify-center items-center -right-4 -top-4 py-2 px-4 rounded-full">
                  1
                </button>
              </button>
            </div>

            <div id="top-nfts" className="mt-12">
              <p className="my-6">Top NFTs</p>
              <div className="flex justify-between">
                <div className="h-72 w-60 bg-white rounded-xl p-2">
                  <div className="">
                    <img
                      alt="nft"
                      src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col text-sm text-gray-500 justify-center space-y-1">
                    <p className="text-black font-bold mt-2">Amazon forest</p>
                    <p>NGO Name: One Tree Foundation</p>
                    <p>Carbon Credits: 40</p>
                  </div>
                </div>
                <div className="h-72 w-60 bg-white rounded-xl p-2">
                  <div className="">
                    <img
                      alt="nft"
                      src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col text-sm text-gray-500 justify-center space-y-1">
                    <p className="text-black font-bold mt-2">Amazon forest</p>
                    <p>NGO Name: One Tree Foundation</p>
                    <p>Carbon Credits: 40</p>
                  </div>
                </div>
                <div className="h-72 w-60 bg-white rounded-xl p-2">
                  <div className="">
                    <img
                      alt="nft"
                      src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col text-sm text-gray-500 justify-center space-y-1">
                    <p className="text-black font-bold mt-2">Amazon forest</p>
                    <p>NGO Name: One Tree Foundation</p>
                    <p>Carbon Credits: 40</p>
                  </div>
                </div>
                <div className="h-72 w-60 bg-white rounded-xl p-2">
                  <div className="">
                    <img
                      alt="nft"
                      src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col text-sm text-gray-500 justify-center space-y-1">
                    <p className="text-black font-bold mt-2">Amazon forest</p>
                    <p>NGO Name: One Tree Foundation</p>
                    <p>Carbon Credits: 40</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-8">
              <div className="flex flex-col">
                <p>Top NGOs</p>
                <div className="flex flex-col mt-6 space-y-6">
                  <div className="w-96 h-24 bg-white rounded-xl flex justify-between items-center px-5">
                    <div className="w-16 h-16">
                      <img
                        src="https://avatars.dicebear.com/v2/female/cbf891dd6214aa905f48c352967eda1e.svg"
                        className=" rounded-full bg-red-500 p-2"
                        alt="avatar"
                      />
                    </div>
                    <div className="flex flex-col text-sm text-gray-500 space-y-2">
                      <p>NGO Name: web3000 Foundation</p>
                      <p>Total CC Generated: 50 CC</p>
                    </div>
                  </div>
                  <div className="w-96 h-24 bg-white rounded-xl flex justify-between items-center px-5">
                    <div className="w-16 h-16">
                      <img
                        src="https://avatars.dicebear.com/v2/female/cbf891dd6214aa905f48c352967eda1e.svg"
                        className=" rounded-full bg-red-500 p-2"
                        alt="avatar"
                      />
                    </div>
                    <div className="flex flex-col text-sm text-gray-500 space-y-2">
                      <p>NGO Name: web3000 Foundation</p>
                      <p>Total CC Generated: 50 CC</p>
                    </div>
                  </div>
                  <div className="w-96 h-24 bg-white rounded-xl flex justify-between items-center px-5">
                    <div className="w-16 h-16">
                      <img
                        src="https://avatars.dicebear.com/v2/female/cbf891dd6214aa905f48c352967eda1e.svg"
                        className=" rounded-full bg-red-500 p-2"
                        alt="avatar"
                      />
                    </div>
                    <div className="flex flex-col text-sm text-gray-500 space-y-2">
                      <p>NGO Name: web3000 Foundation</p>
                      <p>Total CC Generated: 50 CC</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Latest NFTs</p>
                <div className="flex justify-between mt-6">
                  <div className="h-72 w-60 bg-white rounded-xl p-2">
                    <div className="">
                      <img
                        alt="nft"
                        src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col text-sm text-gray-500 justify-center space-y-1">
                      <p className="text-black font-bold mt-2">Amazon forest</p>
                      <p>NGO Name: One Tree Foundation</p>
                      <p>Carbon Credits: 40</p>
                    </div>
                  </div>
                  <div className="h-72 w-60 bg-white rounded-xl p-2">
                    <div className="">
                      <img
                        alt="nft"
                        src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col text-sm text-gray-500 justify-center space-y-1">
                      <p className="text-black font-bold mt-2">Amazon forest</p>
                      <p>NGO Name: One Tree Foundation</p>
                      <p>Carbon Credits: 40</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div id="right-part" className="w-full bg-gray-100 p-10">
            <div className="w-full flex justify-center items-center mt-12">
              <button
                className="px-12 py-4 bg-gradient-to-r from-[#39f6e4] to-[#0087ff] text-white text-lg flex space-x-4"
                onClick={() => setIsMintPage(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <p>Apply for new NFT</p>
              </button>
            </div>
            <div className="grid grid-cols-2 mt-40">
              <div className="">
                <div className="flex flex-col px-4">
                  <p>Mint Verified NFT</p>
                  <div className="flex justify-between mt-6">
                    <div className="w-60 bg-white rounded-xl p-2">
                      <div className="">
                        <img
                          alt="nft"
                          src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col text-sm text-gray-500 justify-center space-y-1">
                        <p className="text-black font-bold mt-2">
                          Amazon forest
                        </p>
                        <p>NGO Name: One Tree Foundation</p>
                        <p>Carbon Credits: 40</p>
                      </div>
                      <button className="bg-black mt-2 px-4 py-2 text-white rounded-xl">
                        Mint
                      </button>
                    </div>
                    <div className="w-60 bg-white rounded-xl p-2">
                      <div className="">
                        <img
                          alt="nft"
                          src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col text-sm text-gray-500 justify-center space-y-1">
                        <p className="text-black font-bold mt-2">
                          Amazon forest
                        </p>
                        <p>NGO Name: One Tree Foundation</p>
                        <p>Carbon Credits: 40</p>
                      </div>
                      <button className="bg-black mt-2 px-4 py-2 text-white rounded-xl">
                        Mint
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-gray-300">
                <div className="flex flex-col px-4">
                  <p>Verification pending</p>
                  <div className="flex justify-between mt-6">
                    <div className="h-72 w-60 bg-white rounded-xl p-2">
                      <div className="">
                        <img
                          alt="nft"
                          src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col text-sm text-gray-500 justify-center space-y-1">
                        <p className="text-black font-bold mt-2">
                          Amazon forest
                        </p>
                        <p>NGO Name: One Tree Foundation</p>
                        <p>Carbon Credits: 40</p>
                      </div>
                    </div>
                    <div className="h-72 w-60 bg-white rounded-xl p-2">
                      <div className="">
                        <img
                          alt="nft"
                          src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col text-sm text-gray-500 justify-center space-y-1">
                        <p className="text-black font-bold mt-2">
                          Amazon forest
                        </p>
                        <p>NGO Name: One Tree Foundation</p>
                        <p>Carbon Credits: 40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isMintPage && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-10 bg-gray-200">
          <div className="w-96 bg-white p-10 rounded-md border">
            <p className="text-xl font-bold mb-12">Apply for new NFT</p>

            <div className="flex flex-col text-sm">
              <div className="flex items-center space-x-2">
                <label For="nftName">NFT Name: </label>
                <input
                  type="text"
                  className="border p-2"
                  placeholder="greener planet"
                  defaultValue={nftName}
                  onChange={(e) => setNftName(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <label For="nftName">Total trees planted: </label>
                <input
                  type="text"
                  className="-ml-8 border p-2"
                  placeholder="1000"
                  defaultValue={totalTrees}
                  onChange={(e) => setTotalTrees(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <label For="nftName">NFT Image: </label>
                <input
                  className="pl-8"
                  type="file"
                  onChange={(e) => setNftImage(e.target.files)}
                />
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <label For="nftName">Proof-of-Work: </label>
                <input
                  className="pl-3"
                  type="file"
                  multiple
                  onChange={(e) => setProofWork(e.target.files)}
                />
              </div>
            </div>

            <div className="flex justify-center items-center mt-12 space-x-6 text-sm">
              <button
                className="bg-gradient-to-r from-[#0087ff] to-[#39f6e4] text-white px-6 py-3"
                onClick={verifyNFT}
              >
                Verify Data
              </button>
              <button
                className="bg-black px-6 py-3 text-white text-sm"
                onClick={() => setIsMintPage(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showNFT && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-10">
          <div className="w-96 bg-white p-10 rounded-md border">
            <p className="text-xl font-bold mb-8">NFT Name</p>

            <div className="flex flex-col text-sm">
              <img
                alt="nft"
                src="https://image.shutterstock.com/image-illustration/collage-plaster-antique-sculpture-human-260nw-1951493971.jpg"
                className="rounded-xl"
              />
              <div className="flex items-center space-x-2 mt-2">
                <label For="ngo">Carbon Credits: </label>
                <p>2</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <label For="ngo">NGO: </label>
                <p>NGO Name</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <label For="nftName">About: </label>
                <p className="text-sm italic text-gray-700">
                  We are fuckin' sexy group
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-12 space-x-6 text-sm">
              <button className="bg-gradient-to-r from-[#0087ff] to-[#39f6e4] text-white px-6 py-3">
                Buy NFT
              </button>
              <button
                className="bg-black px-6 py-3 text-white text-sm"
                onClick={() => setShowNFT(true)}
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

export default Dashboard;
