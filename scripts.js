/* eslint disable */

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

/* Use forEach to console log each name to the console. You are allowed to call console.log seven times. */
names.forEach((n) => console.log(n));

/* Use forEach to console log each name with a matching province (for example Ashwin (Western Cape)). Note that you are only allowed to call console.log seven times. */
names.forEach((name, index) => {
    const province = provinces[index];
    console.log(`${name} (${province})`);
});

/* Using map, convert all province names to uppercase. Log the new array to the console. */
const upperProvinces = provinces.map(p => p.toUpperCase());
console.log(upperProvinces);

/* Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 7, 7] */
const countCharacters = names.map(n => n.length);
console.log(countCharacters);

/* Using toSorted to sort all provinces alphabetically. */
const sorting = provinces.sort();
console.log(sorting);

/* Use filter to remove all provinces that have the word "Cape" in them. After filtering the array, return the amount of provinces left. The final value should be 3 */
const filteredProvinces = provinces.filter(p => !p.includes('Cape'));
console.log(filteredProvinces.length);

/* Create a boolean array by using map and some to determine whether a name contains an 'S' character. The result should be [true, true, false, true, true, false] */
const hasSCharacter = names.map(n => n.includes('S'));
console.log(hasSCharacter);

/* Using only reduce, turn the above into an object that indicates the province of an individual.
In other words:
{
    Ashwin: 'Western Cape',
    Sibongile: 'Gauteng',
    'Jan-Hendrik': 'Northern Cape',
    Sifso: 'Eastern Cape',
    Shailen: 'KwaZulu-Natal',
    Frikkie: 'Free State',
} */
const provinceObject = names.reduce((acc, name, i) => {
  return { ...acc, [name]: provinces[i] };
}, {});
console.log(provinceObject);


const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

/* Use forEach to console.log each product name to the console. */
products.forEach(p => {
   console.log(p.product);
});

/* Use filter to filter out products that have a name longer than 5 characters */
const filteredProducts = products.filter(p => p.product.length <= 5);
console.log(filteredProducts);

/* Using both filter and map. Convert all prices that are strings to numbers, and remove all products from the array that do not have prices. After this has been done then use reduce to calculate the combined price of all remaining products. */
const pricesOnly = products.filter(p => p.price !== '' && !isNaN(parseFloat(p.price))).map(p => parseFloat(p.price));
const totalPrice = pricesOnly.reduce((acc, price) => acc + price, 0);
console.log(totalPrice);

/* Use reduce to concatenate all product names to create the following string: "banana, mango, potato, avocado, coffee and tea." */
const concatenatedString = products.reduce((acc, p) => {
    if (acc !== '') {
        acc += ', ';
    }
    acc += p.product;
    return acc;
}, '');
console.log(concatenatedString);

/* Use reduce to calculate both the highest and lowest-priced items. The names should be returned as the following string: "Highest: coffee. Lowest: banana." */
const maxPrice = products.reduce((max, p) => Math.max(max, parseFloat(p.price) || 0), 0);
const minPrice = products.reduce((min, p) => Math.min(min, parseFloat(p.price) || Infinity), Infinity);

const maxProduct = products.find(p => parseFloat(p.price) === maxPrice)?.product;
const minProduct = products.find(p => parseFloat(p.price) === minPrice)?.product;

console.log(`Highest: ${maxProduct}. Lowest: ${minProduct}.`);

/* Using only Object.entries and reduce recreate the object with the exact same values. However, the following object keys should be changed in the new array:
    product should be changed to name
    price should be changed to cost */

const updatedProducts = products.reduce((acc, p) => {
    const { product, price } = p;
    acc.push({ name: product, cost: price });
    return acc;
}, []);

console.log(updatedProducts);



