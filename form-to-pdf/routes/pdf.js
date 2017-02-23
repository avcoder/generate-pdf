var express = require('express');
var router = express.Router();
var PDFDocument = require('pdfkit');


router.post('/', (req, res) => {
  const doc = new PDFDocument()
  let filename = req.body.filename

  // stripping special characters
  filename = encodeURIComponent(filename) + '.pdf'

  // setting response to attachment download.
  // if you use inline here it will automatically open the pdf
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
  res.setHeader('Content-type', 'application/pdf')

  const content = req.body.content
  doc.y = 300
  doc.text(content, 50, 50)
  doc.pipe(res)
  doc.end()
});

module.exports = router;
