import axios from "axios";
import countryList from "country-list";

for(let i = 0; i < process.argv.length; ++i) {
	console.log(`index ${i} argument -> ${process.argv[i]}`);
}
