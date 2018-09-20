const mysql = require('mysql')
const debug = require('debug')('nw-mysql')

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'd3vin'
})

connection.connect()

const sql = `SELECT * FROM d3vin.test;`
connection.query(sql, function (error, results, fields) {
  if (error) throw error
  debug('Result count:', results.length)

  document.write(results.map(row => row.name).join('<br />'))
})

connection.end()
