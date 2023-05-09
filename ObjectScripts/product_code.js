// Exercise 2 page 14
"use strict";

function parsePartCode(productCode) {
    let colonPos = productCode.indexOf(":");
    let dashPos = productCode.indexOf("-");
    let suppCode = productCode.substring(0, colonPos);
    let prodNum = productCode.substring(colonPos+1, dashPos)
    let sizeCode = productCode.substring(dashPos+1);
    let code = {
        supplierCode: suppCode,
        productNumber: prodNum,
        size: sizeCode
    };
    return code;
}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
 " Product Number: " + part1.productNumber +
 " Size: " + part1.size);