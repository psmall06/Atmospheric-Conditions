function searchCity(city) {
  let apiKey = d3o08645bfa7aet464f60cce518af4bc;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key};`;
}

function handleSearchSubmit(Event) {
  Event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
