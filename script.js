const form = document.querySelector("#grid1")
const input = document.querySelector("#textBox")
const place = document.querySelector("#place")
const temperature = document.querySelector("#temperature")

form.addEventListener("submit", e => {
  e.preventDefault()
  showPlaceDetails(input.value)
})

async function showPlaceDetails(name) {
  const Response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${config.apiKey}`
  )
  if (Response.ok) {
    const data = await Response.json()
    place.innerText = data.name
    temperature.innerText = (data.main.temp - 273.15).toFixed(0) + "\u00B0C"
  } else {
    place.innerText = "Try Again"
    temperature.innerText = "--\u00B0C"
  }
}
