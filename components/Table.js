import React, { useState, useEffect, useRef } from "react";
import { TbArrowsDownUp } from 'react-icons/tb';
import property_data from "../data/property_data";
import LoadingSpinner from "./LoadingSpinner";

const Table = ({
  setData,
  data,
  currentPage,
  itemsPerPage,
  selection,
  minPrice,
  maxPrice,
  isLoading,
  fetchData
}) => {
  const discountCache = useRef([]);
  const yieldCache = useRef(data);
  const [buttonActive, setButtonActive] = useState("estimated_yield");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataRows = data.slice(startIndex, endIndex);



  let euro = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumSignificantDigits: 3,
  });


  useEffect(() => {
    discountCache.current = [];
    yieldCache.current = [];
    setButtonActive("estimated_yield")
  }, [selection])


  const sortData = async (sortBy) => {

    if (sortBy === 'estimated_yield' && yieldCache.current.length !== 0) {
      setData(yieldCache.current);
      return;
    }

    if (sortBy === 'estimated_discount' && discountCache.current.length !== 0) {
      setData(discountCache.current);
      return;
    }

    const reqParamsArray = selection.map((currentSelection) => {
      const reqParams = {};
      if (currentSelection.neighbourhood) {
        reqParams.barrio = currentSelection.barrio;
      }
      if (currentSelection.community) {
        reqParams.comunidad = currentSelection.community;
      }
      if (currentSelection.city) {
        reqParams.ciudad = currentSelection.city;
      }
      if (currentSelection.subtype_ENG) {
        reqParams.typerr = currentSelection.id_subid;
      }
      reqParams.pmin = minPrice;
      reqParams.pmax = maxPrice;
      reqParams.select_cols = sortBy;

      return reqParams;
    });

    const sortedData = await fetchData(reqParamsArray, sortBy);

    if (reqParamsArray[0].select_cols === 'estimated_yield') {
      yieldCache.current = sortedData;
    } else {
      discountCache.current = sortedData;
    }

  };

  const formatProperty = (id_subid) => {
    return property_data.find((item) => item.id_subid == id_subid)?.type_SPA;
  };


  if (isLoading) {
    return <div className="flex justify-center">
      <LoadingSpinner />
    </div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-y-[1px] border-[#616161] text-left h-[40px]">
          <tr className="text-[12px] ">
            <th className="font-normal">LOCATION</th>
            <th className="font-normal">PRICE</th>
            <th className="font-normal">
              <button
                disabled={buttonActive === 'estimated_yield'}
                onClick={() => {
                  sortData("estimated_yield")
                  setButtonActive("estimated_yield")
                }} className={`flex items-center gap-2 ${buttonActive === 'estimated_yield' && 'text-[#000] font-bold'}`}>
                <h6>YIELD</h6> <TbArrowsDownUp />
              </button>
            </th>
            <th className="font-normal">
              <button
                disabled={buttonActive === 'estimated_discount'}
                onClick={() => {
                  sortData("estimated_discount")
                  setButtonActive("estimated_discount")
                }}
                className={`flex items-center gap-2 ${buttonActive === 'estimated_discount' && 'text-[#000] font-bold'}`}
              >
                <h6>DISCOUNT</h6> <TbArrowsDownUp />
              </button>
            </th>
            <th className="font-normal">SIZE</th>
            <th className="font-normal">LINK</th>
            <th className="font-normal">AGE</th>
            <th className="font-normal">CONTACTS</th>
            <th className="font-normal">OFFER</th>
            <th className="font-normal">TYPE</th>
          </tr>
        </thead>
        <tbody>
          {dataRows.map((item) => (
            <tr
              key={item.id}
              className="border-b-[1px] border-dashed border-[#616161] text-left"
            >
              <td>{item.ciudad}, {item.barrio}</td>
              <td>{euro.format(item.ad_price)}</td>
              <td className='w-[200px]'>
                <div className="bg-[#C3B5EE] w-full h-[50px] items-center flex relative">
                  <h3 className='pl-4 z-10 relative'>{item.estimated_yield?.toFixed(1)}%</h3>
                  <div
                    className="bg-[#A160F1] h-[50px] flex absolute items-center"
                    style={{ width: `${item.estimated_yield}%` }}
                  ></div>
                </div>
              </td>
              <td>{Math.abs(item.estimated_discount?.toFixed(1))}%</td>
              <td>{item.ad_area} m&sup2;</td>
              <td><a className='border-[1px] border-[#616161] p-1' href={item.ad_urlactive} target="_blank" rel="noopener noreferrer">See Ad</a></td>
              <td>{item.adstats_daysonmarket}</td>
              <td>{item.adstats_contactsbyemail}</td>
              <td>{item.ad_operation === 1 ? "Sale" : "Rent"}</td>
              <td>{formatProperty(item.type_subtype)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
