import React, { useState, useEffect, useCallback } from "react";
import { community_data, city_data, neighbourhood_data } from "../data/comm_data";
import property_data from "../data/property_data";
import MultiRangeSlider from "./MultiRangeSlider";
import FilterComponent from "./FilterComponent";
import { RxCross2 } from "react-icons/rx";

const Filters = ({
  selection,
  setSelection,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  fetchData }) => {

  // Selected Filter Values
  const [community, setCommunity] = useState();
  const [city, setCity] = useState();
  const [neighbourhood, setNeighbourhood] = useState();
  const [property, setProperty] = useState({});
  const [filter, setFilter] = useState();
  const [interest, setInterest] = useState();

  // Data States
  const [communityArray, setCommunityArray] = useState(community_data);
  const [cityArray, setCityArray] = useState(city_data);
  const [neighbourhoodArray, setNeighbourhoodArray] = useState(neighbourhood_data);
  const [propertyArray, setPropertyArray] = useState(property_data);

  const debounce = (callback, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const debouncedSetMinPrice = debounce(setMinPrice, 300);
  const debouncedSetMaxPrice = debounce(setMaxPrice, 300);

  useEffect(() => {
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

      return reqParams;
    });

    const sortBy = "estimated_yield";
    fetchData(reqParamsArray, sortBy);

  }, [selection, minPrice, maxPrice]);


  const onOptionChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "community") {
      setCommunity(value);
      setCity();
      setNeighbourhood();
      const filteredCities = city_data.filter((item) => item.community === e.target.value);
      setCityArray(filteredCities);
      setNeighbourhoodArray(neighbourhood_data);
    } else if (e.target.name === "city") {
      setCity(value);
      setNeighbourhood();
      const filteredNeighbourhoods = neighbourhood_data.filter((item) => item.city === e.target.value);
      setNeighbourhoodArray(filteredNeighbourhoods);
    } else if (e.target.name === "neighbourhood") {
      setNeighbourhood(value);
    } else if (e.target.name === "subtype_ENG") {
      const selectedProperty = property_data.find(item => item.subtype_ENG === e.target.value);
      setProperty(selectedProperty);
    } else if (e.target.name === "filter") {
      setFilter(e.target.value);
    } else if (e.target.name === "interest") {
      setInterest(e.target.value);
    }
  };


  const onOptionClear = (name) => {
    if (name === "community") {
      setCommunity('');
      setCity('');
      setNeighbourhood('');
      setCityArray(city_data);
    } else if (name === "city") {
      setCity('');
      setNeighbourhood('');
      setNeighbourhoodArray(neighbourhood_data);
    } else if (name === "neighbourhood") {
      setNeighbourhood();
    } else if (name === "subtype_ENG") {
      setProperty({});
    }
  }

  const handleSelection = () => {
    const newSelection = { neighbourhood, community, city, id_subid: property.id_subid, subtype_ENG: property.subtype_ENG };
    setSelection(prev => [...prev, newSelection]);
    setCommunity('');
    setCity('');
    setNeighbourhood('');
    setProperty({});
    setCityArray(city_data);
    setNeighbourhoodArray(neighbourhood_data);
  }

  // Handler Functions End




  return (
    <>
      <div>
        {
          selection.map((item, index) => {
            return <h5 title={`${item.community} ${item.city} ${item.neighbourhood} ${item.property && `(${item.property.subtype_ENG})`}`} key={index} className='text-[12px] text-black truncate cursor-pointer'>{item.community} {item.city} {item.neighbourhood} {item.property && `(${item.property.subtype_ENG})`}</h5>
          }
          )
        }
      </div>
      <div className="flex flex-col my-4">
        <FilterComponent name="community"
          value={community}
          filteredArray={communityArray} setFilteredArray={setCommunityArray} onOptionChange={onOptionChange}
          onOptionClear={onOptionClear}
        />
        <FilterComponent name="city"
          value={city}
          filteredArray={cityArray} setFilteredArray={setCityArray} onOptionChange={onOptionChange}
          onOptionClear={onOptionClear}
        />

        <FilterComponent name="neighbourhood"
          value={neighbourhood}
          filteredArray={neighbourhoodArray} setFilteredArray={setNeighbourhoodArray} onOptionChange={onOptionChange}
          onOptionClear={onOptionClear}
        />

        <FilterComponent title="property type" name="subtype_ENG"
          value={property.subtype_ENG}
          filteredArray={propertyArray} setFilteredArray={setPropertyArray} onOptionChange={onOptionChange}
          onOptionClear={onOptionClear}
        />

        <button hidden={!community && !city && !neighbourhood && !property.subtype_ENG}
          className="text-[12px] border-[0.5px] border-[#616161] py-2"
          onClick={handleSelection}
        > </button>

        {/* Price */}
        <div className='my-4'>
          <h4 className="text-[14px] leading-[16px]">PRICE</h4>
          <div className="mt-4 flex relative flex-col items-center">
            <MultiRangeSlider
              min={0}
              max={2000000}
              onChangeMin={({ min }) => {
                debouncedSetMinPrice(min)
              }}
              onChangeMax={({ max }) => {
                debouncedSetMaxPrice(max)
              }}
            />
          </div>
        </div>

        {/* Filter */}
        <div className="mt-4">
          <h4 className="text-[14px] leading-[16px]">FILTER</h4>
          <div hidden={filter} className="overflow-y-auto px-1" >
            <form className="mt-4 flex flex-col h-[80px] ">
              <label htmlFor="no-filter">
                <input
                  type="radio"
                  name="filter"
                  value="No Filter"
                  id="no-filter"
                  checked={filter === "no-filter"}
                  onChange={onOptionChange}
                />
                <span className="ml-2 text-[12px] my-1 text-[#616161] ">
                  No Filters
                </span>
              </label>
              <label htmlFor='10-samples'>
                <input
                  type="radio"
                  name="filter"
                  value='More than 10 samples'
                  id='10-samples'
                  checked={filter === 'More than 10 samples'}
                  onChange={onOptionChange}
                />
                <span className="ml-2 text-[12px] my-1 text-[#616161] ">
                  More than 10 Samples
                </span>
              </label>
              <label htmlFor='25-samples'>
                <input
                  type="radio"
                  name="filter"
                  value='More than 25 samples'
                  id='25-samples'
                  checked={filter === 'More than 25 samples'}
                  onChange={onOptionChange}
                />
                <span className="ml-2 text-[12px] my-1 text-[#616161] ">
                  More than 25 samples
                </span>
              </label>
            </form>
          </div>
          <div className="mt-4 pl-1 w-[100%]" hidden={!filter}>
            <div className="flex justify-between">
              <form>
                <label className="pointer-events-none">
                  <input
                    type="radio"
                    name="filter"
                    checked={true}
                  />
                  <span className="ml-2 text-[12px] text-[#616161]">{filter}</span>
                </label>
              </form>
              <button onClick={() => setFilter("")}>
                <RxCross2 />
              </button>
            </div>
          </div>
        </div>

        {/* Field of Interest */}
        <div className="mt-4" >
          <h4 className="text-[14px] leading-[16px]">FIELD OF INTEREST</h4>
          <div className="mt-4 px-1" hidden={interest}>
            <label htmlFor="interest">
              <input
                type="radio"
                name="interest"
                value="Show Field of Interest"
                id="interest"
                checked={interest === "interest"}
                onChange={onOptionChange}
              />
              <span className="ml-2 text-[12px] my-1 text-[#616161] ">
                Show Field of Interest
              </span>
            </label>
          </div>
          <div className="mt-4 w-[100%] px-1" hidden={!interest}>
            <div className="flex justify-between">
              <form>
                <label className="pointer-events-none">
                  <input
                    type="radio"
                    value="Show Field of Interest"
                    checked={true}
                  />
                  <span className="ml-2 text-[12px] text-[#616161]">{interest}</span>
                </label>
              </form>
              <button onClick={() => setInterest("")}>
                <RxCross2 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
