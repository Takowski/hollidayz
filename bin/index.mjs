import axios from "axios";
import countryList from "country-list";

const getCountryInfo = async (countryName) => {
    const countryCode = countryList.getCode(countryName);
    const year = new Date().getFullYear(); 
    console.log(countryCode);  
    const url = `https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`;
    const response = await axios.get(url);
    return response.data;
}
const countryName = process.argv[2] || "Belgium";
console.log(await getCountryInfo(countryName));