import Image from "next/image";
import React, { useEffect, useState } from "react";
import { community_data, city_data, neighbourhood_data } from "../comm_data";
import property_data from "../property_data";
import "../app/scrollbar.css";

const Filter = () => {
  const [searchExpandCommunity, setSearchExpandCommunity] = useState(false);
  const [searchExpandCity, setSearchExpandCity] = useState(false);
  const [searchExpandNeighbourhood, setSearchExpandNeighbourhood] =
    useState(false);
  const [searchExpandProperty, setSearchExpandProperty] = useState(false);
  const [community, setCommunity] = useState("");
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [type, setType] = useState("");

  const onOptionChange = (e) => {
    if (e.target.name === "community") {
      setCommunity(e.target.value);
      setCity("");
      setNeighbourhood("");
    } else if (e.target.name === "city") {
      setCity(e.target.value);
    } else if (e.target.name === "neighbourhood") {
      setNeighbourhood(e.target.value);
    } else if (e.target.name === "type") {
      setType(e.target.value);
    }
  };

  return (
    <div className="flex flex-col my-4">
      {/* Community Filters */}
      <div>
        {/* Community */}
        <div>
          <div className="flex justify-between">
            <h4 className="text-[14px] leading-[16px]">COMMUNITY</h4>
            <div
              className={`flex justify-between ${
                searchExpandCommunity && "border-b-[0.5px]"
              } border-[#616161] pb-1`}
            >
              <input
                type="text"
                placeholder="Search"
                className="text-[12px] text-[#616161] outline-none"
                hidden={!searchExpandCommunity}
              />
              <button onClick={() => setSearchExpandCommunity((prev) => !prev)}>
                <Image
                  src="/search.svg"
                  alt="search icon"
                  width={13}
                  height={13}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 ">
          <form className="flex flex-col h-[100px] overflow-y-auto px-1">
            {community_data.map((item, index) => {
              return (
                <label key={index} htmlFor={item.community}>
                  <input
                    type="radio"
                    name="community"
                    value={item.community}
                    id={item.community}
                    checked={community === item.community}
                    onChange={onOptionChange}
                  />
                  <span className="ml-2 text-[12px] my-1 text-[#616161]">
                    {item.community}
                  </span>
                </label>
              );
            })}
          </form>
        </div>

        <div className="mt-4">
          {/* City */}
          <div className="flex justify-between">
            <h4 className="text-[14px] leading-[16px]">CITY</h4>
            <div
              className={`flex justify-between ${
                searchExpandCity && "border-b-[0.5px]"
              } border-[#616161] pb-1`}
            >
              <input
                type="text"
                placeholder="Search"
                className="text-[12px] text-[#616161] outline-none"
                hidden={!searchExpandCity}
              />
              <button onClick={() => setSearchExpandCity((prev) => !prev)}>
                <Image
                  src="/search.svg"
                  alt="search icon"
                  width={13}
                  height={13}
                />
              </button>
            </div>
          </div>
          <div className="mt-4 ">
            <form className="flex flex-col h-[100px] overflow-y-auto px-1">
              {city_data
                .filter((item) =>
                  community ? item.community === community : item
                )
                .map((item, index) => {
                  return (
                    <label key={index} htmlFor={item.city}>
                      <input
                        type="radio"
                        name="city"
                        value={item.city}
                        id={item.city}
                        checked={city === item.city}
                        onChange={onOptionChange}
                      />
                      <span className="ml-2 text-[12px] my-1 text-[#616161]">
                        {item.city}
                      </span>
                    </label>
                  );
                })}
            </form>
          </div>
        </div>

        <div className="mt-4">
          {/* Neighbourhood */}
          <div className="flex justify-between">
            <h4 className="text-[14px] leading-[16px]">NEIGHBOURHOOD</h4>
            <div
              className={`flex justify-between ${
                searchExpandNeighbourhood && "border-b-[0.5px]"
              } border-[#616161] pb-1`}
            >
              <input
                type="text"
                placeholder="Search"
                className="text-[12px] text-[#616161] outline-none"
                hidden={!searchExpandNeighbourhood}
              />
              <button
                onClick={() => setSearchExpandNeighbourhood((prev) => !prev)}
              >
                <Image
                  src="/search.svg"
                  alt="search icon"
                  width={13}
                  height={13}
                />
              </button>
            </div>
          </div>
          <div className="mt-4 ">
            <form className="flex flex-col h-[100px] overflow-y-auto px-1">
              {neighbourhood_data.map((item, index) => {
                return (
                  <label key={index} htmlFor={item.neighbourhood}>
                    <input
                      type="radio"
                      name="neighbourhood"
                      value={item.neighbourhood}
                      id={item.neighbourhood}
                      checked={neighbourhood === item.neighbourhood}
                      onChange={onOptionChange}
                    />
                    <span className="ml-2 text-[12px] my-1 text-[#616161]">
                      {item.neighbourhood}
                    </span>
                  </label>
                );
              })}
            </form>
          </div>
        </div>

        <div className="mt-4">
          {/* Property Type */}
          <div className="flex justify-between">
            <h4 className="text-[14px] leading-[16px]">PROPERTY TYPE</h4>
            <div
              className={`flex justify-between ${
                searchExpandProperty && "border-b-[0.5px]"
              } border-[#616161] pb-1`}
            >
              <input
                type="text"
                placeholder="Search"
                className="text-[12px] text-[#616161] outline-none"
                hidden={!searchExpandProperty}
              />
              <button onClick={() => setSearchExpandProperty((prev) => !prev)}>
                <Image
                  src="/search.svg"
                  alt="search icon"
                  width={13}
                  height={13}
                />
              </button>
            </div>
          </div>
          <div className="mt-4 ">
            <form className="flex flex-col h-[100px] overflow-y-auto px-1">
              {property_data.map((item, index) => {
                return (
                  <label key={index} htmlFor={item.subtype_ENG}>
                    <input
                      type="radio"
                      name="type"
                      value={item.subtype_ENG}
                      id={item.subtype_ENG}
                      checked={type === item.subtype_ENG}
                      onChange={onOptionChange}
                    />
                    <span className="ml-2 text-[12px] my-1 text-[#616161] ">
                      {item.subtype_ENG}
                    </span>
                  </label>
                );
              })}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
