import React, { useState } from 'react';

const Input = () => {
    const [binNum, setBinNum] = useState("");
    const [decNum, setDecNum] = useState(0);
    const [isBinToDecConversion, setIsBinToDecConversion] = useState(true);

    const handleBinaryInput = (e) => {
        const { value } = e.target;
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
        <div>
            {isBinToDecConversion
                ? <>
                    <div>
                        <label id="label_number_binary"> Enter binary Number </label>
                        <input type="number" id="number_binary" value={binNum} onChange={handleBinaryInput} />
                    </div><div>
                        <label id="label_number_binary"> Decimal number </label>
                        <input type="number" id="number_decimal" readOnly={true} value={decNum} />
                    </div>
                </>
                : <>
                    <div>
                        <label id="label_number_binary"> Enter decimal number </label>
                        <input type="number" id="number_decimal" value={decNum} onChange={handleDecimalInput} />
                    </div><div>
                        <label id="label_number_binary"> Binary Number </label>
                        <input type="number" id="number_binary" readOnly={true} value={binNum} />
                    </div>
                </>
            }

            <button id="button_convert_to_decimal" onClick={handleClick}> Convert </button>
            <button id="button_swap_conversion" onClick={handleSwapConversion}> Swap </button>
        </div>
    );
}

export default Input;