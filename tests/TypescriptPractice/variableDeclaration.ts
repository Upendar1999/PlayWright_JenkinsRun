let quotation : string = " You can Do it";
// console.log(quotation);
// quotation = quotation.toLowerCase();
// console.log(quotation);
// quotation = quotation.toUpperCase();
// console.log(quotation);
// quotation = quotation.trim();
// console.log(quotation);
// quotation = quotation.replace(/\s+/g, "");
// console.log(quotation);
// quotation= quotation.replace(/\s+/g, "");
// let Strlenght = quotation.length;
// console.log(Strlenght);

quotation = quotation.replace(/\s+/g, "");
let reverse = quotation.split("").reverse().join("");
reverse = reverse.toUpperCase();
console.log(reverse);