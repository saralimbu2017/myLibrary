const axios = require('axios')
require('dotenv').config()

function getUrlForBooks(bookName,recordIndex) {
  //let recordIndex = null
  if(recordIndex == undefined) {
    recordIndex = 0
  }
  const baseUrl = `https://www.googleapis.com/books/v1/volumes`
  return `${baseUrl}?q=${bookName}&startIndex=${recordIndex}&maxResults=16&key=${process.env.apiKey}`

}

async function getAllBooks(bookName,recordIndex) {
  try { 
    const { data } = await axios.get(getUrlForBooks(bookName,recordIndex))
    //console.log("data")
    return data
  } catch(error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getAllBooks,
}