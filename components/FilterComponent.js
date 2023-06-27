

import React, { useState, useEffect } from "react";
import { List, AutoSizer } from "react-virtualized";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import "../app/scrollbar.css";

const FilterComponent = ({
    name,
    title,
    value,
    handleSearch,
    filteredArray,
    onOptionChange,
    onOptionClear
}) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState(filteredArray);
    const [searchExpandFlag, setSearchExpandFlag] = useState(false);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchValue(inputValue);
    };

    const clearSearch = () => {
        setSearchValue("");
    };

    useEffect(() => {
        const search = async () => {
            if (searchValue) {
                const results = await handleSearch(searchValue);
                setSearchResults(results);
            } else {
                setSearchResults(filteredArray);
            }
        };

        search();
    }, [searchValue, handleSearch, filteredArray]);


    return (
        <div className="mb-4">
            <div className="flex justify-between">
                <h4 className="text-[14px] leading-[16px]">{title ? title.toUpperCase() : name.toUpperCase()}</h4>
                <div
                    className={`flex justify-between ${searchExpandFlag && "border-b-[0.5px]"
                        } border-[#616161] pb-1`}
                >
                    <input
                        type="text"
                        id="search"
                        placeholder="Search"
                        className="text-[12px] text-[#616161] outline-none w-[150px] py-1 px-2 shadow-sm mr-1 rounded-full"
                        hidden={!searchExpandFlag}
                        value={searchValue}
                        onChange={handleInputChange}
                    />
                    <button onClick={() => {
                        setSearchExpandFlag((prev) => !prev)
                        clearSearch();
                    }}>
                        <Image
                            src="/search.svg"
                            alt="search icon"
                            width={13}
                            height={13}
                        />
                    </button>
                </div>
            </div>
            <div className={`mt-4 w-full ${searchResults.length > 0 ? 'h-[150px]' : 'h-[30px]'} `} hidden={value}>
                <AutoSizer>
                    {({ width, height }) => (
                        filteredArray.length > 0 ?
                            searchResults &&
                            <form>
                                <List
                                    width={width}
                                    height={height}
                                    rowHeight={30}
                                    rowCount={searchResults.length}
                                    rowRenderer={({ key, index, style }) => {
                                        const item = searchResults[index];
                                        return (
                                            <div key={key} style={style} className="ml-2">
                                                <label htmlFor={item[name]} className="truncate">
                                                    <input
                                                        type="radio"
                                                        name={name}
                                                        value={item[name]}
                                                        id={item[name]}
                                                        checked={value === item[name]}
                                                        onChange={(e) => {
                                                            onOptionChange(e);
                                                        }
                                                        }
                                                    />
                                                    <span className="ml-2 text-[12px] my-1 text-[#616161]">
                                                        {item[name]}
                                                    </span>
                                                </label>
                                            </div>
                                        );
                                    }}
                                />
                            </form>
                            : <div style={{ width: width, height: height }}>
                                <p className="text-center text-[12px] my-1 text-[#616161]">No Results!</p>
                            </div>
                    )}
                </AutoSizer>
            </div>
            <div className="mt-4 pl-2 w-[100%]" hidden={!value}>
                <div className="flex justify-between">
                    <form>
                        <label htmlFor={value} className="pointer-events-none">
                            <input
                                type="radio"
                                // name={name}
                                // value={value}
                                // id={value}
                                checked={true}
                                onChange={() => console.log(value)}
                            />
                            <span className="ml-2 text-[12px] text-[#616161]">{value}</span>
                        </label>
                    </form>
                    <button onClick={() => {
                        onOptionClear(name)
                    }}>
                        <RxCross2 />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;