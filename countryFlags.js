// country flags alone should reflect:

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function (){
    const data = JSON.parse(xhr.response);
    console.log(data);
};
