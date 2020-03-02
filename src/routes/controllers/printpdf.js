const PDFDocument = require('pdfkit');
const fs = require('fs');

export async function post(req, res) {

    let names = req.body.names

    for (let i = 0; i < names.length; i++) {

        try {
            const name = names[i].name
            console.log(name)

            const doc = new PDFDocument()
            doc.pipe(fs.createWriteStream('sample.pdf'))

            doc
                .text(name, 100, 50)
            doc.end()

        } catch (error) {

        }


    }
}