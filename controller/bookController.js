const book = require('../model/book')
function index(req, res) {
  res.render('index')
}
async function showBooks(req, res) {
  try {
    //console.log()
    // let page = null
    // if(req.params.page !== undefined) {
    //   page = req.params.page
    // } else {
    //   page = 1
    // }
    // const ticketsPerPage = 25
    let googleResponse = await book.getAllBooks(req.query.bookName)
    //const totatCountofTickets = zenTicketsResponse.count
    console.log(googleResponse.items[0].volumeInfo.imageLinks.thumbnail)
    res.render('books', {
       books: googleResponse.items,
       //queryString: 
      // pages: Math.ceil(totatCountofTickets / ticketsPerPage),
      // totatCountofTickets: totatCountofTickets

    })
  } catch(error) {
    res.render('error', {
      error: error.message
    })
  }
}

module.exports = {
  index: index,
  showBooks: showBooks,
 

}