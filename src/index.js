function binaryToDecimal(){
    var binaryNumber = $("#number_binary").val();
    var binaryArray = binaryNumber.split("")
    
    var previousValue = 0
    var result = 0

    binaryArray.forEach(b => {
        previousValue = previousValue * 2 + parseInt(b);
    });

    result = previousValue;
    $("#number_decimal").val(result);
}

function decimalToBinary(){
    var decimalNumber = parseInt($("#number_decimal").val());
    
    var quotient = decimalNumber;
    var remainder = 0;
    var result = (decimalNumber % 2).toString();

    while (quotient > 1) {
        quotient = parseInt(quotient / 2)
        remainder = quotient % 2
        result = remainder + result
    }

    console.log(result);
    $("#number_binary").val(result);

}