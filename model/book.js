const axios = require('axios')
require('dotenv').config()

function getUrlForBooks(bookName) {

  const baseUrl = `https://www.googleapis.com/books/v1/volumes`
  return `${baseUrl}?q=${bookName}&key=${process.env.apiKey}`

}

async function getAllBooks(bookName) {
  try { 
    const { data } = await axios.get(getUrlForBooks(bookName))
    //console.log(data.items)
    return data
  } catch(error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getAllBooks,
}