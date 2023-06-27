"use client";
import Image from "next/image";
import React, { useState } from "react";
import Table from "./Table";
import Filters from "./Filters";
import { ArrowPrevious, ArrowNext } from "./SVGWrapper";

const DataVisualization = () => {
  const [descriptionExpand, setDescriptionExpand] = useState(true);
  const [filterExpand, setFilterExpand] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };


  return (
    <div className="max-w-[1440px] mx-auto border-b-[1px] border-[#616161]">
      <div className="grid grid-cols-12 gap-20">
        <main className="col-span-9">
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
                name="search"
                id="search"
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
              <p className="text-[12px] leading-[18px] mr-3">Page {currentPage} Of {Math.ceil(data.length / 8)}</p>
              <button onClick={goToPreviousPage} className="mr-3">
                <ArrowPrevious className={currentPage === 1 ? 'stroke-[#D3D3D3]' : 'stroke-[#0E0B13]'} />
              </button>
              <button onClick={goToNextPage}>
                <ArrowNext className={currentPage === Math.ceil(data.length / 8) ? 'stroke-[#D3D3D3]' : 'stroke-[#0E0B13]'} />
              </button>
            </div>
          </div>
          <div className=" mt-5">
            <Table data={data} setData={setData} currentPage={currentPage} itemsPerPage={itemsPerPage} />
          </div>
        </main>

        {/* Right Section */}
        <aside className="col-span-3 flex flex-col gap-y-2">
          <div className="flex justify-between mt-3">
            <h6 className="text-[#616161] text-[12px]">Published 23.03.23</h6>
            <div>
              <div className="flex gap-1">
                <Image src="/eye.svg" alt="views icon" width={13} height={13} />
                <h6 className="text-[#616161] text-[12px]">3,6K</h6>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b-[1px] border-[#616161] pb-2">
            <h3 className="text-[#EA3EFF] text-[25px] leading-[33px]">
              Share Analytics
            </h3>
            <Image src="/share.svg" alt="share button" width={21} height={21} />
          </div>

          {/* Filter */}
          <div className="border-b-[1px] border-[#616161] py-[25px]">
            <div
              className="cursor-pointer flex justify-between"
              onClick={() => {
                setFilterExpand((prev) => !prev);
              }}
            >
              <h3 className="text-[#0E0B13] text-[25px] leading-[33px]">
                Filter
              </h3>
              {filterExpand ? (
                <Image
                  src="/arrowdown.svg"
                  alt="share button"
                  width={12}
                  height={24}
                />
              ) : (
                <Image
                  src="/arrowup.svg"
                  alt="share button"
                  width={12}
                  height={24}
                />
              )}
            </div>
            <div hidden={filterExpand}>
              <Filters data={data} setData={setData} />
            </div>
          </div>

          <div className="border-b-[1px] border-[#616161] py-[25px]">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => {
                setDescriptionExpand((prev) => !prev);
              }}
            >
              <h3 className="text-[#0E0B13] text-[25px] leading-[33px]">
                How to read this graph
              </h3>
              {descriptionExpand ? (
                <Image
                  src="/arrowdown.svg"
                  alt="share button"
                  width={12}
                  height={24}
                />
              ) : (
                <Image
                  src="/arrowup.svg"
                  alt="share button"
                  width={12}
                  height={24}
                />
              )}
            </div>
            <p
              className="text-[15px] leading-[23px] mt-10"
              hidden={descriptionExpand}
            >
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
