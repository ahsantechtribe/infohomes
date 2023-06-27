import React, { useState, useEffect } from "react";
import { TbArrowsDownUp } from 'react-icons/tb';
import API from "@/utils/axios";
import property_data from "../property_data";


const Table = ({ setData, data, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page of items
  const dataRows = data.slice(startIndex, endIndex);

  let euro = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumSignificantDigits: 3,
  });

  const fetchData = async (reqParams) => {
    try {
      const response = await API.get('', {
        headers: { Authorization: `Bearer ${process.env.token}` },
        params: reqParams
      });

      const newData = [...data, ...response.data.data];
      const mergedData = Array.from(new Set(newData.map(JSON.stringify)));
      const uniqueData = mergedData.map(JSON.parse);

      setData(uniqueData);
    } catch (err) {
      // Handle error
    } finally {
      // Cleanup and loading state
    }
  };

  const sortData = (sortBy) => {
    const reqParams = {
      sortBy: sortBy
    };
    fetchData(reqParams);
  };

  useEffect(() => {
    fetchData({});
  }, []);


  const formatProperty = (id_subid) => {
    return property_data.find((item) => item.id_subid == id_subid)?.type_SPA;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-y-[1px] border-[#616161] text-left h-[40px]">
          <tr className="text-[12px] ">
            <th className="font-normal">LOCATION</th>
            <th className="font-normal">PRICE</th>
            <th className="font-normal">
              <button onClick={() => sortData("estimated_yield")} className="flex items-center gap-2">
                <h6>YIELD</h6> <TbArrowsDownUp />
              </button>
            </th>
            <th className="font-normal">
              <button onClick={() => sortData("estimated_discount")} className="flex items-center gap-2">
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
