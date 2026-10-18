// 1. Asynchronous function to fetch weather data
async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    
    // If the response is not OK (e.g., 404 for Paris), throw an error
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// 2. Asynchronous function to display the data
async function showWeather(city) {
  const data = await getWeather(city);

  // If data is undefined (error occurred), show alert
  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  // Reveal the weather card
  document.getElementById("weather-display").style.display = "block";

  // Helper function to display data or "N/A" if undefined
  const displayVal = (id, value) => {
    document.getElementById(id).textContent = value !== undefined ? value : "N/A";
  };

  // Populate the DOM elements
  displayVal("location", data.name);
  displayVal("main-temperature", data.main?.temp);
  displayVal("feels-like", data.main?.feels_like);
  displayVal("humidity", data.main?.humidity);
  displayVal("wind", data.wind?.speed);
  displayVal("wind-gust", data.wind?.gust);
  displayVal("weather-main", data.weather?.[0]?.main);

  // Set the icon source
  const iconUrl = data.weather?.[0]?.icon;
  document.getElementById("weather-icon").src = iconUrl ? iconUrl : "";
}

// 3. Event Listener for the button
document.getElementById("get-weather-btn").addEventListener("click", () => {
  const city = document.getElementById("city-select").value;
  
  // If no city is selected, do nothing
  if (city) {
    showWeather(city);
  }
});