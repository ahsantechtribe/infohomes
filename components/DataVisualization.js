"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import Table from "./Table";
import Filters from "./Filters";
import API from "@/utils/axios";

const DataVisualization = () => {
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [filterExpand, setFilterExpand] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selection, setSelection] = useState([{ community: "Aragón" }]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


  const filteredItems = useMemo(() => {
    return data.filter(item => {
      return (item.barrio + item.ciudad).toLowerCase().includes(searchQuery.toLowerCase().trim())
    })
  }, [data, searchQuery]);

  const handleInputChange = (e) => {
    setCurrentPage(1);
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
  };


  // Page Navigation Functions
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const fetchData = async (reqParamsArray, sortBy) => {
    setIsLoading(true);
    try {
      const promises = reqParamsArray.map(async (reqParams) => {
        const response = await API.get("", {
          headers: { Authorization: `Bearer ${process.env.token}` },
          params: reqParams
        });
        return response.data.data;
      });

      const responses = await Promise.all(promises);
      const newData = responses.flat();
      const sortedData = sortBy === 'estimated_yield'
        ? newData.sort((a, b) => b.estimated_yield - a.estimated_yield)
        : newData.sort((a, b) => b.estimated_discount - a.estimated_discount);
      setData(sortedData);
      return sortedData;
    } catch (err) {
      // Handle error
      console.log(err)
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="max-w-[1440px] mx-auto mb-5 pb-5 border-b-[1px] border-[#616161]">
      <div className="grid grid-cols-12 gap-20">
        <main className="col-span-9">
          <div>
            <h1 className="text-black text-[60px] leading-[65px] mt-10">
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
                // value={searchQuery}
                onChange={handleInputChange}
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
              <p className="text-[12px] leading-[18px] mr-3">Page {currentPage} Of {Math.ceil(filteredItems.length / 8)}</p>
              <button onClick={goToPreviousPage} className={`mr-3  ${currentPage === 1 ? 'text-[#D3D3D3]' : 'text-[#0E0B13]'}`}>
                <svg width={6} height={10} viewBox="0 0 6 10" stroke={currentPage === 1 ? '#D3D3D3' : '#0E0B13'} xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.00507501 4.92752C0.0229935 4.81667 0.0795285 4.71363 0.166758 4.63316L4.94588 0.189119L4.94602 0.189119C5.05214 0.076901 5.20535 0.00870373 5.36966 0.000644217C5.53385 -0.00753928 5.69456 0.0452819 5.81387 0.14634C5.93318 0.247521 6.00055 0.388133 6 0.534939C5.99944 0.681751 5.93096 0.821992 5.81095 0.9223L1.42369 4.9997L5.81095 9.07711L5.81095 9.07723C5.93096 9.17767 5.99944 9.31778 6 9.46459C6.00055 9.61153 5.93319 9.75202 5.81387 9.85319C5.69455 9.95425 5.53384 10.0071 5.36967 9.99901C5.20534 9.99083 5.05213 9.92263 4.94602 9.81041L0.166897 5.36638L0.166758 5.36638C0.0410502 5.2497 -0.0185361 5.08825 0.00507501 4.92756L0.00507501 4.92752Z" fill="#D3D3D3" />
                </svg>
              </button>
              <button onClick={goToNextPage}>
                <svg width={6} height={10} viewBox="0 0 6 10" fill="currentColor" stroke={currentPage === Math.ceil(data.length / 8) ? '#D3D3D3' : '#0E0B13'} xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99492 4.92752C5.97701 4.81667 5.92047 4.71363 5.83324 4.63316L1.05412 0.189119L1.05398 0.189119C0.947863 0.076901 0.794653 0.00870373 0.630335 0.000644217C0.466153 -0.00753928 0.305444 0.0452819 0.186133 0.14634C0.0668153 0.247521 -0.00055134 0.388133 3.20844e-06 0.534939C0.000558711 0.681751 0.0690373 0.821992 0.189049 0.9223L4.57631 4.9997L0.189048 9.07711L0.189048 9.07723C0.0690366 9.17767 0.000557005 9.31778 2.4308e-06 9.46459C-0.000553097 9.61153 0.0668144 9.75202 0.186132 9.85319C0.30545 9.95425 0.466159 10.0071 0.630334 9.99901C0.794656 9.99083 0.947865 9.92263 1.05398 9.81041L5.8331 5.36638L5.83324 5.36638C5.95895 5.2497 6.01854 5.08825 5.99492 4.92756L5.99492 4.92752Z" fill="#0E0B13" />
                </svg>

              </button>
            </div>
          </div>
          {
            <div className="mt-5">
              <Table data={filteredItems} setData={setData} currentPage={currentPage}
                itemsPerPage={itemsPerPage} selection={selection}
                minPrice={minPrice} maxPrice={maxPrice} isLoading={isLoading}
                fetchData={fetchData}
              />
            </div>
          }
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
          <div className="flex justify-between border-b-[1px] border-[#616161] pb-2 group cursor-pointer">
            <h3 className="text-[#EA3EFF] text-[25px] leading-[33px] decoration-1 group-hover:underline">
              Share Analytics
            </h3>
            <Image src="/share.svg" alt="share button" width={21} height={21} />
          </div>

          {/* Filter */}
          <div className="mt-[-9px] border-y-[1px] hover:z-10 hover:border-[#EA3EFF] border-[#616161] py-[25px]">
            <div
              className="cursor-pointer flex justify-between items-center group"
              onClick={() => {
                setFilterExpand((prev) => !prev);
              }}
            >
              <h3 className="text-[#0E0B13] text-[25px] leading-[33px] group-hover:text-[#EA3EFF]">
                Filter
              </h3>
              {filterExpand ? (
                <svg width={12} height={24} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-[#EA3EFF] stroke-[#0E0B13]">
                  <path d="M4.4999 0.525214L8.38701 4.60809L8.38398 4.60809L4.86212 0.906825L4.4999 0.526149L4.13767 0.906825L0.670372 4.55076L0.670372 4.5476L4.4999 0.525214ZM8.50139 4.79235L8.52014 4.77451L8.52038 4.77428L8.50139 4.79235ZM0.545929 4.68154L0.503949 4.72566C0.504418 4.72438 0.50491 4.72318 0.505415 4.72208C0.507667 4.71713 0.509607 4.7151 0.509698 4.71501L0.545929 4.68154Z" fill="#EA3EFF" />
                </svg>
              ) : (
                <svg width={12} height={24} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-[#EA3EFF] stroke-[#0E0B13]">
                  <path d="M4.5001 4.7492L0.612989 0.66632L0.616021 0.66632L4.13788 4.36759L4.5001 4.74826L4.86233 4.36759L8.32963 0.723655L8.32963 0.726811L4.5001 4.7492ZM8.4903 
                0.559411L8.45408 0.592868L8.49605 0.548755C8.49558 0.550036 8.49509 0.551231 8.49459 0.552337C8.49237 0.557199 8.49046 
                0.55924 8.49031 0.5594L8.4903 0.559411Z" fill="#EA3EFF" />
                </svg>
              )}
            </div>
            <div hidden={!filterExpand}>
              <Filters selection={selection}
                setSelection={setSelection} minPrice={minPrice} maxPrice={maxPrice}
                setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}
                fetchData={fetchData}
              />
            </div>
          </div>

          <div className="mt-[-8.5px] border-y-[1px] hover:border-[#EA3EFF] border-[#616161] py-[25px]">
            <div
              className="flex justify-between items-center cursor-pointer group"
              onClick={() => {
                setDescriptionExpand((prev) => !prev);
              }}
            >
              <h3 className="text-[#0E0B13] text-[25px] leading-[33px] group-hover:text-[#EA3EFF]">
                How to read this graph
              </h3>

              {descriptionExpand ? (
                <svg width={12} height={24} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-[#EA3EFF] stroke-[#0E0B13]">
                  <path d="M4.4999 0.525214L8.38701 4.60809L8.38398 4.60809L4.86212 0.906825L4.4999 0.526149L4.13767 0.906825L0.670372 4.55076L0.670372 4.5476L4.4999 0.525214ZM8.50139 4.79235L8.52014 4.77451L8.52038 4.77428L8.50139 4.79235ZM0.545929 4.68154L0.503949 4.72566C0.504418 4.72438 0.50491 4.72318 0.505415 4.72208C0.507667 4.71713 0.509607 4.7151 0.509698 4.71501L0.545929 4.68154Z" fill="#EA3EFF" />
                </svg>
              ) : (
                <svg width={12} height={24} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-[#EA3EFF] stroke-[#0E0B13]">
                  <path d="M4.5001 4.7492L0.612989 0.66632L0.616021 0.66632L4.13788 4.36759L4.5001 4.74826L4.86233 4.36759L8.32963 0.723655L8.32963 0.726811L4.5001 4.7492ZM8.4903 
                  0.559411L8.45408 0.592868L8.49605 0.548755C8.49558 0.550036 8.49509 0.551231 8.49459 0.552337C8.49237 0.557199 8.49046 
                  0.55924 8.49031 0.5594L8.4903 0.559411Z" fill="#EA3EFF" />
                </svg>
              )}

            </div>
            <p
              className="text-[15px] leading-[23px] mt-10"
              hidden={!descriptionExpand}
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
      </div >
    </div >
  );
};

export default DataVisualization;
