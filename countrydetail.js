// country details names, regions sub region, population:

// Fetch data from the API

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over each country and print its name, region, subregion, and population
    data.forEach(country => {
      console.log("Country Name:", country.name.common);
      console.log("Region:", country.region);
      console.log("Subregion:", country.subregion);
      console.log("Population:", country.population);
      console.log("---------------------");
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });