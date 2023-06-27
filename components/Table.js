import React, { useState } from "react";
import { TbArrowsDownUp } from 'react-icons/tb';

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

  const [isDiscountAscending, setIsDiscountAscending] = useState(true);
  const [isYieldAscending, setIsYieldAscending] = useState(true);

  const sortYield = () => {
    const sorted = data.sort((a, b) => {
      if (isYieldAscending) {
        return a.estimated_yield - b.estimated_yield;
      } else {
        return b.estimated_yield - a.estimated_yield;
      }
    });
    setData(sorted);
    console.log(sorted[0].estimated_yield)
    setIsYieldAscending((prevState) => !prevState);
  };

  const sortDiscount = () => {
    const sorted = data.sort((a, b) => {
      if (isDiscountAscending) {
        return a.estimated_discount - b.estimated_discount;
      } else {
        return b.estimated_discount - a.estimated_discount;
      }
    });
    setData(sorted);
    setIsDiscountAscending((prevState) => !prevState);
  };

  return (
    <div className=" overflow-x-auto">

      <table className="w-full overflow-x-auto whitespace-nowrap">
        <thead className="border-y-[1px] border-[#616161] text-left h-[40px]">
          <tr className="text-[12px] ">
            <th className="font-normal">LOCATION</th>
            <th className="font-normal">PRICE</th>
            <th className="font-normal"><button onClick={sortYield} className="flex items-center gap-2"><h6>YIELD</h6> <TbArrowsDownUp /></button></th>
            <th className="font-normal"><button onClick={sortDiscount} className="flex items-center gap-2"><h6>DISCOUNT</h6> <TbArrowsDownUp /></button></th>
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
              <td>{item.cuidad}, {item.barrio}</td>
              <td>{euro.format(item.ad_price)}</td>
              <td className='w-[200px]'>
                <div className="bg-[#C3B5EE] w-full h-[50px] items-center flex relative">
                  <h3 className='pl-4 z-10 relative'>{item.estimated_yield.toFixed(1)}%</h3>
                  <div
                    className="bg-[#A160F1] h-[50px] flex absolute items-center"
                    style={{ width: `${item.estimated_yield}%` }}
                  >
                  </div>
                </div>
              </td>
              <td>{item.estimated_discount}%</td>
              <td>{item.ad_area}m&sup2;</td>
              <td><a className='border-[1px] border-[#616161] p-1' href={item.ad_urlactive} target="_blank" rel="noopener noreferrer">See Ad</a></td>
              <td>{item.adstats_daysonmarket}</td>
              <td>{item.adstats_contactsbyemail}</td>
              <td>{item.ad_operation === 1 ? "Sale" : "Rent"}</td>
              <td>{item.type_subtype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;