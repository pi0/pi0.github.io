const path = require('path')
const fs = require('fs')
const pdf = require('html-pdf')

const source = path.resolve(__dirname, 'resume.html')
const destination = source.replace('.html', '.pdf')

const html = fs.readFileSync(source, 'utf8')

const options = {
    base: 'file://' + path.resolve(source),
    border: '2cm'
}

pdf.create(html, options).toFile(destination, (err, res) => {
    if (err) throw err
})


