require('dotenv').config()

const axios = require('axios')

const { API_KEY, PROTOCOL, BASE_URL, UNITS, APILANG } = process.env

var cityName = "diadema"

var url = `${PROTOCOL}${BASE_URL}?q=${cityName}&appid=${API_KEY}&lang=${APILANG}&units=${UNITS}`

axios.get(url)
.then(res => console.log(res))