import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./multiRangeSlider.css";

const MultiRangeSlider = ({ min, max, onChangeMin, onChangeMax }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        onChangeMin({ min: minVal });
        onChangeMax({ max: maxVal });
    }, [minVal, maxVal, onChangeMin, onChangeMax]);

    const handleMinInputChange = (e) => {
        const value = Number(e.target.value);
        setMinVal(value);
        minValRef.current = value;
    };

    const handleMaxInputChange = (e) => {
        const value = Number(e.target.value);
        setMaxVal(value);
        maxValRef.current = value;
    };

    return (
        <div>
            <div className="flex justify-between mb-10">
                <div className="w-[45%]">
                    <input
                        className="w-full text-[12px] text-[#616161] p-2 shadow-md"
                        type="text"
                        id="start-time"
                        placeholder="From"
                        value={minVal}
                        onChange={handleMinInputChange}
                    />
                </div>

                <div className="w-[45%]">
                    <input
                        className="w-full text-[12px] text-[#616161] p-2 shadow-md"
                        type="text"
                        id="end-time"
                        placeholder="To"
                        value={maxVal}
                        onChange={handleMaxInputChange}
                    />
                </div>
            </div>

            <div className="container">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                    className="thumb thumb--left"
                    style={{ zIndex: minVal > max - 100 && "5" }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                        maxValRef.current = value;
                    }}
                    className="thumb thumb--right"
                />

                <div className="slider">
                    <div className="slider__track" />
                    <div ref={range} className="slider__range" />
                </div>
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChangeMin: PropTypes.func.isRequired,
    onChangeMax: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
