import Image from "next/image";
import React from "react";
import Table from "./Table";

const DataVisualization = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-20">
        <main className="col-span-9 border-2 border-black">
          <div>
            <h1 className="text-black text-[60px] leading-[65px] mt-10 w-[892px]">
              Current demand vs. Yield ordered by city and type
            </h1>
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Search"
                className="rounded-full border-[1px] border-[#616161] text-[12px] leading-[18px] pl-8 p-2 w-[420px]"
              />
              <Image
                src="/search.svg"
                alt="search icon"
                className="absolute mr-2 ml-2"
                width={16}
                height={16}
              />
            </div>
            <div className="flex items-center">
              <p className="text-[12px] leading-[18px] mr-3">Page 1 Of 25</p>
              <Image
                src="/arrowleft.svg"
                alt="search icon"
                width={6}
                height={10}
                className="mx-1"
              />
              <Image
                src="/arrowright.svg"
                alt="search icon"
                className="mx-1"
                width={6}
                height={10}
              />
            </div>
          </div>
          <div className=" mt-5">
            <Table />
          </div>
        </main>

        {/* Right Section */}
        <aside className="col-span-3 flex flex-col border-2 gap-y-2 border-black">
          <div className="flex justify-between mt-3">
            <h6 className="text-[#616161] text-[12px]">Published 23.03.23</h6>
            <div>
              <div className="flex gap-1">
                <Image src="/eye.svg" alt="views icon" width={13} height={13} />
                <h6 className="text-[#616161] text-[12px]">3,6K</h6>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b-[1px] border-[#616161] pb-5">
            <h3 className="text-[#EA3EFF] text-[25px] leading-[33px]">
              Share Analytics
            </h3>
            <Image src="/share.svg" alt="share button" width={21} height={21} />
          </div>
          <div className="flex justify-between border-b-[1px] border-[#616161] pb-5">
            <h3 className="text-[#0E0B13] text-[25px] leading-[33px]">
              Filter
            </h3>
            <Image
              src="/arrowdown.svg"
              alt="share button"
              width={6}
              height={9}
            />
          </div>
          <div className="flex justify-between my-3 pb-5">
            <h3 className="text-[#0E0B13] text-[25px] leading-[33px]">
              How to read this graph
            </h3>
            <Image src="/arrowup.svg" alt="share button" width={6} height={9} />
          </div>
          <div className="mt-3 border-b-[1px] border-[#616161] pb-5">
            <p className="text-[15px] leading-[23px]">
              Short description of what the graph is showing the user. With this
              we explain the content and make it more clear for the user. We
              bring clarity and transparency to the data. We show clear
              Information.
            </p>
          </div>
          <div>
            <h6 className="leading-[23px] text-[15px]">Granada</h6>
            <h1 className="text-[140px] leading-[80px] mt-20 w-full">0,6%</h1>
            <h1 className="text-[25px] leading-[33px] mt-20 w-full">
              Demand Increase of this Property in the last Quarter
            </h1>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DataVisualization;