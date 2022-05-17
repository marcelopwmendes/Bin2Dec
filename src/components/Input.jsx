import React, { useState } from 'react';

const Input = () => {
    const [binNum, setBinNum] = useState("");
    const [decNum, setDecNum] = useState(0);

    const [isBinToDecConversion, setIsBinToDecConversion] = useState(true);
    const [isBinaryNumber, setIsBinaryNumber] = useState(true);

    const handleBinaryInput = (e) => {
        const { value } = e.target;
        if (value === "") {
            setIsBinaryNumber(true);
            setBinNum(value);
            return;
        }

        const valueArr = value.split("");

        let flag = true;

        valueArr.forEach(element => {
            if (element !== "0" && element !== "1") {
                flag = false;
            }
        });

        setIsBinaryNumber(flag);
        setBinNum(value);
    }

    const handleDecimalInput = (e) => {
        const { value } = e.target;
        setDecNum(value);
    }

    const handleClick = () => {
        var result = 0;

        if (isBinToDecConversion) {
            var binaryArray = binNum.split("")

            var previousValue = 0

            binaryArray.forEach(b => {
                previousValue = previousValue * 2 + parseInt(b);
            });

            result = previousValue;
            setDecNum(result);
            return;
        }
        var decimalNumber = parseInt(decNum);

        var quotient = decimalNumber;
        var remainder = 0;
        result = (decimalNumber % 2).toString();

        while (quotient > 1) {
            quotient = parseInt(quotient / 2);
            remainder = quotient % 2;
            result = remainder + result;
        }

        setBinNum(result);
    }

    const handleSwapConversion = () => {
        if (isBinToDecConversion) {
            setIsBinToDecConversion(false);
            return;
        }

        setIsBinToDecConversion(true);
    }

    return (
        <div className='bg-blue-400 h-56 my-auto flex flex-col justify-center'>
            {isBinToDecConversion
                ? <>
                    <div>
                        {!isBinaryNumber ? <div> <label style={{ border: "solid", borderColor: "#F8D7DA", backgroundColor: "#F8D7DA", color: "#721C24" }}> The inserted number is not binary! </label> </div> : ""}
                        <label id="label_number_binary" className='flex text-gray-700 text-sm font-bold my-auto mx-6'> Enter binary Number </label>
                        <input type="number" id="number_binary" value={binNum} className="block w-100 h-10 px-3 my-auto mx-6 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" onChange={handleBinaryInput} />
                    </div><div>
                        <label id="label_number_binary" className='flex text-gray-700 text-sm font-bold my-auto mx-6'> Decimal number </label>
                        <input type="number" id="number_decimal" readOnly={true} value={decNum} className="block w-100 h-10 px-3 my-auto mx-6 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
                    </div>
                </>
                : <>
                    <div>
                        <label id="label_number_binary" className='flex text-gray-700 text-sm font-bold my-auto mx-6'> Enter decimal number </label>
                        <input type="number" id="number_decimal" value={decNum} className="block w-100 h-10 px-3 my-auto mx-6 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" onChange={handleDecimalInput} />
                    </div><div>
                        <label id="label_number_binary" className='flex text-gray-700 text-sm font-bold my-auto mx-6'> Binary Number </label>
                        <input type="number" id="number_binary" readOnly={true} value={binNum} className="block w-100 h-10 px-3 my-auto mx-6 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
                    </div>
                </>
            }

            <span className='flex flex-row my-4 mx-6 w-auto'>
                <button id="button_convert_to_decimal" className='w-24 mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleClick}> Convert </button>
                <button id="button_swap_conversion" className='w-24 text-blue-500 hover:text-blue-700 bg-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleSwapConversion}> Swap </button>
            </span>
        </div>
    );
}

export default Input;