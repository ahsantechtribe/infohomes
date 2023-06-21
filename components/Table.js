import React from "react";

const Table = () => {
  const data = [
    {
      adUrl: "9852317",
      town: "London",
      price: 100000,
      estimatedYield: 55,
    },
    {
      adUrl: "4452123",
      town: "Manchester",
      price: 75000,
      estimatedYield: 92,
    },
    {
      adUrl: "9632584",
      town: "Birmingham",
      price: 90000,
      estimatedYield: 48,
    },
  ];

  return (
    <table className="w-full">
      <thead className="border-y-[1px] border-[#616161] text-left h-[40px]">
        <tr className="text-[12px] ">
          <th className="font-normal">AD URL ADDRESS</th>
          <th className="font-normal">TOWN</th>
          <th className="font-normal">PRICE</th>
          <th className="font-normal">ESTIMATED YIELD</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.adUrl}
            className="border-b-[1px] border-dashed border-[#616161] text-left"
          >
            <td>{item.adUrl}</td>
            <td>{item.town}</td>
            <td>{item.price}</td>
            <td>
              <div className="hidden w-full" />
              <div className="bg-[#C3B5EE] w-full h-[50px]">
                <div
                  className={`bg-[#A160F1] h-[50px]`}
                  style={{ width: item.estimatedYield + `%` }}
                ></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
