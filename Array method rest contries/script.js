function fetchAndProcessData() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      const outputDiv = document.getElementById("output");

      const asiaCountries = data.filter((country) => country.region === "Asia");

      const smallPopulationCountries = data.filter(
        (country) => country.population < 200000
      );

    
      const totalPopulation = data.reduce(
        (total, country) => total + country.population,
        0
      );

      const usDollarCountries = data.filter(
        (country) => country.currencies && country.currencies.USD
      );

      outputDiv.innerHTML += "<h2>Countries in Asia:</h2>";
      asiaCountries.forEach((country) => {
        outputDiv.innerHTML += `<p>Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}</p>`;
      });

      outputDiv.innerHTML +=
        "<h2>Countries with a population of less than 2 lakhs:</h2>";
      smallPopulationCountries.forEach((country) => {
        outputDiv.innerHTML += `<p>Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}</p>`;
      });

      outputDiv.innerHTML += `<h2>Total Population of All Countries:</h2>`;
      outputDiv.innerHTML += `<p>${totalPopulation}</p>`;

      outputDiv.innerHTML += "<h2>Countries using US Dollars as currency:</h2>";
      usDollarCountries.forEach((country) => {
        outputDiv.innerHTML += `<p>Name: ${country.name.common}</p>`;
      });
    })
    .catch((error) => {
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `<p>Error fetching data: ${error}</p>`;
    });
}

fetchAndProcessData();
