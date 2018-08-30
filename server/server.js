
const csvFilePath = 'in/csv/test.csv'
const csv = require('csvtojson')
const fs = require('fs')

const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)




csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        // console.log(jsonObj);


        const writeAndRead = async (dataIn) => {

            let parseoJson = JSON.stringify(dataIn)
            let regp = parseoJson.replace(new RegExp(/;/g))

            await writeFile('./out.json', regp)
            const contenido = await readFile('./out.json', 'utf-8')
            return contenido;
        }


        writeAndRead(jsonObj)


    })




