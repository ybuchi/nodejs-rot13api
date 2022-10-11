const Pool = require('pg').Pool;
const rot13Converter = require('./rot13converter')

const pool = new Pool({
    host: 'localhost',
    user: 'interviewee',
    port: 5432,
    password: 'rot13forlyfe',
    database: 'rot13_converter'
})


const getStrings = (request, response) => {
    pool.query('SELECT * FROM original_strings ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const postString = (request, response) => {
    const { string } = request.body

    pool.query('INSERT INTO original_strings (string) VALUES ($1)', [string], (error, results) => {
        if(error){
            throw error
        }
        const rot13ConvertedString = rot13Converter.convertToROT13(string)
        // This is where you can take the request (a string) and manipulate it with ROT13 rules to then send it back
        response.status(201).send(rot13ConvertedString)
    } )
}

  module.exports = {
    getStrings,
    postString,
  }