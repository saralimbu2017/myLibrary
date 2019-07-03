const book = require('../model/book')
function index(req, res) {
  res.render('index')
}
async function showBooks(req, res) {
  try {
    let googleResponse = await book.getAllBooks(req.query.bookName,req.query.recordIndex)
    res.json(
      googleResponse.items,
    )
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