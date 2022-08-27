import React from "react";

function Dashboard() {
  return (
    <section>
      <div className="min-h-screen w-full flex">
        <div
          id="left-part"
          className="w-1/3 bg-white flex flex-col items-center"
        >
          <div className="mt-10 text-green-500 text-2xl">carbonkart</div>
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
      </div>
    </section>
  );
}

export default Dashboard;
